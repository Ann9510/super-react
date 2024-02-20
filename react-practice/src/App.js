import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <section onClick={() => console.log("section click")}>
      <div
        onClick={(event) => {
          event.stopPropagation();
          console.log("div click");
        }}
      >
        <button onClick={() => console.log("button click")}>클릭</button>
      </div>
    </section>
  );
}

export default App;
