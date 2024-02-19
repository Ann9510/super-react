import React, { useState } from "react";
import "./Toast.css";
import ToastMessage from "./ToastMessage";

const Toast = ({ message }) => {
  // const [text, setText] = useState("sample");
  // useState를 위한 예제(text)

  console.log("toast component is executed");
  // 부모 컴포넌트 useState하면 자식 컴포넌트들이 리렌더링 되는 예제

  const buttonClickHandler = (title) => {
    // setText("changed!");
    // useState를 위한 예제(text)
    console.log(title);
  };

  return (
    <div className={`toast toast-${message.title}`}>
      <ToastMessage message={message} />
      {/* <p>{text}</p> */}
      {/* useState를 위한 예제(text) */}
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
