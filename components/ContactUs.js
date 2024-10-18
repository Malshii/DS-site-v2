import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactUs() {
  return (
    <section className="relative py-16 px-8 bg-[#0b1026] text-white">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-10 text-center">Let’s get in touch!</h1>

      {/* Floating Contact Information Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-12 justify-center">
        {/* Phone Card */}
        <div className="flex items-center p-6 rounded-lg bg-[#131933] shadow-md space-x-4 w-64">
          <FaPhoneAlt className="text-[#ff6b6b] text-3xl" />
          <div>
            <p className="font-bold">Phone</p>
            <a href="tel:+1236788429" className="text-white hover:underline">
              +61 236-788-429
            </a>
          </div>
        </div>

        {/* Email Card */}
        <div className="flex items-center p-6 rounded-lg bg-[#131933] shadow-md space-x-4 w-64">
          <FaEnvelope className="text-[#ff6b6b] text-3xl" />
          <div>
            <p className="font-bold">Email</p>
            <a href="mailto:support@wavenet.com" className="text-white hover:underline">
              support@wavenet.com
            </a>
          </div>
        </div>
      </div>

      {/* Map and Overlay Form Section */}
      <div className="relative w-full h-[500px] max-w-[1000px] mx-auto rounded-lg shadow-lg overflow-hidden">
        {/* Map Section */}
        <div className="absolute inset-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6310.095669650209!2d175.23072!3d-37.742022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6d231d7dddfbe9%3A0xd8873cbdb5f08674!2s89%20Church%20Road%2C%20Pukete%2C%20Hamilton%203200%2C%20New%20Zealand!5e0!3m2!1sen!2slk!4v1729068332065!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>

        {/* Contact Form Overlay */}
        <div className="absolute right-8 bottom-8 bg-[#28b3d3] p-8 rounded-lg shadow-xl max-w-md w-[90%] md:w-[450px]">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#0b1026] mb-4 text-center">Send Us Message</h2>
            <p className="text-[#0b1026] text-center">
              Have any questions regarding our services? Send us your message.
            </p>
          </div>

          {/* Form Fields */}
          <form className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-[#0b1026] mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter Your Name..."
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b1026]"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-[#0b1026] mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter Your Email Address..."
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b1026]"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-[#0b1026] mb-1">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter Your Message..."
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b1026]"
                rows={4}
              />
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="subscribe"
                className="mt-1 focus:ring-[#0b1026] focus:outline-none rounded"
              />
              <label htmlFor="subscribe" className="text-[#0b1026]">
                By clicking this, I am consenting to be sent monthly articles and promotional
                emails by Wavenet services.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#0b1026] text-white font-bold py-3 rounded-lg hover:bg-[#2a2f4f] transition duration-300 shadow-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
