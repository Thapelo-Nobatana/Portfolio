import axios from "axios";
import "./Contact.css";
import { useState } from "react";

const Contact = () => {
  const [drop, setDrop] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDrop(true);
    setLoading(true);
    setError("");

    // Get form Data
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      // Sending Post request to the backend
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/contact-us`,
        formData
      );
      if (response.data.success) {
        alert(response.data.message); // show success massage
        e.target.reset();
      } else {
        setError(response.data.message); // show error message
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("There was an error submitting the form. Please try again.");
    } finally {
      setLoading(false);
      setTimeout(() => setDrop(false), 600);
    }
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="input">
              <input type="text" placeholder="Name" id="name" required />
              <input type="email" placeholder="Email" id="email" required />
            </div>
            <textarea
              name="message"
              id="message"
              placeholder="message"
            ></textarea>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Get In Touch"}
            </button>
          </form>

          <div className="text-content">
            <h2>
              Let's <strong>talk</strong> about something special!
            </h2>
            <p>
              Creativity has always been at the heart of my professional
              journey, and I am deeply driven by the challenge of pushing
              boundaries in the digital design space. My passion lies in
              crafting interactive experiences that not only capture attention
              but also leave a lasting impression. I strive to design solutions
              that are not just aesthetically compelling but also intuitive and
              meaningful for the user. Each project I undertake is an
              opportunity to blend form and function in a way that enhances
              usability while also evoking a sense of wonder and engagement.
              What fuels my enthusiasm for design is the potential to connect
              with people through thoughtful, immersive experiences. Whether
              it's a web platform, mobile app, or digital installation, I
              believe in the power of design to transform how users interact
              with technology.
            </p>
            <a href="http://">nobatanathapelo@gmail.com</a>
            <p>Call: 081 514 6476</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
