// components/Footer.js
import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaMapMarkedAlt,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* Main Footer Section - Dark Background */}
      <footer className="bg-white text-customGray py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Three Columns Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Column 1: Let's start working together */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Let&apos;s start working together get in touch!
              </h2>
              <div className="mt-6">
                <Link
                  href="/schedule-consultation"
                  className="inline-block bg-customYellow hover:bg-yellow-500 text-dark-blue font-semibold py-3 px-8 rounded-md transition-colors duration-300"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>

            {/* Column 2: Contact information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact information</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="text-customYellow mr-3 flex-shrink-0">
                    <FaMapMarkedAlt className="text-xl mt-1" />
                  </div>
                  <span>89 Church Road, Pukete, Hamilton 3200</span>
                </li>
                <li className="flex items-center">
                  <div className="text-customYellow mr-3 flex-shrink-0">
                    <FaPhoneAlt className="text-xl" />
                  </div>
                  <Link
                    href="tel:0212463988"
                    className="hover:text-customYellow transition-colors"
                  >
                    021 246 3988
                  </Link>
                </li>
                <li className="flex items-center">
                  <div className="text-customYellow mr-3 flex-shrink-0">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <Link
                    href="mailto:digital@gdcgroup.co.nz"
                    className="hover:text-customYellow transition-colors"
                  >
                    digital@gdcgroup.co.nz
                  </Link>
                </li>              
              </ul>
            </div>

            {/* Column 3: Subscribe newsletter */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Subscribe newsletter</h2>
              <p className="mb-6">
                Get our latest news and ideas to your inbox
              </p>
              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:border-customYellow text-white"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-customYellow hover:bg-yellow-500 text-dark-blue font-semibold py-3 px-8 rounded-md transition-colors duration-300"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>

      {/* Logo Section - White Background */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center justify-center">
              <Image
                src="/assets/images/Digital Solution.webp"
                alt="GDC Digital Solutions Logo"
                width={180}
                height={60}
                className="object-contain h-16"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/assets/images/GDC LOGOS 2024 BLUE.webp"
                alt="GDC Consultants Logo"
                width={180}
                height={60}
                className="object-contain h-16"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/assets/images/Recruit Logo.png"
                alt="GDC Recruitment Logo"
                width={180}
                height={60}
                className="object-contain h-16"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/assets/images/properties logo.png"
                alt="GDC Properties Logo"
                width={180}
                height={60}
                className="object-contain h-16"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section - White Background */}
      <div className="bg-white py-4 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p>Copyright © 2025 GDC Digital Solutions. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}