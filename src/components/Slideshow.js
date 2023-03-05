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
    image: "The-Silent-Witness.jpg",
    title: "The Silent Witness: A Deadly Betrayal",
    summery:
      "Detective Sarah Black investigates a series of gruesome murders and discovers that all the victims were connected by a secret they shared. As she gets closer to the truth, Sarah realizes that the killer is one step ahead of her and will stop at nothing to keep the secret safe. Sarah must find the silent witness to the murders, but time is running out, and the smallest mistake can be fatal. Will Sarah solve the case before becoming the killer's next victim?",
  },
  {
    id: 3,
    image: "The-Price-of-Love.jpg",
    title: "The Price of Love: A Thrilling Tale of Best Friends, Deception, and Deadly Consequences",
    summery:
      "The story is about two best friends, Jack and Sarah. Jack encourages Sarah to pursue a relationship with a charming man named Tom, but soon becomes concerned when Tom starts to exhibit possessive and controlling behavior. Despite Jack's warnings, Sarah refuses to listen, putting her life in danger. Jack takes matters into his own hands, investigating Tom's past and putting his own life on the line to protect Sarah. In the end, Jack's determination saves Sarah's life, but he learns a valuable lesson about the limits of his ability to save someone from their own choices.",
  },
];

function Slideshow() {
  const [index, setIndex] = useState(0);

  function handleNext() {
    console.log("handleNext", index, Tales.length);
    setIndex((prevIndex) =>
      prevIndex + 1 >= Tales.length ? 0 : prevIndex + 1
    );
  }

  function handlePrev() {
    console.log("handlePrev", index, Tales.length);
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
                        <p className="text-sm md:text-base text-gray-50 mb-2 py-10 md:px-28">
                          {Tales[index].summery}
                          <div className="text-sm md:text-base text-gray-50 mt-6">
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
          
        </div>
        <div className="flex text-white justify-center z-30 mt-4">
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
  );
}

export default Slideshow;
