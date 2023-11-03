import Accordian from "./components/Accordian/Accordian";
import ToggleButton from "./components/ToggleButton/ToggleButton";
import ToggleGroup from "./components/ToggleGroup/ToggleGroup";
import Modal from "./components/Modal/Modal";
import { FiAlignCenter } from "react-icons/fi";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Modal
        title="This is the Title"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum erat quis magna suscipit, nec rhoncus nunc feugiat. In hac habitasse platea dictumst. Sed venenatis tellus in diam volutpat, id vehicula mauris cursus. Aenean eleifend bibendum lacus, sit amet varius justo gravida ac. Curabitur non turpis eu nunc vehicula accumsan. Nullam in justo sed ligula lacinia ultricies. Sed eleifend in libero nec ultricies. Proin tincidunt, quam nec hendrerit vehicula, ipsum augue pharetra orci, a posuere metus tortor nec tortor. Sed tristique dolor at sapien ullamcorper, id lacinia eros cursus. Etiam at dapibus mauris. Vivamus ut bibendum elit. Sed vitae ex eu sapien euismod auctor. Phasellus a consectetur odio."
        footer={
          <>
            <p>Footer</p>
          </>
        }
      />
      {/* <ToggleGroup options={icons} />
      {data.map((item) => (
        <Accordian title={item.title} text={item.text} />
      ))} */}
    </div>
  );
}

export default App;

const icons = [
  {
    item: "icon1",
    icon: <FiAlignCenter />,
  },
  {
    item: "icon2",
    icon: <FiAlignCenter />,
  },
  {
    item: "icon3",
    icon: <FiAlignCenter />,
  },
  {
    item: "icon4",
    icon: <FiAlignCenter />,
  },
];

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
