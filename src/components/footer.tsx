import footLogo from '../assets/logo-footer.png';
import { FiArrowRight } from 'react-icons/fi';
const Footer = () => {
  return (
    <footer className="relative bg-[#050817] text-white mt-50">

      {/* Newsletter Card */}
      <div className="relative mx-auto -top-20 w-[90%] max-w-5xl overflow-hidden rounded-2xl border border-gray-200 bg-white px-6 py-12 text-center shadow-lg">
        
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,#ffe2b5,transparent_25%),radial-gradient(circle_at_10%_90%,#b8e9ff,transparent_25%)]" />

        <div className="relative z-10">
          <h2 className="text-xl font-bold text-gray-900 md:text-2xl">
            Subscribe to our Newsletter
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Get the latest updates and news right in your inbox!
          </p>

          <form className="mx-auto mt-4 flex max-w-md flex-col gap-2 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-10 flex-1 rounded-lg border border-gray-200 px-4 text-xs text-gray-700 outline-none transition focus:border-gray-400"
            />

            <button
              type="submit"
              className="flex h-10 items-center justify-center gap-2 rounded-lg bg-linear-to-r from-pink-300 via-orange-300 to-yellow-300 px-5 text-xs font-semibold text-gray-900 transition hover:scale-105"
            >
              Subscribe
              <FiArrowRight size={14} />
            </button>
          </form>
        </div>
      </div>

      {/* Footer Content */}
      <div className="-mt-8 px-8 pb-10 md:px-16 lg:px-20">

        {/* Logo */}
        <div className="flex justify-center">
          <img
            src={footLogo}
            alt="Footer Cricket Logo"
            className="h-20 w-auto object-contain"
          />
        </div>

        {/* Footer Columns */}
        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              About Us
            </h3>

            <p className="mt-3 max-w-xs text-xs leading-5 text-gray-400">
              We are a passionate team dedicated to providing the best
              services to our customers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-3 space-y-2 text-xs text-gray-400">
              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  • Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  • Services
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  • About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  • Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Subscribe
            </h3>

            <p className="mt-3 max-w-xs text-xs leading-5 text-gray-400">
              Subscribe to our newsletter for the latest updates.
            </p>

            <form className="mt-3 flex max-w-xs overflow-hidden rounded-lg">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-10 min-w-0 flex-1 bg-white px-4 text-xs text-gray-700 outline-none"
              />

              <button
                type="submit"
                className="h-10 bg-linear-to-r from-pink-300 to-yellow-300 px-4 text-[11px] font-semibold text-gray-900 transition hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-4 text-center">
        <p className="text-[11px] text-gray-500">
          ©2026 Sahed Ali. <br />Your Company All Rights Reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;