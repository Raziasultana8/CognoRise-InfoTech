import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import bmii from "../assets/bmii.png";
import cal from "../assets/cal.png";
import protein from "../assets/protein.png";
import runn from "../assets/runn.jpg";
import vit from "../assets/vit.png";
import health from "../assets/health.png";

function Health() {
  const [questions] = useState([
    {
      question: "What nutrient is essential for building muscle?",
      answers: ["Fiber", "Protein", "Sugars", "Vitamins"],
      correct: "Protein",
      image: protein,
    },
    {
      question: "Which of these is a weight-bearing exercise?",
      answers: ["Swimming", "Cycling", "Running", "Rowing"],
      correct: "Running",
      image: runn,
    },
    {
      question: "What does BMI stand for?",
      answers: [
        "Body Mass Index",
        "Basic Metabolic Index",
        "Body Measurement Indicator",
        "Basal Metabolic Input",
      ],
      correct: "Body Mass Index",
      image: bmii,
    },
    {
      question: "Which vitamin is primarily obtained from sunlight exposure?",
      answers: ["Vitamin A", "Vitamin C", "Vitamin B", "Vitamin D"],
      correct: "Vitamin D",
      image: vit,
    },
    {
      question:
        "How many calories approximately does one pound of fat contain?",
      answers: [
        "3500 calories",
        "1500 calories",
        "2500 calories",
        "500 calories",
      ],
      correct: "3500 calories",
      image: cal,
    },
  ]);
  const [currentQue, setCurrentQue] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const userName = location.state?.userName || "Guest";

  const nextQue = () => {
    if (selectedAnswer && currentQue < questions.length - 1) {
      setCurrentQue(currentQue + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    }
  };

  const Quit = () => {
    if (currentQue === questions.length - 1) {
      Swal.fire({
        title: "Quiz Completed!",
        text: `Your score is ${score} out of ${questions.length}`,
        icon: "success",
        confirmButtonText: "Finish",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
    } else {
      navigate("/");
    }
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setAnswered(true);
    if (answer === questions[currentQue].correct) {
      setScore(score + 1);
    }
  };
  return (
    <div>
      <div className="">
        <div className="mt-4 shadow-xl shadow-blue-950 text-center md:flex lg:flex items-center justify-evenly">
          <div className="bg-black text-white px-4 py-4 shadow-2xl shadow-black mb-4">
            <p className="text-3xl font-bold">Welcome {userName}</p>
          </div>
          <div className="max-w-xs ms-8">
            <img src={health} alt="Sports" />
          </div>
          <span className="text-3xl font-bold">Score: {score}</span>
        </div>
        <div className="text-center text-lg lg:flex justify-evenly items-center">
          <div className="my-16 lg:w-1/2">
            <p className="text-3xl mb-4 font-bold">Question {currentQue + 1}</p>
            <div className="border bg-black text-white shadow-xl shadow-black">
              <p className="mt-4">{questions[currentQue].question}</p>
              <div className="grid grid-cols-2 p-6 gap-2">
                {questions[currentQue].answers.map((answer, index) => (
                  <button
                    className={`border border-white py-2 w-full ${
                      answered && answer === questions[currentQue].correct
                        ? "bg-green-500"
                        : selectedAnswer === answer
                        ? "bg-red-500"
                        : "bg-transparent"
                    } cursor-pointer`}
                    key={index}
                    onClick={() => handleAnswerClick(answer)}
                    disabled={answered}
                  >
                    {answer}
                  </button>
                ))}
              </div>
              <div className="px-4 mb-4">
                <button
                  type="button"
                  className="outline outline-1 text-white py-2 px-4 rounded-md w-1/3 hover:bg-white hover:text-black"
                  onClick={Quit}
                  disabled={selectedAnswer === null}
                >
                  {currentQue === questions.length - 1 ? "Submit" : "Quit"}
                </button>
                {currentQue < questions.length - 1 && (
                  <button
                    type="button"
                    className="outline outline-1 text-white py-2 px-4 rounded-md w-1/3 ms-2 hover:bg-white hover:text-black"
                    onClick={nextQue}
                    disabled={!selectedAnswer}
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="border border-black p-6 mt-12 bg-black shadow-black shadow-xl">
            <img
              src={questions[currentQue].image}
              alt="Quiz image"
              style={{ width: "300px", height: "200px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Health;
