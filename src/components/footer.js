import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 pt-6">
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">GitHub</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 .3C5.4.3.3 5.4.3 12c0 5.3 3.4 9.8 8.1 11.4.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.6-1.2-1.6-1-1 .1-1 .1-1 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.5-.3-5-1.2-5-5a4 4 0 0 1 1-2.7c-.1-.3-.5-1.3.1-2.7 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .6 1.4.2 2.4.1 2.7a4 4 0 0 1 1 2.7c0 1.9-.5 3.2-1 3.8.1.3.6.8 1.1.6 6.7-1.6 10.1-6.1 10.1-11.4 0-6.6-5.4-12-12-12z"
                fill="currentColor"
              />
            </svg>
          </a>

          <a href="#" className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">Twitter</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.64 4.569a9.99 9.99 0 0 1-2.864.785A4.98 4.98 0 0 0 23.114 3.2a9.93 9.93 0 0 1-3.14 1.2 5.002 5.002 0 0 0-8.563 4.562A14.165 14.165 0 0 1 3.37 3.183a5 5 0 0 0-.68 2.518c0 1.74.89 3.277 2.243 4.174a4.995 4.995 0 0 1-2.26-.624v.062a5.002 5.002 0 0 0 4.006 4.896 5.056 5.056 0 0 1-1.327.174c-.327 0-.652-.03-.968-.085a4.995 4.995 0 0 0 4.659 3.453 9.99 9.99 0 0 1-6.172 2.126c-.404 0-.808-.024-1.21-.074a14.16 14.16 0 0 0 7.646 2.24c9.16 0 14.156-7.583 14.156-14.155 0-.215-.005-.43-.014-.645a10.137 10.137 0 0 0 2.488-2.589z"
              />
            </svg>
          </a>

          <a href="#" className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">LinkedIn</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3h-15zm4.5 9h-3v-4.5h3V13zm1.5-4.5h-1.5v3h1.5v-3zm11.25 5.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
        <p className="mt-4 text-center text-base text-gray-400">
          &copy; 2022 FableStream. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
