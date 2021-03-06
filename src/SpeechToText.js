import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
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
    update(transcript);
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

SpeechToText.propTypes = {
  as: PropTypes.func,
  lang: PropTypes.string,
  update: PropTypes.func.isRequired,
};

export default SpeechToText;
