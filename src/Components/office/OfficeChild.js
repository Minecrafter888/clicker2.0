import React from "react";
function OfficeChild(props){
    const Yes = () => {
        const ja = "ja"
        console.log("ja")
        props.onOfficeChild(ja);
      };
      const No = () => {
        const nee = "nee"
        console.log("nee")
        props.onOfficeChild(nee);
      };
    return(
        <div>
            <button onClick={Yes}>ja</button>
            <button onClick={No}>nee</button>
        </div>
    );
}
export default OfficeChild;
