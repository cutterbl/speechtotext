import MicrophoneButton from "./components/MicrophoneButton";
import "./App.scss";
import SpeechToText from "./SpeechToText";

function App() {
  return (
    <div className="App">
      <SpeechToText />
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
        <input placeholder="Some Form" type="text" autocomplete="off" />
        <span>
          <MicrophoneButton />
        </span>    
      </div>

      <div className="input-box">
        <textarea placeholder="Enter some text" type="text" autocomplete="off" />
        <span>
          <MicrophoneButton />
        </span>    
      </div>
    </div>
  );
}

export default App;
