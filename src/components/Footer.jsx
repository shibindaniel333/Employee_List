import React from 'react'; // React library
import { Link } from 'react-router-dom'; // For routing links
import "../App.css";


const Footer = () => {
  return (
    <div
      style={{ minHeight: '300px', backgroundColor: 'rgb(30, 30, 30)' }}
      className="top-shadow w-100 text-light"
    >
      <h1
        className="mb-5"
        style={{ backgroundColor: 'grey', color: 'black', height: '0.1px' }}
      ></h1>
      <div className="d-flex justify-content-evenly">
        {/* Introduction */}
        <div style={{ width: '400px' }}>
          <h5>
            <i className="fa-solid fa-users me-3"></i>
            Employee Manager
          </h5>
          <p>
            Designed to help manage your workforce effectively with modern tools
            and a user-friendly interface.
          </p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
        </div>
        {/* Links */}
        <div className="d-flex flex-column">
          <h5>Quick Links</h5>
          <Link
            to="/"
            className="hover-link"
            style={{ textDecoration: 'none' }}
          >
            Home
          </Link>
          <Link
            to="/create"
            className="hover-link"
            style={{ textDecoration: 'none' }}
          >
            Add Employee
          </Link>
          <Link
            to="/about"
            className="hover-link"
            style={{ textDecoration: 'none' }}
          >
            About
          </Link>
        </div>
        {/* Guides */}
        <div className="d-flex flex-column">
          <h5>Guides</h5>
          <a
            href="https://react.dev/"
            className="hover-link"
            style={{ textDecoration: 'none' }}
            target="_blank"
          >
            React
          </a>
          <a
            href="https://react-bootstrap.netlify.app/"
            className="hover-link"
            style={{ textDecoration: 'none' }}
            target="_blank"
          >
            React Bootstrap
          </a>
          <a
            href="https://www.npmjs.com/package/react-router-dom"
            className="hover-link"
            style={{ textDecoration: 'none' }}
            target="_blank"
          >
            React Router
          </a>
        </div>
        {/* Contact */}
        <div className="d-flex flex-column">
          <h5>Stay Connected</h5>
          <div className="d-flex">
            <input
              type="text"
              placeholder="Enter your email..."
              className="form-control me-2"
            />
            <button className="btn btn-primary">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <a
              href="https://twitter.com/"
              className="hover-link"
              style={{ textDecoration: 'none' }}
              target="_blank"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              className="hover-link"
              style={{ textDecoration: 'none' }}
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/"
              className="hover-link"
              style={{ textDecoration: 'none' }}
              target="_blank"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/"
              className="hover-link"
              style={{ textDecoration: 'none' }}
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/"
              className="hover-link"
              style={{ textDecoration: 'none' }}
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      <p className="text-center mt-3">
        Copyright &copy; 2024 Employee Manager. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
