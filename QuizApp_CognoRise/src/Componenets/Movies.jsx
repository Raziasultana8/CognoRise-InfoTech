import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import khan from "../assets/khan.png";
import ghajini from "../assets/ghajni.jpg";
import dilip from "../assets/dilip.jpg";
import james from "../assets/james.jpeg";
import foresst from "../assets/foresst.jpg";
import movies from "../assets/movies.png";
function Movies() {
  const [questions] = useState([
    {
      question: 'Who directed the movie "Titanic"?',
      answers: [
        "Steven Spielberg",
        "James Cameron",
        "Martin Scorsese",
        "Ridley Scott",
      ],
      correct: "James Cameron",
      image: james,
    },
    {
      question: "Who is known as the Tragedy King of Bollywood?",
      answers: [" Raj Kapoor", "Dilip Kumar", "Dev Anand", "Rajesh Khanna"],
      correct: "Dilip Kumar",
      image: dilip,
    },
    {
      question:
        'What is the name of the character played by Shah Rukh Khan in the film "Dilwale Dulhania Le Jayenge?',
      answers: ["Rahul", "Raj", "Prem", "Veer"],
      correct: "Raj",
      image: khan,
    },
    {
      question:
        "Which Hindi film was the first to reach the Rs 100 crore club at the Indian box office?",
      answers: ["Hum Aapke Hain Koun..!", "Ghajini", "3 Idiots", "Dangal"],
      correct: "Ghajini",
      image: ghajini,
    },
    {
      question: "Which film won the Academy Award for Best Picture in 1994?",
      answers: [
        "Pulp Fiction",
        "Forrest Gump",
        "The Shawshank Redemption",
        "Jurassic Park",
      ],
      correct: "Forrest Gump",
      image: foresst,
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

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setAnswered(true);
    if (answer === questions[currentQue].correct) {
      setScore(score + 1);
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
  return (
    <div>
      <div className="mt-4 shadow-xl shadow-blue-950 text-center md:flex lg:flex items-center justify-evenly">
        <div className="bg-black text-white px-4 py-4 shadow-2xl shadow-black mb-4">
          <p className="text-3xl font-bold">Welcome {userName}</p>
        </div>
        <div className="max-w-xs">
          <img src={movies} alt="Sports" className="max-w-56 ms-20" />
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

export default Movies;
