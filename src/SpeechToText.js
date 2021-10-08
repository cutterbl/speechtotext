import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophoneAlt } from '@fortawesome/free-solid-svg-icons'

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import "./SpeechToText.scss";
import "./components/MicrophoneButton.css";

export default function SpeechToText() {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <div>Browser is not Support Speech Recognition.</div>;
  }

  const toggleRecording = () => {
    if (!isListening) {
      handleListing();
    } else {
      stopHandle();
    }
  };
  const handleListing = () => {
    setIsListening(true);
    microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      continuous: true,
    });
  };
  const stopHandle = () => {
    setIsListening(false);
    microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();
  };
  const handleReset = () => {
    stopHandle();
    resetTranscript();
  };

  return (
    <div className="MicrophoneButton" 
        ref={microphoneRef}
        onClick={toggleRecording}>
      <div id="SpeechButton">
          <div id="PulseRing"></div>
          <div id="StartInput">
              <FontAwesomeIcon icon={faMicrophoneAlt} />
          </div>
      </div>
    </div>
  );
}
