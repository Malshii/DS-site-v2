"use client";
import { React, useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
} from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ContactUs = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("idle");
  const [formMessage, setFormMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint =
      "https://api.hsforms.com/submissions/v3/integration/submit/6187835/c9e0a8dc-5c29-43c1-9667-0f826c715d77";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: [
            { name: "name", value: formData.name },
            { name: "email", value: formData.email },
            { name: "phone", value: formData.phone },
            { name: "message", value: formData.message },
          ],
        }),
      });

      if (response.ok) {
        router.push("/success");
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
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Contact Info Section - Left Side */}
          <div className="w-full md:w-1/2 p-8 md:p-10 bg-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
            Get In Touch
            </h2>
            <p className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            We are here for you! How can we help?
            </p>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start">
                <div className="bg-customGray p-2 rounded-md mr-4 flex items-center justify-center w-10 h-10">
                  <FaMapMarkerAlt className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">
                    89 Church Road, Pukete, Hamilton 3200
                  </p>
                  <p className="text-gray-600">NZ</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-customGray p-2 rounded-md mr-4 flex items-center justify-center w-10 h-10">
                  <FaPhoneAlt className="text-white text-lg" />
                </div>
                <div>
                  <Link
                    href="tel:+64212463988."
                    className="text-gray-900 font-semibold hover:text-customYellow transition-colors"
                  >
                    +64 21 246 3988
                  </Link>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="bg-customGray p-2 rounded-md mr-4 flex items-center justify-center w-10 h-10">
                  <FaEnvelope className="text-white text-lg" />
                </div>
                <div>
                  <Link
                    href="mailto:digital@gdcgroup.co.nz"
                    className="text-gray-900 font-semibold hover:text-customYellow transition-colors"
                  >
                    digital@gdcgroup.co.nz
                  </Link>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-customGray p-2 rounded-md mr-4 flex items-center justify-center w-10 h-10">
                  <FaFacebookF className="text-white text-lg" />
                </div>
                <div>
                  <Link
                    href="https://www.facebook.com/profile.php?id=61567398772169&mibextid=ZbWKwL"
                    className="text-gray-900 font-semibold hover:text-customYellow transition-colors"
                  >
                    Follow us on
                  </Link>
                </div>
              </div>
            </div>            
          </div>

          {/* Form Section - Right Side */}
          <div className="w-full md:w-1/2 p-8 md:p-10 bg-customGray text-white rounded-lg">
            <h3 className="text-4xl font-bold mb-6">Contact form</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full p-3 border-none focus:ring-2 focus:ring-customYellow focus:outline-none text-white placeholder-gray-400 rounded-sm"
                  required
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full p-3 border-none focus:ring-2 focus:ring-customYellow focus:outline-none text-white placeholder-gray-400 rounded-sm"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full p-3 border-none focus:ring-2 focus:ring-customYellow focus:outline-none text-white placeholder-gray-400 rounded-sm"
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write Your Message Here"
                  className="w-full p-3 border-none focus:ring-2 focus:ring-customYellow focus:outline-none text-white placeholder-gray-400 h-24 resize-none rounded-sm"
                  required
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="py-3 px-8 bg-customYellow text-black font-semibold rounded-md hover:bg-yellow-400 transition duration-300"
                >
                  Submit Now
                </button>
              </div>
            </form>

            {formStatus === "error" && (
              <p className="mt-4 font-semibold text-red-400">{formMessage}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;