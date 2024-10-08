import React, { useState } from "react";
import "./App.css";

function App() {
  // initializing the value of weight & height using state
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [message, setMessage] = useState("");
  const [bmi, setBmi] = useState("");

  // BMI Logic
  let calcBmi = (e) => {
    e.preventDefault(); 
    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    }  else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      // BMI message Logic
      if (bmi < 25) {
        setMessage("You are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are a healthy person");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight</label>
            <input
              type="text"
              placeholder="Enter weight value"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
            />
          </div>

          <div>
            <label>Height</label>
            <input
              type="text"
              placeholder="Enter height value"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="button">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi} </h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
