import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";

const ContactUs = () => {
  return (
    <section
      className="flex justify-center items-center min-h-screen p-6 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/contact-bg.png')" }} // Replace with the actual path
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
            <form>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customYellow"
              />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customYellow"
              />
              <textarea
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
          </div>

          {/* Right Image & Contact Info Section */}
          <div className="flex-1 flex flex-col items-center justify-between mt-8 md:mt-0 md:pl-6 relative">
            <div className="flex flex-col items-center">
              <Image
                src="/assets/images/contact-form-image.png" // Replace with actual image path
                alt="Contact Illustration"
                width={0}
                height={0}
                sizes="75vw" // Adjust based on your design's responsiveness
                className="w-3/4 h-auto mb-4"
              />

              <div className="text-gray-700 text-center mb-6">
                <div className="flex items-center mb-4">
                  <FaMapMarkerAlt className="text-customYellow text-lg mr-2" />
                  <span>674 Washington Avenue</span>
                </div>
                <div className="flex items-center mb-4">
                  <FaPhoneAlt className="text-customYellow text-lg mr-2" />
                  <span>602-296-4143</span>
                </div>
                <div className="flex items-center mb-4">
                  <FaEnvelope className="text-customYellow text-lg mr-2" />
                  <span>johncontact123@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="bg-customYellow text-white p-3 rounded-full hover:bg-customGray transition duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="bg-customYellow text-white p-3 rounded-full hover:bg-customGray transition duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="bg-customYellow text-white p-3 rounded-full hover:bg-customGray transition duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
