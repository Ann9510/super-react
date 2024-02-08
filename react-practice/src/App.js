import logo from "./logo.svg";
import "./App.css";
import TextComponent from "./components/TextComponent";
import Section from "./components/Section";
import Toast from "./components/Toast";

function App() {
  const messageArray = [
    {
      title: "success",
      text: "Right on! Your account has been updated.",
    },
    {
      title: "success",
      text: "Right on! Your account has been updated.",
    },
    {
      title: "warning",
      text: "Hmmm. Something doesn't look right",
    },
    {
      title: "warning",
      text: "Hmmm. Something doesn't look right",
    },
    {
      title: "error",
      text: "Uh oh! Something went terribly wrong!",
    },
    {
      title: "error",
      text: "Uh oh! Something went terribly wrong!",
    },
  ];

  return (
    <div className="wrapper">
      {messageArray.map((message) => (
        <Toast title={message.title} text={message.text} />
      ))}
    </div>
  );
}

export default App;
