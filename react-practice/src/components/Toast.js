import React from "react";
import "./Toast.css";
import ToastMessage from "./ToastMessage";

const Toast = ({ message }) => {
  let text = "sample";
  const buttonClickHandler = (title) => {
    text = "changed!";
    console.log(title);
  };

  return (
    <div className={`toast toast-${message.title}`}>
      <ToastMessage message={message} />
      <p>{text}</p>
      <button
        className="toast__button"
        onClick={() => buttonClickHandler(message.title)}
      >
        Dismiss
      </button>
    </div>
  );
};

export default Toast;
