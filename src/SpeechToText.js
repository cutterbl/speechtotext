import React, { useRef, useState } from "react";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import styles from "./SpeechToText.module.scss";

export default function SpeechToText() {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <div>Browser is not Support Speech Recognition.</div>;
  }

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
    <div className={styles.microphoneWrapper}>
      <div className={styles.mircophoneContainer}>
        <div
          className={styles.microphoneIconContainer}
          ref={microphoneRef}
          onClick={handleListing}
        >
          <button>START</button>
        </div>
        <div className={styles.microphoneStatus}>
          {isListening ? "Listening........." : "Click to start Listening"}
        </div>
        {isListening && (
          <button
            className={styles.microphoneStop + " btn"}
            onClick={stopHandle}
          >
            Stop
          </button>
        )}
      </div>
      {transcript && (
        <div className={styles.microphoneResultContainer}>
          <div className={styles.microphoneResultText}>{transcript}</div>
          <button
            className={styles.microphoneReset + " btn"}
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
