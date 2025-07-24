const Footer = () => {
  return (
    <footer className="w-full px-6 py-8 bg-[hsl(82,84.5%,67.1%)] flex flex-col justify-between items-center text-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-6xl mx-auto gap-8">
        {/* Logo Section */}
        <div className="my-4 md:my-0">
          <div className="text-2xl font-bold text-gray-900">LOGO</div>
        </div>

        {/* Developers Section */}
        <div className="my-4 md:my-0">
          <h1 className="px-4 mb-3 text-lg font-semibold text-gray-900">
            Developers
          </h1>
          <div className="flex flex-col border border-gray-300 rounded-xl gap-3 px-6 py-4 bg-white/70 backdrop-blur-sm shadow-md">
            <div className="flex items-center gap-2 group">
              <svg
                className="w-5 h-5 text-green-600 group-hover:text-green-800 transition-colors"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-mono text-base font-medium text-gray-900 group-hover:text-green-600 group-hover:scale-105 transition-all duration-200">
                Avtar Singh
              </span>
            </div>
            <div className="flex items-center gap-2 group">
              <svg
                className="w-5 h-5 text-green-600 group-hover:text-green-800 transition-colors"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-mono text-base font-medium text-gray-900 group-hover:text-green-600 group-hover:scale-105 transition-all duration-200">
                Mohamed Ouederni
              </span>
            </div>
            <div className="flex items-center gap-2 group">
              <svg
                className="w-5 h-5 text-green-600 group-hover:text-green-800 transition-colors"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-mono text-base font-medium text-gray-900 group-hover:text-green-600 group-hover:scale-105 transition-all duration-200">
                Rachel Tipton
              </span>
            </div>
            <div className="flex items-center gap-2 group">
              <svg
                className="w-5 h-5 text-green-600 group-hover:text-green-800 transition-colors"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-mono text-base font-medium text-gray-900 group-hover:text-green-600 group-hover:scale-105 transition-all duration-200">
                Rapha
              </span>
            </div>
          </div>
        </div>

        {/* Pages Section */}
        <div className="my-4 md:my-0">
          <h1 className="px-4 mb-3 text-lg font-semibold text-gray-900">
            Pages
          </h1>
          <div className="flex flex-col gap-2 px-4">
            <a
              href="#"
              className="font-mono text-sm hover:text-green-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="font-mono text-sm hover:text-green-600 transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="font-mono text-sm hover:text-green-600 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* GitHub Link Section */}
      <div className="mt-8 text-center">
        <a
          href="https://github.com/chingu-voyages/V56-tier2-team-22"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-lg font-semibold text-gray-900 hover:text-green-600 transition-colors"
        >
          GitHub Project Link
        </a>
      </div>
    </footer>
  );
};

export default Footer;
