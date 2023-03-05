import { useEffect, useState } from "react";
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";
import { useParams } from "react-router-dom";
const data = require("./stories.json");

function StoryPage() {
  const { id } = useParams(); // get the id parameter from the URL
  const [index, setIndex] = useState(0);
  const [story, setStory] = useState(null);

  useEffect(() => {
    const item = getItemById(id);
    if (!item) {
      setStory(null);
      return;
    }
    setStory(item);
    console.log(item)
  }, [id]);

  function getItemById(id) {
    return data.find((item) => item.id === parseInt(id));
  }

  function handleNext() {
    setIndex((prevIndex) =>
      prevIndex + 1 >= story.chapters.length ? 0 : prevIndex + 1
    );
  }

  function handlePrev() {
    setIndex((prevIndex) =>
      prevIndex - 1 < 0 ? story.chapters.length - 1 : prevIndex - 1
    );
  }
  if (!story) {
    return <div className="error">Invalid ID</div>;
  }
  return (
    <div className="relative h-screen" id="storyPage">
      {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-75"></div> */}
      <div className="flex-col h-full flex justify-between items-center">
        <div className="text-white font-semibold z-30 text-xl md:text-2xl py-9 md:py-0 mx-5 md:mt-6" id="Story-Title">{story.title}</div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="slideshow-container mt-10">
            {story.chapters.map((items, i) => (
              <div
                key={i}
                className="slideshow-slide"
                style={{
                  backgroundImage: `url(${story.chapterCover})`,
                  display: i === index ? "block" : "none",
                }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-no-repeat bg-center"
                  style={{ backgroundImage: `url(${story.chapterCover})` }}
                >
                  <div className="p-4 bg-black bg-opacity-50 absolute top-0 left-0 h-full px-8 py-10 md:py-20 flex-col items-center justify-center">
                    <div className="bg-gray-900 py-4 mt-16 md:mt-0 rounded-2xl md:bg-opacity-60 bg-opacity-10">
                    <h3 className="text-lg md:text-2xl  font-medium text-gray-50 mb-2 md:px-20 w-full">
                      {story.chapters[index].title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-50 mb-2 h-full py-10 md:px-28">
                      {items.content}
                      <div className="text-sm md:text-base text-gray-50 mt-6 h-full">
                    </div>
                    </p>
                  </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex text-white justify-center z-50 mb-10">
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

export default StoryPage;
