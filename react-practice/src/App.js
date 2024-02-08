import "./App.css";
import Toast, { hello, world } from "./components/Toast";
import ToastButton from "./components/ToastButton";
import ToastMessage from "./components/ToastMessage";

function App() {
  const messageArray = [
    {
      title: "success",
      text: "Right on! Your account has been updated.",
    },
    {
      title: "warning",
      text: "Hmmm. Something doesn't look right",
    },
    {
      title: "error",
      text: "Uh oh! Something went terribly wrong!",
    },
  ];

  return (
    <div className="wrapper">
      <Toast message={messageArray[0]}>
        <ToastMessage message={messageArray[0]} />
        <ToastButton />
      </Toast>
      <Toast message={messageArray[1]}>
        <ToastMessage message={messageArray[1]} />
        <ToastButton />
      </Toast>
      <Toast message={messageArray[2]}>
        <ToastMessage message={messageArray[2]} />
        <ToastButton />
      </Toast>
      {hello}
      {world}
    </div>
  );
}

export default App;
