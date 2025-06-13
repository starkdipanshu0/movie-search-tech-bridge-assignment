import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-gray-700 mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        {/* Navigation Links */}
        <nav
          className="flex flex-wrap justify-center gap-6 mb-4 text-sm font-medium"
          aria-label="Footer navigation"
        >
          <a
            href="/about"
            className="text-gray-400 hover:text-yellow-400 transition duration-300 ease-in-out"
          >
            About Us
          </a>
          <a
            href="/privacy"
            className="text-gray-400 hover:text-yellow-400 transition duration-300 ease-in-out"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="text-gray-400 hover:text-yellow-400 transition duration-300 ease-in-out"
          >
            Terms & Conditions
          </a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            className="text-gray-400 hover:text-blue-500 transition duration-300 transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={22} />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            className="text-gray-400 hover:text-sky-400 transition duration-300 transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={22} />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            className="text-gray-400 hover:text-pink-500 transition duration-300 transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={22} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} <span className="text-yellow-400 font-semibold">Movie Search 🎬</span> — Built with ❤️ by <span className="text-white">Dipanshu Vishwakarma</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
