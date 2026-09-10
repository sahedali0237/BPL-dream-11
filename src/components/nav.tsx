import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.png';

interface NavbarProps {
  balance: number;
}

const Navbar = ({ balance }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full overflow-x-hidden bg-white/70 px-4 py-3 backdrop-blur-md sm:px-6 md:px-12">
      
      {/* Main Navbar */}
      <div className="flex w-full min-w-0 items-center justify-between">

        {/* ==================== */}
        {/* Logo */}
        {/* ==================== */}
        <div className="min-w-0 shrink">
          <img
            src={logo}
            alt="Cricket Logo"
            className="h-12 w-auto sm:h-14"
          />
        </div>

        {/* ==================== */}
        {/* Desktop Menu */}
        {/* ==================== */}
        <div className="hidden items-center gap-10 md:flex">

          {/* Navigation Links */}
          <ul className="flex items-center gap-8 text-[15px] font-medium text-gray-500">

            <li>
              <a
                href="#"
                className="transition-colors hover:text-gray-900"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition-colors hover:text-gray-900"
              >
                Fixture
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition-colors hover:text-gray-900"
              >
                Teams
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition-colors hover:text-gray-900"
              >
                Schedules
              </a>
            </li>

          </ul>

          {/* Desktop Balance */}
          <button
            type="button"
            className="flex shrink-0 items-center rounded-lg border border-gray-200 bg-white px-4 py-2 shadow-sm transition-colors hover:bg-gray-50"
          >
            <span className="whitespace-nowrap text-[15px] font-bold text-gray-900">
              Balance{' '}
              <span className="text-lg font-bold leading-none text-yellow-500">
                $
              </span>
              {balance}
            </span>
          </button>

        </div>

        {/* ==================== */}
        {/* Mobile Actions */}
        {/* ==================== */}
        <div className="flex shrink-0 items-center gap-2 md:hidden">

          {/* Mobile Balance */}
          <button
            type="button"
            className="shrink-0 rounded-lg border border-gray-200 bg-white px-2.5 py-2 shadow-sm transition-colors hover:bg-gray-50"
          >
            <span className="whitespace-nowrap text-xs font-bold text-gray-900">
              Balance{' '}
              <span className="text-base font-bold leading-none text-yellow-500">
                $
              </span>
              {balance}
            </span>
          </button>

          {/* Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="shrink-0 rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <FiX size={25} />
            ) : (
              <FiMenu size={25} />
            )}
          </button>

        </div>

      </div>

      {/* ==================== */}
      {/* Mobile Menu */}
      {/* ==================== */}
      {isMenuOpen && (
        <div className="mt-3 border-t border-gray-200 pt-3 md:hidden">

          <ul className="flex flex-col gap-1 text-[15px] font-medium text-gray-500">

            <li>
              <a
                href="#"
                onClick={closeMenu}
                className="block rounded-lg px-3 py-3 transition-colors hover:bg-gray-100 hover:text-gray-900"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#"
                onClick={closeMenu}
                className="block rounded-lg px-3 py-3 transition-colors hover:bg-gray-100 hover:text-gray-900"
              >
                Fixture
              </a>
            </li>

            <li>
              <a
                href="#"
                onClick={closeMenu}
                className="block rounded-lg px-3 py-3 transition-colors hover:bg-gray-100 hover:text-gray-900"
              >
                Teams
              </a>
            </li>

            <li>
              <a
                href="#"
                onClick={closeMenu}
                className="block rounded-lg px-3 py-3 transition-colors hover:bg-gray-100 hover:text-gray-900"
              >
                Schedules
              </a>
            </li>

          </ul>

        </div>
      )}

    </nav>
  );
};

export default Navbar;