// import React from 'react';
// import Modal from 'react-modal';
// import { useForm } from "react-hook-form";


// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

// Modal.setAppElement('#root');

// const AppointmentForm = ({ modalIsOpen, appointmentOn, closeModal ,date}) => {
//   // useForm hook for form handling
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   // Form submission handler
//   const onSubmit = (data) => {
//     console.log(data);
//     // You can add further logic to handle form data submission
//     closeModal(); // Optionally close the modal after form submission
//   };

//   return (
//     <div>
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel="Appointment Form Modal">

//         <h2 className="text-brand text-center">{appointmentOn}</h2>
//         <p className="text-secondary text-center">On {date.toDateString()}</p>

//         {/* Form for appointment */}
//         <form onSubmit={handleSubmit(onSubmit)}>


//           {/* Name input */}
//           <input
//             {...register("name", { required: true })}
//             placeholder="Your Name"
//           />
//           {errors.name && <span>This field is required</span>}

//           {/* Email input */}
//           <input
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//                 message: "Invalid email address",
//               },
//             })}
//             placeholder="Your Email"
//           />
//           {errors.email && <span>{errors.email.message}</span>}

//           {/* Phone input */}
//           <input
//             {...register("phone", { required: true })}
//             placeholder="Your Phone Number"/>
//           {errors.phone && <span>This field is required</span>}
           


//          {/*age input*/}
//          <input
//             {...register("age", { required: true })}
//             placeholder="Your Age"/>

//           {errors.age && <span>This field is required</span>}



//           {/*weight input*/}
//           <input
//             {...register("weight", { required: true })}
//             placeholder="Your Weight"
//           />
//           {errors.weight && <span>This field is required</span>}




//           {/* Gender dropdown */}
//           <select className="form-control" {...register("gender", { required: true })}>
//             <option value="" disabled>Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>
//           {errors.gender && <span>This field is required</span>}



//           {/* Submit button */}
//           <input type="submit" value="Submit" className="btn btn-primary" />
//         </form>


//       </Modal>
//     </div>
//   );
// };

// export default AppointmentForm;












import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import axios from 'axios'; // Import Axios

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const AppointmentForm = ({ modalIsOpen, appointmentOn, closeModal, date }) => {
  // useForm hook for form handling
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Form submission handler
  const onSubmit = (data) => {
    const appointmentData = { ...data, appointmentOn, date }; // Combine form data with appointmentOn and date

    axios.post('http://localhost:5000/appointments', appointmentData)
      .then(response => {
        console.log('Appointment saved:', response.data);
        closeModal(); // Optionally close the modal after form submission
      })
      .catch(error => {
        console.error('Error saving appointment:', error);
      });
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Appointment Form Modal"
      >
        <h2 className="text-brand text-center">{appointmentOn}</h2>
        <p className="text-secondary text-center">On {date.toDateString()}</p>

        {/* Form for appointment */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name input */}
          <input
            {...register("name", { required: true })}
            placeholder="Your Name"
          />
          {errors.name && <span>This field is required</span>}

          {/* Email input */}
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email address",
              },
            })}
            placeholder="Your Email"
          />
          {errors.email && <span>{errors.email.message}</span>}

          {/* Phone input */}
          <input
            {...register("phone", { required: true })}
            placeholder="Your Phone Number"
          />
          {errors.phone && <span>This field is required</span>}

          {/* Age input */}
          <input
            {...register("age", { required: true })}
            placeholder="Your Age"
          />
          {errors.age && <span>This field is required</span>}

          {/* Weight input */}
          <input
            {...register("weight", { required: true })}
            placeholder="Your Weight"
          />
          {errors.weight && <span>This field is required</span>}

          {/* Gender dropdown */}
          <select className="form-control" {...register("gender", { required: true })}>
            <option value="" disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <span>This field is required</span>}

          {/* Submit button */}
          <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;

