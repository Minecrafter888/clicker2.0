import React, { useState } from "react";
function Eggs(){
    const [egg, setEgg] = useState(0)
    return(
    <div>
        <h1>Wil je een ei bij de lunch?</h1>
        <button onClick={() => setEgg(egg + 1)}>ja</button>
        <button>nee</button>
        <p>{egg}</p>
    </div>
    );
}
export default Eggs