import './App.css';
import React, { useState } from 'react';
function App() {

  const [weight, setweight] = useState('')
  const [height, setheight] = useState('')
  let [bmi, setbmi] = useState(0)
  let [message, setmessage] = useState('')

  // CalBMI 
  let CalBmi = (e) => {
    e.preventDefault();
    if (weight.trim() === '' || height.trim() === '') {
      setmessage("Please Enter Some Numbers");
    }
    else if (isNaN(weight) || isNaN(height)) {
      setmessage("Please type only numbers");
    }


    else {
      // converting coming heightInFeet into heightInMeter 
      let heightInMeter = height * 0.3048;
      bmi = (weight / (heightInMeter * heightInMeter))
      setbmi(bmi.toFixed(1))

      //message to user

      if (bmi < 18.5) {
        setmessage("You are underweigh, take healthy food")
      }
      else if (bmi >= 18.5 && bmi <= 24.9) {
        setmessage("You have a healthy weight, good health")
      }
      else if (bmi >= 25 && bmi <= 29.9) {
        setmessage("You are overweight, ready for dieting")
      }
      else {

        setmessage("You are obese, consult with Dr please!")
      }
    }
  }


  // Reload button 
  let Reloading = () => {
    setmessage("All Calculations are resetting please wait")
    setbmi("resetting...")
    window.location.reload()

  }
  return (
    <body class="bg-gray-200 p-10 h-screen">

      <div className='container' class="max-w-md mx-auto mt-10 bg-white p-6 rounded-md shadow-md h-auto">
        <h2 class="block text-gray-700 text-2xl font-bold  flex justify-center item-center">BMI Calculator</h2>
        <h6 class="block mt-1 text-gray-700 text-sm font-bold mb-8 flex justify-center item-center">By MD Nabeel Khan</h6>
        <form class="mb-4">

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Weight (Kilograms)</label>
            <input type='text' placeholder='Enter weight value' value={weight} onChange={(e) => setweight(e.target.value)} class="border-2 border-gray-400 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Height (Feet)</label>
            <input type='text' placeholder='Enter height value' value={height} onChange={(e) => setheight(e.target.value)} class="border-2 border-gray-400 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
          </div>
          <div class="flex items-center justify-center ">
            <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2 mt-2" onClick={CalBmi}>Submit</button>
            <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  mx-2 mt-2" onClick={Reloading}>Reload</button>
          </div>
          <div class="mt-8">
            <h3 class="text-lg font-bold text-gray-800 flex item-center justify-center">Your BMI is: {bmi}</h3>
            <p class="text-sm text-gray-600 font-bold flex item-center justify-center mb-2 p-1">{message}</p>
          </div>

        </form>

      </div>


    </body>

  );
}

export default App;
