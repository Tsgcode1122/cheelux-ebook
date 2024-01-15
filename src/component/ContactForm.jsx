import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../styles.scss";
import eimg from "../images/1.png";
import eimg1 from "../images/iiii.png";
import sup from "../images/super.png";
import useZoomInAnimation from "../animation/useZoomInAnimation";
import useLeftToRightSwipe from "../animation/useLeftToRightSwipe";
const ContactForm = () => {
  useZoomInAnimation(".zoom-in");
  useLeftToRightSwipe(".left-right");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xdoqnyvj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        // reset the form fields
        setFormData({
          name: "",
          email: "",
        });
        // Show the success message
        setShowSuccessMessage(true);
        setShow(true);
        // Hide the success message after a few seconds
      } else {
        console.error("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred during form submission:", error);
    }
  };

  return (
    <>
      <section className="cont-sec">
        <div className="contact-view">
          <h3>OVERVIEW</h3>
          <ul>
            <li className="left-right">The Secret Gym Wear Check-List.</li>
            <li className="left-right">
              10 Ways to Magnificently Dress To The Gym.
            </li>
            <li className="left-right">
              What You Should NEVER Wear To the Gym.
            </li>
          </ul>
          <div className="view-img">
            <img src={eimg} />
          </div>
          <div className="views-img">
            <img src={eimg1} />
          </div>
        </div>

        <div className="Contact-form zoom-in">
          <div className="redd">
            <div className="writeup">
              <h5>GET A FREE COPY OF OUR E-BOOK</h5>

              <h1>
                Download The Top 10 List of Best Gym Wears for Men & Women.
              </h1>

              <p>
                Including Does & Don't For Gym Wears, <br />
                Secret Check-List For the Perfect Gym Wears.
              </p>
            </div>
            <form onSubmit={handleSubmit} id="ebook">
              <div>
                <label htmlFor="name">Your Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Your Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <button type="submit">Get the FREE Ebook</button>
              </div>
              <p>Usually $50. Download FREE Only Today!</p>
            </form>

            {showSuccessMessage && (
              <div className="success-message">
                <>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>🎉 Success!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="success-edit">
                        <div>
                          Your perfect gym wear ebook is on its way to your
                          inbox. Get ready to elevate your fitness journey with
                          style and performance. Stay active, stay stylish!
                        </div>
                        <img src={sup} />
                        <h3>GET 25% OFF!</h3>

                        <p>HURRY!! UP TO 25% OFF ON GYM WEARS </p>
                        <p>Enjoy FREE SHIPPING on your first order! </p>
                        <p>
                          Valid till <span>25 Jan 2024</span>
                        </p>
                        <a
                          href="https://www.cheelux.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Click to ORDER NOW!!!
                        </a>
                      </div>
                    </Modal.Body>
                    <Modal.Footer></Modal.Footer>
                  </Modal>
                </>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
