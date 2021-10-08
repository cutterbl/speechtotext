import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophoneAlt } from '@fortawesome/free-solid-svg-icons'
import "./MicrophoneButton.css";

export default function MicrophoneButton(props) {
    return (
        <div className="MicrophoneButton">
            <div id="SpeechButton">
                <div id="PulseRing"></div>
                <div id="StartInput">
                    <FontAwesomeIcon icon={faMicrophoneAlt} />
                </div>
            </div>
        </div>
      );
}