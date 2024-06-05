import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Foodie</h2>
            <p>1234 Food Street, Yummy City, Delicious State, 56789</p>
            <p>Email: contact@foodie.com</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Links</h3>
            <ul>
              <li className="mb-2">
                <a
                  href="/about"
                  className="hover:underline hover:border-t-2 hover:border-gray-50"
                >
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Menu
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-gray-400"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-gray-400"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-gray-400"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-gray-400"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold mb-2">
              Subscribe to our newsletter
            </h3>
            <form>
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 mb-4 text-gray-800"
              />
              <button
                type="submit"
                className="w-full bg-yellow-500 p-2 text-gray-800 font-bold hover:bg-yellow-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="text-center mt-8">
          &copy; {new Date().getFullYear()} Foodie. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
