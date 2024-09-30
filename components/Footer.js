// components/Footer.js
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"; // Import the Heroicons
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white py-10 border-t border-gray-200 relative overflow-hidden">
      <div className="container mx-auto px-20 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10 py-10">
        {/* Company Info Section */}
        <div className="flex flex-col items-start">
          <Image
            src="/assets/images/Digital Solution.png" // Path to your image file
            alt="GDC DS Logo"
            width={160} // Corresponds to `w-40` (40 * 4 = 160px)
            height={160} // Next.js Image component requires width and height, but it can be controlled through CSS as well
            className="w-40 mb-4"
          />
          <a href="mailto:hamilton@gdcgroup.co.nz" className="text-gray-600">
            hamilton@gdcgroup.co.nz
          </a>
          <div className="flex space-x-4 mt-4">
            {/* Social Media Icons */}
            <a href="#" className="text-blue-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-blue-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-blue-500">
              <i className="fab fa-behance"></i>
            </a>
            <a href="#" className="text-blue-500">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="text-gray-600 space-y-2">
            <li>SEO Development</li>
            <li>Business Growth</li>
            <li>Social Media Management</li>
            <li>Website Optimization</li>
          </ul>
        </div>

        {/* Community Section */}
        <div>
          <h3 className="font-semibold mb-4">Community</h3>
          <ul className="text-gray-600 space-y-2">
            <li>Digital Marketing</li>
            <li>Business Ideas</li>
            <li>Website Checkup</li>
            <li>Page Speed Test</li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="font-semibold mb-4">Subscribe Newsletters</h3>
          <p className="text-gray-600 mb-4">
            Get our latest news and ideas to your inbox
          </p>
          <form className="flex flex-col items-center space-y-4">
            <div className="flex w-full rounded-full overflow-hidden shadow-lg bg-white">
              <input
                type="email"
                placeholder="Your Email"
                className="py-3 px-6 w-full text-gray-600 focus:outline-none"
                style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
              />
              <button
                type="submit"
                className="bg-customYellow text-white flex items-center justify-center px-6 py-3"
                style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
              >
                <PaperAirplaneIcon className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 relative z-10">
        <p>Copyright © 2024 GDC Digital Solutions. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
