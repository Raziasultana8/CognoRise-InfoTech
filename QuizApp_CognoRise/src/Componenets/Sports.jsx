import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import fifa from "../assets/fifa.png";
import players from "../assets/players.png";
import soccer from "../assets/soccer.png";
import held from "../assets/held.jpg";
import birdie from "../assets/birdie.png";
import sports from "../assets/sports.png";

function Sports() {
  const [questions] = useState([
    {
      question: "What is the highest governing body of soccer worldwide?",
      answers: ["FIFA", "UEFA", "NFL", "ICC"],
      correct: "FIFA",
      image: fifa,
    },
    {
      question: "Which sport is known as the king of sports?",
      answers: ["Basketball", "Tennis", "Soccer", "Boxing"],
      correct: "Soccer",
      image: soccer,
    },
    {
      question: "How many players are there on a baseball team?",
      answers: ["9", "11", "7", "5"],
      correct: "9",
      image: players,
    },
    {
      question: "In which year were the first modern Olympic Games held?",
      answers: ["1896", "1900", "1924", "1863"],
      correct: "1896",
      image: held,
    },
    {
      question:
        "What is the term used when a golfer scores one under par on a hole?",
      answers: ["Eagle", "Birdie", "Bogey", "Ace"],
      correct: "Birdie",
      image: birdie,
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
      <div className="mt-4 shadow-xl shadow-blue-950 text-center md:flex lg:flex items-center justify-evenly">
        <div className="bg-black text-white px-4 py-4 shadow-2xl shadow-black mb-4">
          <p className="text-3xl font-bold">Welcome {userName}</p>
        </div>
        <img src={sports} alt="Sports" className="ms-8" />
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
                  disabled={!selectedAnswer} // Disable if no answer is selected
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
  );
}

export default Sports;
