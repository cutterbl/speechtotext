import React, { useEffect, useState } from "react";
import MicrophoneButton from "./components/MicrophoneButton";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Component({
  as = MicrophoneButton,
  lang = navigator.language,
  update,
  innerRef,
}) {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);

  function startListening() {
    setIsListening(true);
    SpeechRecognition.startListening({
      continuous: true,
      language: lang,
    });
  }

  function stopListening() {
    setIsListening(false);
    SpeechRecognition.stopListening();
  }

  useEffect(() => {
    if (innerRef) {
      innerRef.current = {
        reset: () => {
          stopListening();
          resetTranscript();
        },
      };
    }
  }, [innerRef, resetTranscript]);

  useEffect(() => {
    update((prev) => (transcript !== prev ? transcript : prev));
  }, [transcript, update]);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.warn("Browser is not Support Speech Recognition.");
    return null;
  }

  const Trigger = as;

  const toggleRecording = () => {
    if (!isListening) {
      startListening();
    } else {
      stopListening();
    }
  };

  return <Trigger onClick={toggleRecording} active={isListening} />;
}

const SpeechToText = React.forwardRef((props, ref) => (
  <Component innerRef={ref} {...props} />
));

export default SpeechToText;
