import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserAPI } from '../services/allAPI';

const Create = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const navigate = useNavigate();

  // Refs for inputs
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const submitRef = useRef();

  // Focus on the "Name" input field when the component loads
  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!values.name || !values.email || !values.phone) {
      alert('Please fill in all the fields before submitting.');
      return;
    }
  
    try {
      const response = await createUserAPI(values);
      console.log('User created successfully:', response);
      navigate('/');
      alert('User data added successfully!');
    } catch (error) {
      console.error('Error creating user:', error);
      alert('An error occurred while adding the user. Please try again.');
    }
  };
  

  // Handle Enter key to move to next field
  const handleKeyDown = (e, nextRef) => {
    if (e.key === 'Enter' && nextRef.current) {
      e.preventDefault(); // Prevent form submission
      nextRef.current.focus();
    }
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-dark">
      <div className="w-50 shadow-lg px-5 pt-3 pb-5 rounded">
        <h1 className="text-secondary">Add a User</h1>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-2">
            <label htmlFor="name" className="text-light">Name:</label>
            <input
              type="text"
              name="name"
              ref={nameRef} // Add ref to Name input
              className="form-control bg-dark text-light border-0 border-bottom border-secondary"
              placeholder="Enter Name"
              style={{ borderRadius: '0' }} // Remove rounded corners
              value={values.name}
              onChange={e => setValues({ ...values, name: e.target.value })}
              onKeyDown={(e) => handleKeyDown(e, emailRef)}
            />
          </div>

          {/* Email Input */}
          <div className="mb-2">
            <label htmlFor="email" className="text-light">Email:</label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              className="form-control bg-dark text-light border-0 border-bottom border-secondary"
              placeholder="Enter Email"
              style={{ borderRadius: '0' }} // Remove rounded corners
              value={values.email}
              onChange={e => setValues({ ...values, email: e.target.value })}
              onKeyDown={(e) => handleKeyDown(e, phoneRef)}
            />
          </div>

          {/* Phone Input */}
          <div className="mb-3">
            <label htmlFor="phone" className="text-light">Phone:</label>
            <input
              type="text"
              name="phone"
              ref={phoneRef}
              className="form-control bg-dark text-light border-0 border-bottom border-secondary"
              placeholder="Enter Phone"
              style={{ borderRadius: '0' }} // Remove rounded corners
              value={values.phone}
              onChange={e => setValues({ ...values, phone: e.target.value })}
              onKeyDown={(e) => handleKeyDown(e, submitRef)}
            />
          </div>

          {/* Submit and Back Buttons */}
          <div>
            <button
              type="submit"
              ref={submitRef}
              className="btn btn-success me-3"
            >
              Submit
            </button>
            <Link to="/" className="btn btn-primary">
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
