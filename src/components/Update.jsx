import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import SERVERURL from '../services/serverURL';



const Update = () => {

  // const [data, setData] = useState([]);
  const { id } = useParams();
  const [values,setValues]=useState({
    name:'',
    email:'',
    phone:''

  })

  const navigate =useNavigate()


  useEffect(() => {
    const userId = id; // Log the ID to check if it's correct
    console.log("Fetching user with ID:", userId);

    axios
      .get(`${SERVERURL}/users/` + id)
      .then(res =>{
        setValues(res.data);
      })
      .catch(err => {
        console.log('Error fetching user:', err);
        if (err.response) {
          console.log('Error response:', err.response);
          console.log('Status:', err.response.status);
          console.log('Data:', err.response.data);
        }
      });
  }, []); 


  const handleUpdate=(event)=>{
    event.preventDefault();
      // Validation: Ensure all fields are filled
      if (!values.name || !values.email || !values.phone) {
        alert('Please fill in all the fields before updating.');
        return;
      }
    axios
    .put(`${SERVERURL}/users/`+id,values)
    .then(res =>{
      console.log(res);
      navigate('/')
      alert("data updated")
      
    }) 
    .catch(err => console.log(err));
   }



  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-dark">
    <div className="w-50 shadow-lg px-5 pt-3 pb-5 rounded">
      <h1 className="text-secondary">Update User</h1>
      <form onSubmit={handleUpdate} >
        {/* Name Input */}
        <div className="mb-2">
          <label htmlFor="name" className="text-light">Name:</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={e=>setValues({...values,name:e.target.value})}
            className="form-control bg-dark text-light border-0 border-bottom border-secondary"
            placeholder="Enter Name"
            style={{ borderRadius: '0' }} // Remove rounded corners

          />
        </div>

        {/* Email Input */}
        <div className="mb-2">
          <label htmlFor="email" className="text-light">Email:</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={e=>setValues({...values,email:e.target.value})}
            className="form-control bg-dark text-light border-0 border-bottom border-secondary"
            placeholder="Enter Email"
            style={{ borderRadius: '0' }} // Remove rounded corners
          />
        </div>

        {/* Phone Input */}
        <div className="mb-3">
          <label htmlFor="phone" className="text-light">Phone:</label>
          <input
            type="text"
            name="phone"
            value={values.phone}
            onChange={e=>setValues({...values,phone:e.target.value})}
            className="form-control bg-dark text-light border-0 border-bottom border-secondary"
            placeholder="Enter Phone"
            style={{ borderRadius: '0' }} // Remove rounded corners
          />
        </div>

        {/* Submit and Back Buttons */}
        <div>
          <button className="btn btn-success me-3">Update</button>
          <Link to="/" className="btn btn-primary">
            Back
          </Link>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Update