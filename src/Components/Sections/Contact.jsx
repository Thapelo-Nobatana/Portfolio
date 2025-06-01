// import axios from "axios"
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
      setTimeout(() => setDrop(false), 500);
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
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>

          <div className="text-content"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
