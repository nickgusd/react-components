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
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat leo a orci luctus, non posuere odio tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras euismod turpis at tincidunt vestibulum. Fusce vel bibendum elit. Quisque quis est in libero interdum vestibulum. Proin auctor consectetur augue, vel volutpat metus aliquet in. Curabitur suscipit, dui eget auctor luctus, purus sem laoreet erat, sed vehicula tortor mi nec purus. Sed venenatis dui in bibendum scelerisque. Phasellus in scelerisque tortor. Donec id quam eu elit laoreet condimentum.",
  },
  {
    id: 2,
    title: "Item 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat leo a orci luctus, non posuere odio tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras euismod turpis at tincidunt vestibulum. Fusce vel bibendum elit. Quisque quis est in libero interdum vestibulum. Proin auctor consectetur augue, vel volutpat metus aliquet in. Curabitur suscipit, dui eget auctor luctus, purus sem laoreet erat, sed vehicula tortor mi nec purus. Sed venenatis dui in bibendum scelerisque. Phasellus in scelerisque tortor. Donec id quam eu elit laoreet condimentum.",
  },
  {
    id: 3,
    title: "Item 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat leo a orci luctus, non posuere odio tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras euismod turpis at tincidunt vestibulum. Fusce vel bibendum elit. Quisque quis est in libero interdum vestibulum. Proin auctor consectetur augue, vel volutpat metus aliquet in. Curabitur suscipit, dui eget auctor luctus, purus sem laoreet erat, sed vehicula tortor mi nec purus. Sed venenatis dui in bibendum scelerisque. Phasellus in scelerisque tortor. Donec id quam eu elit laoreet condimentum.",
  },
  {
    id: 4,
    title: "Item 4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat leo a orci luctus, non posuere odio tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras euismod turpis at tincidunt vestibulum. Fusce vel bibendum elit. Quisque quis est in libero interdum vestibulum. Proin auctor consectetur augue, vel volutpat metus aliquet in. Curabitur suscipit, dui eget auctor luctus, purus sem laoreet erat, sed vehicula tortor mi nec purus. Sed venenatis dui in bibendum scelerisque. Phasellus in scelerisque tortor. Donec id quam eu elit laoreet condimentum.",
  },
  {
    id: 5,
    title: "Item 5",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat ",
  },
];
