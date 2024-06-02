import React, { useState } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [num1, setNum1] = useState(Math.floor(Math.random() * 20));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 20));
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    const val = Number(input.trim());
    const mult = num1 * num2;

    if (input === '') {
      alert('Please enter a number');
    } else if (val === mult) {
      setScore(score + 1);
      setNum1(Math.floor(Math.random() * 20));
      setNum2(Math.floor(Math.random() * 20));
      setInput('');
    } else {
      setNum1(Math.floor(Math.random() * 20));
      setNum2(Math.floor(Math.random() * 20));
      setInput('');
    }
  };

  return (
    <div className="container">
      <div className="score">
        Score: <span id="score">{score}</span>
      </div>
      <div className="question">
        What is <span id="num1">{num1}</span> X <span id="num2">{num2}</span>?
      </div>
      <div className="input">
        <input
          type="text"
          id="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your answer"
        />
      </div>
      <div className="submit">
        <button id="submit" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default App;
