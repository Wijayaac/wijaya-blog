import Link from "next/link";

export default function Header() {
  const buttonToggle = () => {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
  };
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/">
                <div className="flex items-center py-4 px-2">
                  <img
                    src="/favicons/favicon-32x32.png"
                    alt="Logo"
                    className="h-8 w-8 mr-2"
                  />
                  <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
                    <a className="hover:underline">Blog</a>.
                  </h2>
                </div>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <a
                href=""
                className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">
                Home
              </a>
              <a
                href=""
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
                Services
              </a>
              <a
                href=""
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
                About
              </a>
              <a
                href=""
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
                Contact Us
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3 ">
            <a
              href=""
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">
              Log In
            </a>
            <a
              href=""
              className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">
              Sign Up
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={buttonToggle}
              className="outline-none mobile-menu-button">
              <svg
                className=" w-6 h-6 text-gray-500 hover:text-green-500"
                xlinkShow="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden mobile-menu">
        <ul className="">
          <li className="active">
            <a
              href="index.html"
              className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
              Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
