import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useOutletContext } from "react-router-dom";
import SignUp from "./SignUp";

function Login() {
  // Get the login function from the outlet context
  const login = useOutletContext();

  // Initialize state variables
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [notification, setNotification] = useState("");

  // Handle changes to the form input fields
  function handleChange(e) {
    // Update the corresponding form data field with the new value
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // Handle form submission
  function handleLogin(e) {
    e.preventDefault();
    axios
      .get("http://localhost:8000/users")
      .then((response) => {
        const user = response.data.find(
          (user) =>
            user.username === formData.username &&
            user.password === formData.password
        );
        if (user) {
          setNotification("Success");
          login(user);
        } else {
          setNotification("Incorrect username or password. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
        setNotification("An error occurred. Please try again later.");
      });
  }

  // Handle guest login
  function handleGuestLogin() {
    // Set predefined guest credentials
    const guestCredentials = {
      username: "guest",
      password: "", // Assuming guest login doesn't require a password
    };
    // Call the login function with guest credentials
    login(guestCredentials);
    setNotification("Logging in as a guest...");
  }

  // Render the login form and notification
  return (
    <>
      <div className="login-container">
        <h2>
          Welcome to Tourisma, your gateway to explore the world’s most
          captivating cities! Sign up or log in to embark on your city
          adventure.
        </h2>
        <span>
          <form className="card" onSubmit={handleLogin}>
            <div className="card-header-login">
              <span>Login</span>
            </div>

            <div>
              <input
                className="card-inpt"
                placeholder="Enter username..."
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
                placeholder="Enter password..."
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="card-checkbx">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>

            <div>
              <button className="card-btn" type="submit">
                Login
              </button>
            </div>

            {notification && <p className="notification">{notification}</p>}
            <p>Or.</p>
            <p className="guest-login" onClick={handleGuestLogin}>
              Login as a visitor
            </p>
          </form>
        </span>

        <span>
          <div>
            <SignUp />
          </div>
        </span>
      </div>
    </>
  );
}

export default Login;
