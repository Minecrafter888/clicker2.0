import "./App.css"
import Kantoor from "./Components/Office"
import Ei from "./Components/EggCounter"
import Luck from "./Components/GoodLuck"
function App() {
  console.log("hello")
   return (
    <div style={{textAlign: "center"}}>
      <Kantoor />
      <Ei />
      <Luck />
    </div>
  );
}
//props, child, component
export default App;
