import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import SERVERURL from "../services/serverURL";
import '../App.css';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${SERVERURL}/users`)
      .then((res) => {
        setData(res.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => {
        console.log("Error:", err);
        setLoading(false); // Stop loading even if there's an error
      });
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Would you like to delete this user?");
    if (confirm) {
      axios
        .delete(`${SERVERURL}/users/${id}`)
        .then(() => {
          setData((prevData) => prevData.filter((user) => user.id !== id));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div className="container-fluid">
          <Link
            style={{
              fontFamily: '"Protest Guerrilla", serif',
              fontSize: "25px",
            }}
            className="navbar-brand"
            to="/"
          >
            <img
              className="bg-light rounded ms-4 me-3"
              style={{ width: "50px" }}
              src="https://cdn4.iconfinder.com/data/icons/hr-recruitment-management/400/SET-23-512.png"
              alt=""
            />
            Employee Manager
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create">
                  Add Employee
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="d-flex flex-column align-items-center shadow bg-dark vh-100 p-4">
        <h1
          style={{ fontFamily: '"Jersey 15", serif' }}
          className="text-light mb-4 text-uppercase"
        >
          List of Users
        </h1>

        {/* Show Loading Spinner */}
        {loading ? (
          <div className="d-flex justify-content-center align-items-center vh-50">
            <div className=" text-light" role="status">
              <img style={{width:'400px'}} className="img-fluid" src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!sw800" alt="" />
            </div>
          </div>
        ) : (
          <div
            style={{
              backgroundColor: "",
              maxHeight: "70vh",
              overflowY: "auto",
              width: "90%",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            }}
            className="rounded p-4 custom-scrollbar"
          >
            <div className="d-flex justify-content-between align-items-center mb-3 bg-dark">
              <span className="text-light fs-5">
                Manage your users efficiently:
              </span>
              <Link to={"/create"} className="btn btn-success">
                <i className="fas fa-plus-circle me-2"></i>Add User
              </Link>
            </div>
            <table className="table table-dark table-hover text-center align-middle">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="des">
                {data.length > 0 ? (
                  data.map((d, i) => (
                    <tr key={d.id} className="align-middle">
                      <td>{i + 1}</td>
                      <td>{d.name}</td>
                      <td>{d.email}</td>
                      <td>{d.phone}</td>
                      <td>
                        <Link
                          to={`/read/${d.id}`}
                          className="btn btn-sm btn-info opacity-75 me-2 btn-hover"
                        >
                          <i className="fas fa-eye "></i> Read
                        </Link>
                        <Link
                          to={`update/${d.id}`}
                          className="btn btn-sm btn-primary opacity-75 me-2 btn-hover"
                        >
                          <i className="fas fa-edit"></i> Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(d.id)}
                          className="btn btn-sm btn-danger opacity-75 btn-hover"
                        >
                          <i className="fas fa-trash-alt "></i>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-light">
                      No users found. Please add some users.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
