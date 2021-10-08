import React from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./MicrophoneButton.module.scss";

export default function MicrophoneButton({
  className,
  active = false,
  ...props
}) {
  return (
    <button
      className={classnames(styles.SpeechButton, { [styles.active]: active })}
      {...props}
    >
      <div className={styles.PulseRing}></div>
      <i className={styles.StartInput}>
        <FontAwesomeIcon icon={faMicrophoneAlt} />
      </i>
    </button>
  );
}
