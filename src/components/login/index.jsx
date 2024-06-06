import "../login/style.css";
import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [active, setActive] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log(email, password);

    try {
      const response = await axios.post(
        "mongodb://localhost:27017/bookstore",
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "aplicantion/json" },
        }
      );

      setUser(response.data);
    } catch (error) {
      if (!error?.response) {
        setError("Erro ao acessar sua conta");
      } else if (error.response.status === 401) {
        setError("Usuario ou senha inválidos");
      }
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    console.log(name, email, password);
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    setUser(null);
    setError("");
  };

  return (
    <div className={`container ${active ? "active" : ""}`}>
      {user == null ? (
        <>
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
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
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
              <button onClick={(e) => handleCreate(e)}>Sign Up</button>
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
              <p>{error}</p>
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
                  Register with your personal details to use all of site
                  features
                </p>
                <button className="hidden" onClick={() => setActive(true)}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>
          <h1>Olá, {user.name}</h1>
          <button
            type="button"
            className="hiden"
            onClick={(e) => handleLogout(e)}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
