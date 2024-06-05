import "../login/style.css";
import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log(email, password);
  };

  const [active, setActive] = useState("");

  return (
    <div className={`container ${active ? "active" : ""}`}>
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="href" className="icon">
              <i className="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="href" className="icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="href" className="icon">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="href" className="icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="href" className="icon">
              <i className="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="href" className="icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="href" className="icon">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="href" className="icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email password</span>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="href">Forget Your Password?</a>
          <button type="submit" onClick={(e) => handleLogin(e)}>
            Sign In
          </button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className="hidden" onClick={() => setActive(false)}>
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>
              Register with your personal details to use all of site features
            </p>
            <button className="hidden" onClick={() => setActive(true)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
