import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SERVERURL from '../services/serverURL';

const Read = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  console.log('User ID:', id); // Log to verify the ID value

  useEffect(() => {
    const userId = id; // Log the ID to check if it's correct
    console.log("Fetching user with ID:", userId);

    axios
      .get(`${SERVERURL}/users/` + id)
      .then(res => setData(res.data))
      .catch(err => {
        console.log('Error fetching user:', err);
        if (err.response) {
          console.log('Error response:', err.response);
          console.log('Status:', err.response.status);
          console.log('Data:', err.response.data); 
        }
      });
  }, []); 

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-dark text-light">
      <div className="w-50  bg-dark shadow-lg px-5 pt-3 pb-5 rounded text-secondary text-center">
        <h3  className='text-light'>Detail of User</h3>
        <div className="mb-3 mt-4">
          <strong>Name: {data.name}</strong>
        </div>
        <div className="mb-3">
          <strong>Email: {data.email}</strong>
        </div>
        <div className="mb-3">
          <strong>Phone: {data.phone}</strong>
        </div>
        <Link to={`/update/${id}`} className="btn btn-success">
          Edit
        </Link>
        <Link to="/" className="btn btn-primary ms-3">
          Back
        </Link>
      </div>
    </div>
  );
};

export default Read;
