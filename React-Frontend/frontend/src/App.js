import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const data = await res.json();
    alert(data.message);
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div className="page">
      <form className="card" onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <p>Join us and get started</p>

        <div className="field">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Full Name</label>
        </div>

        <div className="field">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Email Address</label>
        </div>

        <div className="field">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label>Password</label>
        </div>

        <button>Create Account</button>

        <span className="footer">
          Already have an account? <b>Login</b>
        </span>
      </form>

      {/* CSS */}
      <style>{`
        * {
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
        }

        .page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #6366f1, #9333ea);
        }

        .card {
          width: 380px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          border-radius: 18px;
          padding: 40px;
          box-shadow: 0 25px 40px rgba(0, 0, 0, 0.25);
          animation: pop 0.6s ease;
        }

        h1 {
          margin: 0;
          color: #111;
          font-size: 28px;
        }

        p {
          margin: 8px 0 30px;
          color: #555;
          font-size: 14px;
        }

        .field {
          position: relative;
          margin-bottom: 25px;
        }

        .field input {
          width: 100%;
          padding: 14px 12px;
          border-radius: 10px;
          border: 1px solid #ddd;
          outline: none;
          font-size: 15px;
          background: transparent;
          transition: 0.3s;
        }

        .field label {
          position: absolute;
          top: 50%;
          left: 12px;
          transform: translateY(-50%);
          color: #999;
          font-size: 14px;
          pointer-events: none;
          transition: 0.3s;
          background: white;
          padding: 0 6px;
        }

        .field input:focus,
        .field input:not(:placeholder-shown) {
          border-color: #6366f1;
        }

        .field input:focus + label,
        .field input:not(:placeholder-shown) + label {
          top: -8px;
          font-size: 11px;
          color: #6366f1;
        }

        button {
          width: 100%;
          padding: 14px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(90deg, #6366f1, #9333ea);
          color: white;
          font-size: 16px;
          cursor: pointer;
          transition: 0.3s;
        }

        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .footer {
          display: block;
          margin-top: 20px;
          text-align: center;
          font-size: 13px;
          color: #555;
        }

        @keyframes pop {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
