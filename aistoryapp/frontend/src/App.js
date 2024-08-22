import React, { useState } from "react";

import "./index.css"; // Your custom CSS
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [formData, setFormData] = useState({
    age: "1-2 years",
    character: "",
    theme: "Adventure",
    style: "Imaginative",
    length: 5,
  });

  const [story, setStory] = useState("");

  const storyParts = [
    "Once upon a time, there was a little girl, she lived in a village near the forest..",
    "One day, she went to visit her grandmother.",
    "On her way, she met a wolf.",
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    if (currentPage < storyParts.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  function onSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setStory(
      `Once upon a time, a ${
        formData.character
      } embarked on a ${formData.theme.toLowerCase()} journey. The story was written in a ${formData.style.toLowerCase()} style and was perfect for readers aged ${
        formData.age
      }.`
    );
  }

  return (
    <>
      <div className="container-fluid vh-100 d-flex ">
        <div className="row align-items-center">
          <div className="col-md-4 input-page mx-auto">
            <form className="input-form-container">
              <div className="mb-3">
                <label for="readersAge" className="form-label">
                  Reader's age
                </label>
                <select
                  className="form-select"
                  name="age"
                  aria-label="Default select example"
                  value={formData.age}
                  onChange={handleChange}>
                  <option value="1-2 years"> 1-2 years</option>
                  <option value="2-3 years"> 2-3 years </option>
                  <option value="3-4 years"> 3-4 years </option>
                  <option value="4-6 years"> 4-6 years </option>
                  <option value="6-8 years"> 6-8 years</option>
                  <option value="8-10 years"> 8-10 years </option>
                  <option value="10-12 years"> 10-12 years </option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="mainCharacterDetails" className="form-label">
                  Main character
                </label>
                <textarea
                  className="form-control"
                  name="character"
                  value={formData.character}
                  id="mainCharacterDetails"
                  placeholder="Describe your main character..."
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label for="theme" className="form-label">
                  Theme
                </label>
                <select
                  className="form-select"
                  name="theme"
                  aria-label="Default select example"
                  value={formData.theme}
                  onChange={handleChange}>
                  <option value="Adventure">
                    Adventure: Exciting journies, young heroes, challenges
                  </option>
                  <option value="Science_fiction">
                    Science fiction: Futuristic, imaginative worlds, exploration
                  </option>
                  <option value="Dairytale">
                    Fairytale: Magic, enchanting creatures, happy endings
                  </option>
                  <option value="Mystery">
                    Mystery: Puzzles, clues, child detectives
                  </option>
                  <option value="Realistic_fiction">
                    Realistic fiction: Everyday life, relatable characters,
                    emotions
                  </option>
                  <option value="Fable">
                    Fable: Moral lessons, talking animals
                  </option>
                  <option value="Educational">
                    Educational: informative, age-appropriate facts, engaging
                  </option>
                </select>
              </div>
              <div className="mb-3">
                <label for="writingStyle" className="form-label">
                  Writing style
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="style"
                  value={formData.style}
                  onChange={handleChange}>
                  <option value="Imaginative">
                    Imaginative: Creative, whimsical, fantastical elements.
                  </option>
                  <option value="Funny">
                    Funny: Humorous, witty, lighthearted tone.
                  </option>
                  <option value="Heartwarming">
                    Heartwarming: uplifting, positive messages, emotional
                    connections.
                  </option>
                  <option value="Action">
                    Action:packed: Fast-paced thrilling, adventure-filled.
                  </option>
                  <option value="Nostalgic">
                    Nostalgic: Familiar settings, relatable experiences,
                    memories.
                  </option>
                  <option value="Empowering">
                    Empowering: Confidence-building, inspiring, strong
                    characters.
                  </option>
                  <option value="Educational">
                    Educational: informative, engaging, age-appropriate lessons.
                  </option>
                  <option value="Spooky">
                    Spooky: Mild scares, eerie settings, suspenseful.
                  </option>
                </select>
              </div>
              <label for="storyLength" className="form-label">
                Story length
              </label>
              <input type="range" className="form-range" id="storyLength" />
              <div className="d-flex justify-content-center mt-5">
                <button
                  type="submit"
                  className="generate-story-btn btn-primary "
                  onClick={onSubmit}>
                  Generate Story!
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-7 output-page mx-auto">
            <div className="row image-output-container align-items-center justify-content-center d-flex">
              <div className="col arrow-container align-items-center justify-content-center d-flex">
                <button className="arrow-btn" role="Button">
                  <i class="bi bi-arrow-left" />
                </button>
              </div>
              <div className="book-image row col-md-8  d-flex mx-auto">
                <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/140/502/original/fairyTaleImage.jpg?1724319670" />
              </div>

              <div className="col arrow-container align-items-center justify-content-center d-flex">
                <button className=" arrow-btn" role="Button">
                  <i class="bi bi-arrow-right" />
                </button>
              </div>
            </div>
            <div className=" story-output-container row align-items-center mx-auto">
              {story}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
