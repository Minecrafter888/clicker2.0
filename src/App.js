import React, { useState } from "react"
import "./App.css"
import Kantoor from "./Components/Office"
import Luck from "./Components/GoodLuck"
import Ei from "./Components/EggCounter"
function App() {
  console.log("hello")
  const [opKantoor, setOpKantoor] = useState("")
  const gatherData = (Data) =>{
    setOpKantoor(Data)
  }
   return (
    <div style={{textAlign: "center"}}>
      <Kantoor gatherData={gatherData}/>
      <div>{opKantoor}</div>
    </div>
  );
}
//props, child, component
export default App;
