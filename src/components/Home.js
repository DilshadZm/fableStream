import React, { useState } from "react";
import Slideshow from "./Slideshow";
const images = [
  "https://source.unsplash.com/random/800x600",
  "https://source.unsplash.com/random/800x600",
  "https://source.unsplash.com/random/800x600",
];
function HomePage() {
  return (
    <div className="bg-gray-100 max-w-screen">
      {/* Hero section */}
      <div className="relative overflow-hidden">
        <div className="max-w-screen mx-auto">
          <header className="relative bg-white">
            <div className="absolute inset-0">
              <img
                className="w-full h-full object-cover backdrop-blur-3xl"
                src="/banner.jpg"
                alt="Banner Image"
              />
              <div
                className="absolute inset-0 bg-black opacity-50"
                style={{ mixBlendMode: "multiply" }}
              ></div>
            </div>
            <div className="max-w-screen mx-auto py-6 px-4 sm:px-6 lg:px-8 relative z-10">
              <h1 className="text-3xl font-bold leading-tight text-gray-200">
                Welcome to <br />
                FableStream
              </h1>
            </div>
          </header>

          <main className="home-cover">
            <div className="max-w-screen mx-auto py-6 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-lg leading-6 font-medium text-gray-50 uppercase tracking-wider">
                  Featured Stories
                </h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-50 sm:text-4xl">
                  Discover Amazing Tales
                </p>
              </div>
              {/* Replace with your content */}
              <div class="max-w-screen mx-auto py-6 pb-11 sm:px-6 lg:px-8">
                <Slideshow />
              </div>

              {/* /End replace */}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
