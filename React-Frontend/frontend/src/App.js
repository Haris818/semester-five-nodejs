import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
      setFormData({ name: "", email: "", password: "" }); // clear form
    })
    .catch(err => console.log(err));
  }

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "'Poppins', sans-serif",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
    },
    form: {
      background: "#fff",
      padding: "40px 50px",
      borderRadius: "15px",
      boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
      width: "100%",
      maxWidth: "400px",
      textAlign: "center",
      animation: "fadeIn 0.8s ease forwards",
    },
    title: { marginBottom: "30px", color: "#333", fontWeight: 600 },
    inputGroup: { position: "relative", marginBottom: "30px" },
    input: {
      width: "100%",
      padding: "12px 10px",
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      outline: "none",
      transition: "all 0.3s",
      background: "none",
    },
    label: {
      position: "absolute",
      left: "10px",
      top: "12px",
      background: "#fff",
      color: "#aaa",
      padding: "0 5px",
      transition: "all 0.3s",
      pointerEvents: "none",
    },
    button: {
      width: "100%",
      padding: "12px",
      border: "none",
      borderRadius: "8px",
      background: "linear-gradient(90deg, #4f46e5, #6d28d9)",
      color: "#fff",
      fontSize: "16px",
      cursor: "pointer",
      transition: "all 0.4s",
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Modern Animated Form</h2>

        <div style={styles.inputGroup}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder=" "
            style={styles.input}
          />
          <label style={styles.label}>Name</label>
        </div>

        <div style={styles.inputGroup}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder=" "
            style={styles.input}
          />
          <label style={styles.label}>Email</label>
        </div>

        <div style={styles.inputGroup}>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder=" "
            style={styles.input}
          />
          <label style={styles.label}>Password</label>
        </div>

        <button type="submit" style={styles.button}>Submit</button>
      </form>

      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          input:focus + label,
          input:not(:placeholder-shown) + label {
            top: -10px !important;
            left: 5px !important;
            font-size: 12px !important;
            color: #4f46e5 !important;
          }

          input:focus {
            border-color: #4f46e5 !important;
            box-shadow: 0 0 5px rgba(79,70,229,0.3) !important;
          }

          button:hover {
            background: linear-gradient(90deg, #6d28d9, #4f46e5) !important;
            transform: scale(1.05) !important;
            box-shadow: 0 8px 20px rgba(0,0,0,0.2) !important;
          }
        `}
      </style>
    </div>
  );
}

export default App;
