
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6">
        {/* Footer Links */}
        <div className="flex justify-center space-x-12 mb-6">
          <a
            href="/about"
            className="text-gray-400 hover:text-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            About Us
          </a>
          <a
            href="/"
            className="text-gray-400 hover:text-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Privacy Policy
          </a>
          <a
            href="/"
            className="text-gray-400 hover:text-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Terms & Conditions
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://facebook.com"
            className="text-gray-400 hover:text-blue-600 transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-400 hover:text-blue-400 transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            className="text-gray-400 hover:text-pink-500 transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500">
          <p>
            © {new Date().getFullYear()} MovieZone 🎬. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
