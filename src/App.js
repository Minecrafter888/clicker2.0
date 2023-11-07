import React from "react"
import "./App.css"
import Kantoor from "./Components/office/Office"
import Luck from "./Components/GoodLuck"
import Ei from "./Components/EggCounter"
function App() {
   return (
    <div style={{textAlign: "center"}}>
      <div>
        <Kantoor/>
      </div>
    </div>
  );
}
//props, child, component
export default App;
