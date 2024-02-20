import logo from "./logo.svg";
import "./App.css";
import Dropdown from "./components/Dropdown";

function App() {
  const options = [
    { label: "빨강", value: "red" },
    { label: "녹색", value: "green" },
    { label: "파랑", value: "blue" },
  ];

  return (
    <Dropdown options={options} />

    // 42강
    // <section onClick={() => console.log("section click")}>
    //   <div
    //     onClick={(event) => {
    //       event.stopPropagation();
    //       console.log("div click");
    //     }}
    //   >
    //     <button onClick={() => console.log("button click")}>클릭</button>
    //   </div>
    // </section>
  );
}

export default App;
