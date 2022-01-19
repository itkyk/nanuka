import React from "react";
import Utils from "@/module/Util";

const DefaultTextArea = ({section,inputData, handleChange}) => {
  const changeText = ({target}) => {
    handleChange(target.name, target.value);
  }
  return (
    <div>
      <p>{inputData.fieldName}</p>
      <p>{inputData.description}</p>
      <div>
        <textarea name={Utils.toCamelCase(`${section}-${inputData.key}`)} onChange={changeText}/>
      </div>
    </div>
  )
}

export default DefaultTextArea;