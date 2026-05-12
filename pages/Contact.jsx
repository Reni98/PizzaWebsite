import { useState } from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "./Contact.css";

function Contact() {
  // Állapotkezelés az űrlaphoz
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Megakadályozzuk az oldal újratöltését

    try {
      const response = await fetch("http://localhost:3000/orders/add", { // Cseréld le a saját portodra
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Siker: " + data.message);
        setFormData({ name: "", email: "", message: "" }); // Űrlap ürítése
      } else {
        alert("Hiba: " + data.error);
      }
    } catch (error) {
      console.error("Hiba a küldés során:", error);
      alert("Nem sikerült elérni a szervert!");
    }
  };
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input name="name"
          value={formData.name}
          onChange={handleChange}
           placeholder="Enter full name..." type="text" 
           required />
          <label htmlFor="email">Email</label>
          <input 
          value={formData.email}
          onChange={handleChange}
          name="email" 
          
          placeholder="Enter email..." 
          type="email"
          required />
          <label htmlFor="message">Message</label>
          <textarea
          value={formData.message}
          onChange={handleChange}
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
