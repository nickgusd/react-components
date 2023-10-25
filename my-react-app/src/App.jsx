import Accordian from "./components/Accordian/Accordian";
import "./App.css";

function App() {
  return (
    <div className="App">
      {data.map((item) => (
        <Accordian title={item.title} text={item.text} />
      ))}
    </div>
  );
}

export default App;

const data = [
  {
    id: 1,
    title: "Item 1",
    text: "This is the first item in the list.",
  },
  {
    id: 2,
    title: "Item 2",
    text: "Here's the second item with some text.",
  },
  {
    id: 3,
    title: "Item 3",
    text: "The third item has its own description.",
  },
  {
    id: 4,
    title: "Item 4",
    text: "Number four comes with its unique content.",
  },
  {
    id: 5,
    title: "Item 5",
    text: "This is the fifth item, complete with a description.",
  },
];
