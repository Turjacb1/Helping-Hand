// // // const express = require('express');
// // // const bodyParser = require('body-parser');

// // // const mongoose=require('mongoose');



// // // mongoose.connect('mongodb+srv://doctors-portal:<hFjwho673m3dFlSe>@doctors-portal.ixzoe.mongodb.net/?retryWrites=true&w=majority&appName=doctors-portal')

// // // const app=express();
// // // const port=5000;

// // // app.use(bodyParser.json());
// // // app.use(express.static(__dirname));




// // // app.get('',(req,res)=>{
// // //     res.send("hello from db it working ")
// // // })



// // // app.listen(process.env.PORT || port)









// // // const express = require('express');
// // // const bodyParser = require('body-parser');
// // // const mongoose = require('mongoose');
// // // const cors = require('cors');

// // // // MongoDB connection string
// // // mongoose.connect('mongodb+srv://doctors-portal:hFjwho673m3dFlSe@doctors-portal.ixzoe.mongodb.net/doctorsPortal?retryWrites=true&w=majority', {
// // //   useNewUrlParser: true,
// // //   useUnifiedTopology: true,
// // // })
// // // .then(() => console.log('MongoDB connected...'))
// // // .catch((err) => console.log('Error connecting to MongoDB:', err));

// // // const app = express();
// // // const port = process.env.PORT || 5000;

// // // // Middleware
// // // app.use(cors());
// // // app.use(bodyParser.json());

// // // // MongoDB Schema and Model for appointments
// // // const AppointmentSchema = new mongoose.Schema({
// // //   name: String,
// // //   email: String,
// // //   phone: String,
// // //   age: Number,
// // //   weight: Number,
// // //   gender: String,
// // //   appointmentOn: String,
// // //   date: Date
// // // });

// // // const Appointment = mongoose.model('Appointment', AppointmentSchema);

// // // // Routes
// // // app.get('/', (req, res) => {
// // //   res.send('Server is working');
// // // });

// // // // Post appointment data
// // // app.post('/appointments', async (req, res) => {
// // //   const appointmentData = req.body;

// // //   const newAppointment = new Appointment(appointmentData);
// // //   try {
// // //     const savedAppointment = await newAppointment.save();
// // //     res.json(savedAppointment);
// // //   } catch (error) {
// // //     res.status(500).send('Error saving appointment data');
// // //   }
// // // });

// // // // Start the server
// // // app.listen(port, () => {
// // //   console.log(`Server is running on port ${port}`);
// // // });







// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });







          //Main code

          require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');



// Load environment variables
const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

// MongoDB connection string
const mongoURI = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload());

// Serve static files like images
app.use('/doctors', express.static(__dirname + '/doctors'));

// MongoDB Schema and Models
const AppointmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  age: Number,
  weight: Number,
  gender: String,
  appointmentOn: String,
  date: Date,
});

const DoctorSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  qualification: String,
  image: String, // Store the image path or URL
  role: { type: String, default: 'doctor' }, // Role field, default is 'doctor'
});

const ReviewSchema = new mongoose.Schema({
  name: String,
  title: String,
  review: String,
  rating: Number,
  date: { type: Date, default: Date.now },
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);
const Doctor = mongoose.model('Doctor', DoctorSchema);
const Review = mongoose.model('Review', ReviewSchema);

// Routes



// Home route
app.get('/', (req, res) => {
  res.send('Server is working');
});

// Route to get all appointments
app.get('/allAppointments', async (req, res) => {
  try {
    const allAppointments = await Appointment.find();
    res.json(allAppointments);
  } catch (error) {
    res.status(500).send('Error fetching appointments data');
  }
});

// Route to get all doctors
app.get('/doctors', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).send('Error fetching doctors data');
  }
});

// Route to get all reviews
app.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).send('Error fetching reviews');
  }
});

// Route to post a new review
app.post('/reviews', async (req, res) => {
  const { name, title, review, rating } = req.body;

  const newReview = new Review({
    name,
    title,
    review,
    rating,
  });

  try {
    const savedReview = await newReview.save();
    res.json(savedReview);
  } catch (error) {
    res.status(500).send('Error saving review');
  }
});

// Route to get appointments by date
app.post('/appointmentsByDate', async (req, res) => {
  const { date } = req.body;

  try {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0); // Start of the day

    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999); // End of the day

    const appointments = await Appointment.find({
      date: {
        $gte: startOfDay,
        $lte: endOfDay,
      },
    });

    res.json(appointments);
  } catch (error) {
    res.status(500).send('Error fetching appointments data');
  }
});

// Route to post appointment data
app.post('/appointments', async (req, res) => {
  const appointmentData = req.body;

  const newAppointment = new Appointment(appointmentData);
  try {
    const savedAppointment = await newAppointment.save();
    res.json(savedAppointment);
  } catch (error) {
    res.status(500).send('Error saving appointment data');
  }
});

// Route to add a doctor with image upload
app.post('/addADoctor', (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  const file = req.files.file;
  const { name, email, qualification } = req.body;

  const uploadPath = `${__dirname}/doctors/${file.name}`;

  file.mv(uploadPath, async (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send({ msg: 'Failed to upload image' });
    }

    const newDoctor = new Doctor({
      name,
      email,
      qualification,
      image: `doctors/${file.name}`, // Save the relative path to the image
    });

    try {
      await newDoctor.save();
      console.log('Doctor added successfully:', name);
      res.send({ name: file.name, path: `/${file.name}`, name, email, qualification });
    } catch (error) {
      console.error('Error adding doctor:', error);
      res.status(500).send({ msg: 'Failed to add doctor' });
    }
  });
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
