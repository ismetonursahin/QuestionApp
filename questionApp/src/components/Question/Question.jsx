import React, { useEffect, useState } from "react";
import "./Question.css";
import { questions } from "../../questions";
import Result from "../Result/Result";

function Question({ data }) {
  const [timer, setTimer] = useState(10);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [trueAnswer, setTrueAnswer] = useState(0);
  const [falseAnswer, setFalseAnswer] = useState(0);
  const [trueResult, setTrueResult] = useState([]);
  const [falseResult, setFalseResult] = useState([]);

  const currentQuestion = data[questionIndex];

  useEffect(() => {
    if (timer > 0) {
      const remainTime = setTimeout(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(remainTime);
    }
  }, [timer]);

  useEffect(() => {
    let timer = setTimeout(() => {
      setQuestionIndex((prev) => prev + 1);
      setTimer(10);
    }, 10000);
    return () => clearTimeout(timer);
  }, [questionIndex]);

  useEffect(() => {
    let timer = setTimeout(() => {
      setShowOptions(true);
    }, 2000);
    return () => {
      setShowOptions(false);
      clearTimeout(timer);
    };
  }, [currentQuestion]);

  let btnClick = (index, answer) => {
    if (currentQuestion.options[index] === answer) {
      setTrueAnswer((prev) => prev + 1);
      setTrueResult((prev) => [...prev, currentQuestion.options[index]]);
    } else {
      setFalseAnswer((prev) => prev + 1);
      setFalseResult((prev) => [...prev, currentQuestion.options[index]]);
    }
    setQuestionIndex((prev) => prev + 1);
    setTimer(10);
  };

  return (
    <>
      {questionIndex < data.length ? (
        <div className="questions">
          <div className="question-title">
            <h3 className="question">Question {questionIndex + 1}</h3>
          </div>
          <div className="question-time">
            <h5>
              Time : <span>{timer}</span>
            </h5>
          </div>
          <div className="question">
            <img src={currentQuestion.media} alt="" />
            <h3>{currentQuestion.question}</h3>
            <div>
              {showOptions &&
                currentQuestion.options.map((item, indexNum) => (
                  <button
                    key={indexNum}
                    onClick={() =>
                      btnClick(indexNum, currentQuestion.options[questionIndex])
                    }
                  >
                    {item}
                  </button>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <Result
            trueAnswer={trueAnswer}
            falseAnswer={falseAnswer}
            trueResult={trueResult}
            falseResult={falseResult}
          />
        </>
      )}
    </>
  );
}

export default Question;
