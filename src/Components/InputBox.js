import React from "react";
import "./InputBox.css";
export default function InputBox({onInputChange,onButtonSubmit}) {
  return (
    <div>
      <div className="center pa3">
        <div className="form pa4 br3 shadow-5 center">
          <input className="f4 pa2 w-70 center" type="text" placeholder="Enter GitHub ID" onChange={onInputChange} />
          <button className="buttonY w-30 grow f4 link ph3 pv2 dib white bg-dark-red " onClick={onButtonSubmit}>
            Analyze
          </button>
        </div>
      </div>
    </div>
  );
}
//onChange={onInputChange}
//onClick={onButtonSubmit}
