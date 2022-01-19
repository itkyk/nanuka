import React from "react";
import Utils from "@/module/Util";

const DefaultRadio = ({section,inputData, handleChange}) => {
  const radioRefs = [];

  const changeValue = ({target}) => {
    if (inputData.output === "string") {
      handleChange(target.name, target.value);
    } else if (inputData.output === "boolean") {
      const labels = {};
      for (const radioRef of radioRefs) {
        labels[radioRef.current.value]= radioRef.current.checked;
      }
      handleChange(target.name, labels);
    }
  }

  const createRadios = () => {
    const dom = [];
    for (let i = 0; i < inputData.boxes.length; i++) {
      radioRefs.push(React.createRef());
      dom.push(<div key={`default-radio-${i}`}><input ref={radioRefs[i]} type="radio" id={`${inputData.key}-${i}`} name={Utils.toCamelCase(`${section}-${inputData.key}`)} value={inputData.boxes[i].key} onChange={changeValue}/><label htmlFor={`${inputData.key}-${i}`}>{inputData.boxes[i].value}</label></div>)
    }
    return dom
  }
  return (
    <div>
      <p>{inputData.fieldName}</p>
      <p>{inputData.description}</p>
      <div>
        {createRadios()}
      </div>
    </div>
  )
}

export default DefaultRadio;