import { useState } from "react";
import "./App.css";
import Toast from "./components/Toast";

function App() {
  const messageArray = [
    {
      title: "success",
      text: "Right On! Your account has been updated.",
    },
    {
      title: "warning",
      text: "Hmmm. Something doesn't look right.",
    },
    {
      title: "error",
      text: "Un oh! Something went terribly wrong!",
    },
  ];

  const [title, setTitle] = useState("hello");
  // 부모 컴포넌트 useState하면 자식 컴포넌트들이 리렌더링 되는 예제

  return (
    <div className="wrapper">
      <p>{title}</p>
      {/* useState를 위한 예제(text) */}

      <button onClick={() => setTitle("changed!")}>클릭하기</button>
      {/* 부모 컴포넌트 useState하면 자식 컴포넌트들이 리렌더링 되는 예제 */}

      {messageArray.map((message) => (
        <Toast message={message} />
      ))}
    </div>
  );
}

export default App;
