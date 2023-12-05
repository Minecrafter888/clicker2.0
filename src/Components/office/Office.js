import React, { useState } from "react";
import OfficeChild from "./OfficeChild"
import EggCounter from "../EggCounter"
import GoodLuck from "../GoodLuck"
export default function Office(){
    const [opKantoor, setOpKantoor] = useState("")
    const gatherData = (Data) =>{
        setOpKantoor(Data)
      }
    return(
    <div style={{textAlign: "center"}}>
        <div>
        <h1>Ben je vandaag op kantoor?</h1>
        <OfficeChild onOfficeChild={gatherData}/>
        </div>
        {opKantoor === "ja" ? (
        <EggCounter />
      ) : opKantoor === "nee" ? (
        <GoodLuck />
      ) : null}
    </div>
    );
}

