# SpeechToText

This was a quick little proof-of-concept project to play with the new browser [SpeechRecognition API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition). We wanted to provide a way for the user to initiate a speech recognition session and apply the results to a variable.

The team, with limited amount of time, went with a [third party solution](https://github.com/JamesBrill/react-speech-recognition) for the actual interaction with the API. This allowed for quick turnaround for a simple solution, but ultimately has limitations that would prevent multiple controls in a single interface. It does, however, give a good blueprint for a more complete future solution.

## Seeing the examples

To see this in action for yourself:

* Clone [this repository](https://github.com/cutterbl/speechtotext)
* Install dependencies with either `npm install` or `yarn install`
* Run Storybook with either `npm run storybook` or `yarn storybook`

This will open Storybook in your browser, giving you access to the examples and demo code.