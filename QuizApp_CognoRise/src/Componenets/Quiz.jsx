import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import quiz from "../assets/quiz.png";

function Quiz() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const Category = [
    { id: "3", value: "TV & Movies", slug: "tv-movies" },
    { id: "7", value: "Health & Fitness", slug: "health-fitness" },
    { id: "8", value: "General Knowledge", slug: "general-knowledge" },
    { id: "9", value: "Sports", slug: "sports" },
    { id: "10", value: "Technology", slug: "technology" },
  ];

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
    if (error) setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim()) {
      setError("Name is required");
      return;
    }
    const categoryItem = Category.find((item) => item.value === category);
    if (categoryItem) {
      navigate(`/${categoryItem.slug}`, { state: { userName: name } });
    }
  };

  return (
    <div>
      <div className="my-10 px-6 text-lg lg:ps-16 lg:flex justify-around">
        <div>
          <div className="flex items-center">
            <p className="text-3xl font-bold me-4">Hey! Let's Start</p>
            <img src={quiz} alt="" className="max-w-20 mt-4" />
          </div>
          <div className="mb-6">
            <p className="my-2">Name</p>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full outline-none placeholder-white bg-black text-white py-2 rounded-sm ps-2"
              value={name}
              onChange={handleNameChange}
              required
            />
            {error && <div className="text-red-500">{error}</div>}{" "}
            {/* Display the error message if any */}
          </div>
          <div className="mb-6">
            <p className="my-2">Select Category</p>
            <select
              value={category}
              onChange={handleCategoryChange}
              className="py-2 ps-2 w-full bg-black text-white rounded-sm"
            >
              <option value="" disabled>
                Select a category
              </option>
              {Category.map((item) => (
                <option value={item.value} key={item.id}>
                  {item.value}
                </option>
              ))}
            </select>
          </div>
          <p className="my-2">Choose Level</p>
          <select className="py-2 ps-2 w-full bg-black text-white rounded-sm">
            <option value="Easy">Easy</option>
            <option value="Medium" disabled>
              Medium
            </option>
            <option value="Difficult" disabled>
              Difficult
            </option>
          </select>
          <button
            className="outline outline-1 text-white bg-black py-2 px-6 rounded-md mt-8 hover:bg-white hover:text-black"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <div className="mt-16">
          <img src={logo} alt="logo" className="mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default Quiz;
