import React, { useState } from "react";

import SpeechToText from "../SpeechToText";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/SpeechToText",
  component: SpeechToText,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SpeechToText {...args} />;

//export const Simple = Template.bind({});

export const TextField = (args) => {
  const [result, setResult] = useState("");
  return (
    <div style={{ width: 450 }}>
      <input
        type="text"
        style={{ width: "100%" }}
        value={result}
        onChange={({ target: { value: newValue } }) => setResult(newValue)}
      />
      <SpeechToText {...args} update={setResult} />
    </div>
  );
};
TextField.storyName = "simple field output";
TextField.argTypes = {
  lang: {
    component: "select",
    options: ["en-us", "ru", "es"],
    defaultValue: "en-us",
  },
};

export const TextArea = (args) => {
  const [result, setResult] = useState("");
  return (
    <div style={{ width: 450 }}>
      <textarea
        value={result}
        onChange={({ target: { value: newValue } }) => setResult(newValue)}
        style={{ width: "100%", height: 250 }}
      ></textarea>
      <SpeechToText {...args} update={setResult} />
    </div>
  );
};
TextArea.storyName = "simple textarea output";
TextArea.argTypes = {
  lang: {
    component: "select",
    options: ["en-us", "ru", "es"],
    defaultValue: "en-us",
  },
};

export const Div = (args) => {
  const [result, setResult] = useState("");
  return (
    <div style={{ width: 450 }}>
      <div>{result}</div>

      <SpeechToText {...args} update={setResult} />
    </div>
  );
};
Div.storyName = "simple div output";
Div.argTypes = {
  lang: {
    component: "select",
    options: ["en-us", "ru", "es"],
    defaultValue: "en-us",
  },
};

/**
 * Different Provider
 */
