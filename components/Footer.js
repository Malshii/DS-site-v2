// components/Footer.js
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-10 border-t border-gray-200 relative overflow-hidden">
      <div className="container mx-auto px-20 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 py-10">
        {/* Company Info Section */}
        <div className="flex flex-col items-start">
          <Image
            src="/assets/images/Digital Solution.webp"
            alt="GDC DS Logo"
            width={160}
            height={160}
            className="w-40 mb-4"
          />
          <Link 
            href="mailto:digital@gdcgroup.co.nz" 
            className="text-gray-600"
            aria-label="Send email to digital@gdcgroup.co.nz"
          >
            digital@gdcgroup.co.nz
          </Link>          
        </div>

        {/* Services Section */}
        <nav aria-label="Services navigation">
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="text-gray-600 space-y-2" role="list">
            <li>Website Development</li>
            <li>Google Ads</li>
            <li>SEO/ Copywriting</li>
            <li>NFC Cards</li>
          </ul>
        </nav>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="font-semibold mb-4">Subscribe Newsletters</h3>
          <p className="text-gray-600 mb-4">
            Get our latest news and ideas to your inbox
          </p>
          <form className="flex flex-col items-center space-y-4" aria-label="Newsletter subscription form">
            <div className="flex w-full rounded-full overflow-hidden shadow-lg bg-white">
              <input
                type="email"
                placeholder="Your Email"
                aria-label="Email address for newsletter"
                className="py-3 px-6 w-full text-gray-600 focus:outline-none"
                style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                required
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="bg-customYellow text-white flex items-center justify-center px-6 py-3"
                style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
              >
                <PaperAirplaneIcon className="h-5 w-5" aria-hidden="true" />
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