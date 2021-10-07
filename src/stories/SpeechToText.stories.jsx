import React from "react";

import SpeechToText from "../SpeechToText";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/SpeechToText",
  component: SpeechToText,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SpeechToText {...args} />;

export const Simple = Template.bind({});
