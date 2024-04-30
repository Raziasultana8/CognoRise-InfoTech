import React from "react";
import chart from "../assets/chart.png";
function Intro() {
  return (
    <div className="text-center">
      <p className="text-3xl font-bold my-4 ">BMI introduction</p>
      <p className="text-lg lg:w-1/2 mx-auto">
        BMI is a measurement of a person's leanness or corpulence based on their
        height and weight, and is intended to quantify tissue mass. It is widely
        used as a general indicator of whether a person has a healthy body
        weight for their height. Specifically, the value obtained from the
        calculation of BMI is used to categorize whether a person is
        underweight, normal weight, overweight, or obese depending on what range
        the value falls between. These ranges of BMI vary based on factors such
        as region and age, and are sometimes further divided into subcategories
        such as severely underweight or very severely obese. Being overweight or
        underweight can have significant health effects, so while BMI is an
        imperfect measure of healthy body weight, it is a useful indicator of
        whether any additional testing or action is required. Refer to the table
        below to see the different categories based on BMI that are used by the
        calculator.
      </p>
      <div className="">
        <p className="text-3xl font-bold my-6">BMI chart for adults</p>
        <img src={chart} alt="" className="mx-auto" />
        <p className="text-lg my-6 w-1/2 mx-auto">
          This is a graph of BMI categories based on the World Health
          Organization data. The dashed lines represent subdivisions within a
          major categorization.
        </p>
      </div>
      <div>
        <p className="text-3xl font-bold mb-4 ">BMI Formula</p>
        <p className="text-lg w-1/2 mx-auto">
          Below are the equations used for calculating BMI in the International
          System of Units (SI) and the US customary system (USC) using a 5'10",
          160-pound individual as an example:
        </p>
      </div>
    
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-3">
          USC Units (U.S. Customary Units)
        </h3>
        <table className=" table-fixed border-collapse border border-gray-300 mx-auto">
          <thead>
            <tr className="">
              <th className="border  py-2 text-left lg:ps-4">Description</th>
              <th className="border px-4 py-2 text-left">Formula</th>
              <th className="border  py-2 text-left lg:ps-4">Calculation</th>
              <th className="border px-4 py-2 text-left">Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">BMI Calculation</td>
              <td className="border px-4 py-2">
                BMI = 703 × mass(lbs) / height² (in)
              </td>
              <td className="border px-4 py-2">703 × 160 / 70²</td>
              <td className="border px-4 py-2">22.96 kg/m²</td>
            </tr>
          </tbody>
        </table>
      </div>

      
      <div>
        <h3 className="text-xl font-semibold mb-3">SI Units (Metric Units)</h3>
        <table className=" table-fixed border-collapse border border-gray-300 mx-auto">
          <thead>
            <tr className="">
              <th className="border  py-2 text-left lg:ps-4">Description</th>
              <th className="border px-4 py-2 text-left">Formula</th>
              <th className="border  py-2 text-left lg:ps-4">Calculation</th>
              <th className="border px-4 py-2 text-left ">Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">BMI Calculation</td>
              <td className="border px-4 py-2">BMI = mass(kg) / height² (m)</td>
              <td className="border px-4 py-2">72.57 / 1.78²</td>
              <td className="border px-4 py-2">22.90 kg/m²</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Intro;
