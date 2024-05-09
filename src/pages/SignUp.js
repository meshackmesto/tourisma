import { useOutletContext } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";

function SignUp() {
  const signup = useOutletContext();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [notification, setNotification] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSignUp(e) {
    e.preventDefault();

    // Check if password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      setNotification("Password and confirm password do not match");
      return;
    }

    // Check if the account exists
    axios
      .get(`http://localhost:8000/users?email=${formData.email}`)
      .then((response) => {
        // If user already exists, set notification
        if (response.data.length > 0) {
          setNotification("Account already exists");
        } else {
          // If user doesn't exist, create the account
          axios
            .post("http://localhost:8000/users", formData)
            .then((response) => {
              setNotification("Account created , You can now login");
              signup(formData);

              console.log("User signed up successfully:", response.data);
              //  reset the form after successful sign-up
              setFormData({
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
              });
            })
            .catch((error) => {
              console.error("Error signing up:", error);
            });
        }
      })
      .catch((error) => {
        console.error("Error checking account:", error);
      });
  }
  return (
    <>
    <header>
      <NavBar />
    </header>
    <form className="card" onSubmit={handleSignUp}>
      <div className="card-header-signup">
        <span>Sign Up</span>
      </div>
      <div>
        <input
          className="card-inpt"
          placeholder="Enter your username..."
          id="username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <input
          className="card-inpt"
          placeholder="Enter your email..."
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <input
          className="card-inpt"
          placeholder="Enter password..."
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <input
          className="card-inpt"
          placeholder="Confirm password..."
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      <button className="card-btn" type="submit">
        Create Account
      </button>
      {notification && <p>{notification}</p>}
    </form>
    </>
  );
}

export default SignUp;
