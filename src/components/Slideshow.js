import { useState } from "react";
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";
import { Link } from "react-router-dom";
const Tales = [
  {
    id: 1,
    image: "The-Shadows-that-Crept-Banner.jpg",
    title: "The Shadows that Crept: Tales of Terror and Dread",
    summery:
      "Emma has always been afraid of the dark. When she moves into her new apartment, she discovers that the bedroom closet doesn't have a light bulb. She decides to leave the door open until she can buy a new one. But each night, she wakes up to find the door closed. Emma starts to feel like someone, or something, is watching her. She hears strange noises coming from the closet, and the air inside feels cold and stale. One night, Emma decides to investigate and discovers a secret room hidden behind the closet. Inside, she finds a horrifying secret that changes her life forever.",
  },
  {
    id: 2,
    image: "https://source.unsplash.com/random/800x600",
    title: "Title 2",
    summery:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Duis vestibulum metus ut ligula scelerisque, vel facilisis  purus viverra.",
  },
  {
    id: 3,
    image: "The-Shadows-that-Crept-Banner.jpg",
    title: "Title 3",
    summery:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Duis vestibulum metus ut ligula scelerisque, vel facilisis  purus viverra.",
  },
];

function Slideshow() {
  const [index, setIndex] = useState(0);

  function handleNext() {
    setIndex((prevIndex) =>
      prevIndex + 1 >= Tales.length ? 0 : prevIndex + 1
    );
  }

  function handlePrev() {
    setIndex((prevIndex) =>
      prevIndex - 1 < 0 ? Tales.length - 1 : prevIndex - 1
    );
  }

  return (
    <div className="max-w-screen mx-auto py-6 sm:px-6 lg:px-8">
      
        <div className="relative h-screen md:h-96">
          {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-75"></div> */}
          <div className="relative h-full flex justify-center items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="slideshow-container mt-10">
                {Tales.map((items, i) => (
                  <div
                    key={i}
                    className="slideshow-slide"
                    style={{
                      backgroundImage: `url(${items.image})`,
                      display: i === index ? "block" : "none",
                    }}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-no-repeat bg-center"
                      style={{ backgroundImage: `url(${Tales[index].image})` }}
                    >
                      <div className="p-4 bg-black bg-opacity-50 absolute top-0 left-0 h-full px-8 py-10 md:py-20 flex-col items-center justify-center">
                        <h3 className="text-lg md:text-2xl  font-medium text-gray-50 mb-2 md:px-20 w-full">
                          {Tales[index].title}
                        </h3>
                        <p className="text-sm md:text-base text-gray-50 mb-2 h-full py-10 md:px-28">
                          {Tales[index].summery}
                          <div className="text-sm md:text-base text-gray-50 mt-6 h-full">
                            <Link
                              to={`/StoryPage/${items.id}`}
                              className="text-sm md:text-base text-white bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
                            >
                              Read More
                            </Link>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex text-white justify-center mt-4">
            <button
              className="mr-2 bg-gray-500 py-1 px-3 rounded-full"
              onClick={handlePrev}
            >
              <GrCaretPrevious />
            </button>
            <button
              className="bg-blue-500 py-1 px-3 rounded-full"
              onClick={handleNext}
            >
              <GrCaretNext />
            </button>
          </div>
        </div>
    </div>
  );
}

export default Slideshow;
