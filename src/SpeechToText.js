import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneAlt } from "@fortawesome/free-solid-svg-icons";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import "./SpeechToText.scss";
import "./components/MicrophoneButton.css";

export default function SpeechToText({ lang = navigator.language, update }) {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);

  useEffect(() => {
    update(transcript);
  }, [transcript, update]);

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
      language: lang,
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
    <div
      className="MicrophoneButton"
      ref={microphoneRef}
      onClick={toggleRecording}
    >
      <div id="SpeechButton">
        <div id="PulseRing"></div>
        <div id="StartInput">
          <FontAwesomeIcon icon={faMicrophoneAlt} />
        </div>
      </div>
    </div>
  );
}
