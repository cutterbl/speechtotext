# SpeechToText

This was a quick little proof-of-concept project to play with the new browser [SpeechRecognition API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition). We wanted to provide a way for the user to initiate a speech recognition session and apply the results to a variable.

The team, with limited amount of time, went with a [third party solution](https://github.com/JamesBrill/react-speech-recognition) for the actual interaction with the API. This allowed for quick turnaround for a simple solution, but **ultimately has limitations that would prevent multiple controls in a single interface**. It does, however, give a good blueprint for a more complete future solution.

## Seeing The Examples

To see this in action for yourself:

* Clone [this repository](https://github.com/cutterbl/speechtotext)
* Install dependencies with either `npm install` or `yarn install`
* Run Storybook with either `npm run storybook` or `yarn storybook`

This will open Storybook in your browser, giving you access to the examples and demo code.

## Key Features

* Gives a default `button` for starting/stopping a SpeechRecognition session
* Takes an `update` method, for applying the results to a variable in a parent context.
* If given a `ref`, supplies access to a `reset()` method for clearing the current session result.
* Allows, via prop, for changing the `lang`uage that is being recognized, which is defaulted to the browser's language

## Implementation

```js
const [value, setValue] = useState('');
const controlRef = useRef();

const onUpdate = (newValue) => setValue((prev) => (newValue !== prev ? newValue : prev));
const onChange = ({ target: { value: newValue } }) => onUpdate(newValue);
const onReset = () => sttRef?.current?.reset?.();

return (
  <div>
    <textarea
        value={result}
        onChange={onChange}
      ></textarea>
    <SpeechToText update={onUpdate} ref={controlRef} />
    <button onClick={onReset}>Reset</button>
  </div>
);
```

## Overriding The Start/Stop Button

You may want to use some other element as your `onClick` target, for starting and stopping the SpeechRecognition session. You can override the default element by providing your own custom element with the `as` prop.

```js
function LangButton({ active, ...props }) {
  return (
    <button {...props}>{active ? "хватит говорить" : "начать говорить"}</button>
  );
}
// ...
<SpeechToText
  lang="ru"
  update={setValue}
  ref={controlRef}
  as={LangButton}
/>
```