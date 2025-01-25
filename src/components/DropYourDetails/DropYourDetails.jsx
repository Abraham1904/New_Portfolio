import React, { useState } from "react";
import styles from "./DropYourDetails.module.css";

export const DropYourDetails = () => {
  const [formData, setFormData] = useState({ email: "", phone: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setMessage("Details submitted successfully!");
        setFormData({ email: "", phone: "" });
      } else {
        setMessage("Failed to submit details. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
      console.error(error);
    }
  };

  return (
    <section className={styles.container} id="drop-your-details">
      <h2 className={styles.title}>Drop Your Details</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </section>
  );
};
