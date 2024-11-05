"use client";

import { React, useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
} from "react-icons/fa";
import Image from "next/image";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("idle"); // 'idle', 'success', 'error'
  const [formMessage, setFormMessage] = useState(""); // Message to display

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint =
      "https://api.hsforms.com/submissions/v3/integration/submit/6187835/c9e0a8dc-5c29-43c1-9667-0f826c715d77";

    const payload = {
      fields: [
        {
          name: "full_name",
          value: formData.full_name,
        },
        {
          name: "email",
          value: formData.email,
        },
        {
          name: "message",
          value: formData.message,
        },
      ],
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormMessage(
          "Thank you! Your message has been successfully submitted."
        );
        setFormData({
          full_name: "",
          email: "",
          message: "",
        }); // Clear the form after submission
      } else {
        setFormStatus("error");
        setFormMessage(
          "There was an issue with your submission. Please try again."
        );
      }
    } catch (error) {
      setFormStatus("error");
      setFormMessage(
        "There was an error submitting the form. Please check your internet connection and try again."
      );
    }
  };

  return (
    <section
      className="flex justify-center items-center min-h-screen p-6 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/contact-bg.webp')" }} // Replace with the actual path
    >
      <div id="move-down" className="py-20">
        <div className="bg-opacity-90 backdrop-blur-md rounded-lg shadow-xl p-8 w-full max-w-5xl flex flex-col md:flex-row relative overflow-hidden">
          {/* Form Section */}
          <div className="flex-1 md:pr-8 z-10">
            <h2 className="text-2xl font-bold text-center text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-customYellow text-center mb-6">
              We are here for you! How can we help?
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customYellow"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customYellow"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Go ahead, we’re listening..."
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customYellow h-32 resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 bg-customYellow text-white rounded-lg font-semibold hover:bg-customGray transition duration-300"
              >
                Submit
              </button>
            </form>

            {/* Success/Error Message */}
            {formStatus === "success" && (
              <p className="mt-4 text-green-600 font-semibold text-center">
                {formMessage}
              </p>
            )}
            {formStatus === "error" && (
              <p className="mt-4 text-red-600 font-semibold text-center">
                {formMessage}
              </p>
            )}
          </div>

          {/* Right Image & Contact Info Section */}
          <div className="flex-1 flex flex-col items-center justify-between mt-8 md:mt-0 md:pl-6 relative">
            <div className="flex flex-col items-center">
              <Image
                src="/assets/images/contact-form-image.webp" // Replace with actual image path
                alt="Contact Illustration"
                width={0}
                height={0}
                sizes="75vw" // Adjust based on your design's responsiveness
                className="w-3/4 h-auto mb-4"
              />

              <div className="text-customGray text-center font-bold mb-6">
                <div className="flex items-center mb-4">
                  <FaMapMarkerAlt className="text-customYellow text-lg mr-2" />
                  <span>89 Church Road, Pukete, Hamilton 3200</span>
                </div>
                <div className="flex items-center mb-4">
                  <FaPhoneAlt className="text-customYellow text-lg mr-2" />
                  <a
                    href="tel:+6478380090"
                    className="hover:text-customYellow transition-colors"
                  >
                    +64 7 838 0090
                  </a>
                </div>
                <div className="flex items-center mb-4">
                  <FaEnvelope className="text-customYellow text-lg mr-2" />
                  <a
                    href="mailto:digital@gdcgroup.co.nz"
                    className="hover:text-customYellow transition-colors"
                  >
                    digital@gdcgroup.co.nz
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-2 mt-4">
              {/* Follow Us Text */}
              <span className="text-customGray text-lg font-semibold">Follow us on:</span>

              {/* Icon Container */}
              <a
                href="https://www.facebook.com/profile.php?id=61567398772169&mibextid=ZbWKwL"
                className="bg-customYellow text-white p-3 rounded-full hover:bg-customGray transition duration-300"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
