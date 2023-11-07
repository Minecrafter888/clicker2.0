import React, { useState } from "react";
function Office(){
    const [opKantoor, setOpKantoor] = useState("")
    return(
    <div style={{textAlign: "center"}}>
        <h1>Ben je vandaag op kantoor?</h1>
        <button onClick={() => setOpKantoor("ja")}>ja</button> 
        <button onClick={() => setOpKantoor("nee")}>nee</button>
    </div>
    );
}
export default Office
