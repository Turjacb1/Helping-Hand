import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddDoctors = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0]; // Correctly access the file
    setFile(newFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from reloading the page

    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', info.name);
    formData.append('email', info.email);

    fetch('http://localhost:5000/addADoctor', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('File upload failed');
        }
      })
      .then((data) => {
        console.log('Server response:', data);
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
      });
  };

  return (
    <section className="container-fluid row">
      {/* Sidebar stays on the left */}
      <div className="col-md-2">
        <Sidebar />
      </div>

      {/* Form section - centered within its column */}
      <div className="col-md-10 d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="col-md-6 p-4" style={{ textAlign: 'center' }}>
          <h5 className="text-brand">Add a Doctor</h5>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Name</label>
              <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Upload your image</label>
              <input onChange={handleFileChange} type="file" className="form-control" placeholder="Picture" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddDoctors;
