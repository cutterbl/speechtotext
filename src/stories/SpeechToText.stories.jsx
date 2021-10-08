import React, { useState, useRef } from "react";

import SpeechToText from "../SpeechToText";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/SpeechToText",
  component: SpeechToText,
};

export const TextField = () => {
  const [result, setResult] = useState("");
  const sttRef = useRef();

  const onReset = () => sttRef?.current?.reset?.();

  return (
    <div style={{ width: 450, display: "flex", flexDirection: "row", gap: 5 }}>
      <input
        type="text"
        value={result}
        style={{ flexGrow: 1 }}
        onChange={({ target: { value: newValue } }) => setResult(newValue)}
      />
      <SpeechToText update={setResult} ref={sttRef} />
      <button type="button" onClick={onReset}>
        Reset
      </button>
    </div>
  );
};
TextField.storyName = "simple field output";

export const TextArea = () => {
  const [result, setResult] = useState("");
  const sttRef = useRef();

  const onReset = () => sttRef?.current?.reset?.();

  return (
    <div style={{ width: 450, display: "flex", flexDirection: "row", gap: 5 }}>
      <textarea
        value={result}
        onChange={({ target: { value: newValue } }) => setResult(newValue)}
        style={{ flexGrow: 1, height: 250 }}
      ></textarea>
      <div style={{ textAlign: "center" }}>
        <SpeechToText update={setResult} ref={sttRef} />
        <br />
        <button type="button" onClick={onReset} style={{ marginTop: 5 }}>
          Reset
        </button>
      </div>
    </div>
  );
};
TextArea.storyName = "simple textarea output";

function LangButton({ active, ...props }) {
  return (
    <button {...props}>{active ? "хватит говорить" : "начать говорить"}</button>
  );
}

export const Language = () => {
  const [result, setResult] = useState("");
  const sttRef = useRef();

  const onReset = () => sttRef?.current?.reset?.();

  return (
    <div style={{ width: 450, display: "flex", flexDirection: "row", gap: 5 }}>
      <div style={{ flexGrow: 1 }}>{result}</div>
      <div style={{ textAlign: "center" }}>
        <SpeechToText
          lang="ru"
          update={setResult}
          ref={sttRef}
          as={LangButton}
        />
        <br />
        <button type="button" onClick={onReset} style={{ marginTop: 5 }}>
          Сброс настроек
        </button>
      </div>
    </div>
  );
};
Language.storyName = "other languages";

/**
 * Different Provider
 */
