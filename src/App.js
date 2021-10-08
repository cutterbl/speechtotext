import { useState } from "react";
import "./App.scss";
import SpeechToText from "./SpeechToText";

function App() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Speechless Hackathon</h1>
        <a
          className="App-link"
          href="https://github.com/cutterbl/speechtotext"
          target="_blank"
          rel="noopener noreferrer"
        >
          Git
        </a>
      </header>
      <div className="input-box">
        <input
          placeholder="Some Form"
          type="text"
          autocomplete="off"
          value={value1}
        />
        <span>
          <SpeechToText update={setValue1} />
        </span>
      </div>

      <div className="input-box">
        <textarea
          placeholder="Enter some text"
          type="text"
          autocomplete="off"
          value={value2}
        />
        <span>
          <SpeechToText update={setValue2} />
        </span>
      </div>
    </div>
  );
}

export default App;
