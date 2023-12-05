import React, { useState } from "react";
function Eggs(){
    const [egg, setEgg] = useState(0)
    const handleYes = () =>{
        setEgg(egg + 1)
    }
    return(
    <div>
        <h1>Wil je een ei bij de lunch?</h1>
        <button onClick={handleYes}>ja</button>
        <button>nee</button>
        <p>{egg}</p>
    </div>
    );
}
export default Eggs