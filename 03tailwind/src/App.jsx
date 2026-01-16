import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);
  let myObj={
    username:"john",
    age:23
  }

  // let arr=[1,2,3,4,5,6,7,8,9]

  return (
    <>
      <h1 className="bg-red-500 text-black p-4 rounded-xl">Text</h1>
      <Card username="john" />
      <Card username="jane" />
    </>
  );
}

export default App;
