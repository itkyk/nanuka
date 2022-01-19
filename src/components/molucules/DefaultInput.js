import React from "react";
import Utils from "@/module/Util";

const DefaultInput = ({section, inputData, handleChange}) => {
  const changeValue = ({target}) => {
    handleChange(target.name, target.value);
  }
  return (
    <div>
      <p>{inputData.fieldName}</p>
      <p>{inputData.description}</p>
      <div>
        <input type="text" name={Utils.toCamelCase(`${section}-${inputData.key}`)} onChange={changeValue}/>
      </div>
    </div>
  )
}
export default DefaultInput;