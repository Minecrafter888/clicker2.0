import React, { useState } from "react";
import OfficeChild from "./OfficeChild"
export default function Office(){
    const [opKantoor, setOpKantoor] = useState("")
    const gatherData = (Data) =>{
        setOpKantoor(Data)
      }
    return(
    <div style={{textAlign: "center"}}>
        {opKantoor}
        <div>
        <h1>Ben je vandaag op kantoor?</h1>
        
        <OfficeChild gatherData={gatherData}/>
        </div>
    </div>
    );
}

