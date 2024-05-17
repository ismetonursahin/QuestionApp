import { useState } from "react";
import "./App.css";
import Question from "./components/Question/Question";
import { questions } from "./questions";

function App() {
  const [start, setStart] = useState(false);

  let handleStartButton = () => {
    setStart(() => true);
  };
  return (
    <>
      {!start && (
        <div className="start-page">
          <h1>Question App</h1>
          <div className="kurallar">
            <h3>Oyun Kuralları ?</h3>
            <ul>
              <li>Her soru ekranda en fazla 30sn gözükür.</li>
              <li>İlk 10sn cevap şıkları görünmeyecektir.</li>
              <li>
                Cevap şıklarından biri tıklandıktan ya da 30sn tamamlandıktan
                sonra yeni soruya geçilecektir.
              </li>
              <li>Geçmiş sorulara dönülemeyecektir.</li>
              <li>
                Test bitiminde her soruya verilen yanıt ile doğru ve yanlış
                sayıları kullanıcı ile paylaşılacaktır.
              </li>
            </ul>
          </div>
          <button onClick={handleStartButton}>OYUNA BAŞLA</button>
        </div>
      )}
      {start && <Question data={questions} setStart={setStart}></Question>}
    </>
  );
}

export default App;
