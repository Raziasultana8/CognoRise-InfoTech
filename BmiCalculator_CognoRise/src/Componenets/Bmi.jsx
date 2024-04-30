import React, { useState } from "react";

function Bmi() {
  const [weight, setWeight] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (weight && heightFeet && heightInches) {
      const weightKg = weight;
      const heightM =
        parseInt(heightFeet) * 0.3048 + parseInt(heightInches) * 0.0254;
      const bmiValue = weightKg / (heightM * heightM);
      setBmi(bmiValue.toFixed(1));
    } else {
      setBmi(null);
    }
  };

  const getBMIClass = () => {
    if (bmi === null) return "";
    if (bmi < 18.5) return "bg-yellow-400";
    if (bmi >= 18.5 && bmi <= 24.9) return "bg-green-600";
    if (bmi >= 25 && bmi <= 29.9) return "bg-orange-400";
    if (bmi >= 30) return "bg-red-600";
  };

  return (
    <div>
      <div className="text-center font-bold text-3xl mb-6 lg:text-4xl">
        Body Mass Index (BMI) Calculator
      </div>
      <div className="bg-gray-400 py-4 lg:w-2/4 mx-auto mb-2">
        <div className="text-lg">
          <div className="mt-6 ms-6 lg:flex justify-evenly ">
            <p>Weight (Kilograms)</p>
            <input
              type="text"
              className="outline-none text-black mb-4 py-2  px-2 lg:w-2/4"
              onChange={(e) => setWeight(e.target.value)}
              value={weight}
              placeholder="Enter weight in kilograms"
            />
          </div>
          <div className="ms-6 mt-4 lg:flex justify-evenly items-center ">
            <p>Height (Feet)</p>
            <input
              type="text"
              className="outline-none text-black py-2 px-2 lg:w-1/6"
              onChange={(e) => setHeightFeet(e.target.value)}
              value={heightFeet}
              placeholder="(feet)"
            />
            <p className="">Height (Inches)</p>
            <input
              type="text"
              className="outline-none text-black py-2 px-2 lg:w-1/6"
              onChange={(e) => setHeightInches(e.target.value)}
              value={heightInches}
              placeholder="(inches)"
            />
          </div>
          <div className="text-center my-8">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded lg:w-2/3"
              onClick={calculateBMI}
            >
              Calculate BMI
            </button>
          </div>
        </div>
      </div>
      <div
        className={`lg:w-1/2 mx-auto grid grid-cols-2 mb-2 text-center  text-lg ${getBMIClass()}`}
        style={{ gridTemplateColumns: "1fr 3fr" }}
      >
        <p className="bg-gray-400 py-4">Your BMI:</p>
        <div className="mt-4">
          <p className="">{bmi}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:w-1/2  mx-auto text-center gap-2 text-lg">
        <div className="bg-yellow-400">
          <p>Underweight</p>
          <p>{"< 18.5"}</p>
        </div>
        <div className="bg-green-600">
          <p>Normal weight</p>
          <p>18.5 - 24.9</p>
        </div>
        <div className="bg-orange-400">
          <p>Overweight</p>
          <p>25 - 29.9</p>
        </div>
        <div className="bg-red-600">
          <p>Obesity</p>
          <p>{">= 30"}</p>
        </div>
      </div>
    </div>
  );
}

export default Bmi;
