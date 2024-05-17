import React from "react";
import "./Result.css";

function Result({
  trueResult,
  trueAnswer,
  falseAnswer,
  falseResult,
  data,
  setStart,
}) {
  return (
    <div className="results">
      {" "}
      <div className="baslik">
        <h1>Results</h1>
        <button onClick={() => setStart(false)}>Restart</button>
      </div>
      <div className="result">
        <div className="answer-total">
          <div className="answer">
            <h4>
              Correct Answer : <span>{trueAnswer}</span>
            </h4>
            <h4>
              Wrong answers : <span>{falseAnswer}</span>
            </h4>
            <h4>
              Unanswered :{" "}
              <span>
                {data.length - (trueResult.length + falseResult.length)}
              </span>
            </h4>
          </div>
          <div className="total">
            <h2>TOTAL</h2>
            <h1>{trueAnswer * 10}</h1>
          </div>
        </div>
      </div>
      <div className="answers">
        <div className="true-answers">
          <h1>Correct Answer</h1>
          {trueResult.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </div>
        <div className="false-answers">
          <h1>Wrong Answers</h1>
          {falseResult.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Result;
