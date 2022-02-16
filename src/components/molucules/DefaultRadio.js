import React from "react";
import Utils from "@/module/Util";

const DefaultRadio = ({ section, inputData, handleChange, onInitial }) => {
  const radioRefs = [];

  const changeValue = ({ target }) => {
    if (inputData.output === "string") {
      console.log(target);
      handleChange(target.name, target.value);
    } else if (inputData.output === "boolean") {
      const labels = {};
      for (const radioRef of radioRefs) {
        labels[radioRef.current.value] = radioRef.current.checked;
      }
      handleChange(target.name, labels);
    }
  };

  const initialSetData = () => {
    if (inputData.output === "string") {
      for (const radioRef of radioRefs) {
        if (radioRef.current.checked) {
          onInitial({ [radioRef.current.name]: radioRef.current.value });
        }
      }
    } else if (inputData.output === "boolean") {
      const labels = {};
      let name = "";
      for (const radioRef of radioRefs) {
        labels[radioRef.current.value] = radioRef.current.checked;
        name = radioRef.current.name;
      }
      onInitial({ [name]: labels });
    }
  };

  const createRadios = () => {
    const dom = [];
    for (let i = 0; i < inputData.boxes.length; i++) {
      radioRefs.push(React.createRef());
      dom.push(
        <div key={`default-radio-${i}`}>
          <input
            ref={radioRefs[i]}
            type="radio"
            id={`${inputData.key}-${i}`}
            name={Utils.toCamelCase(`${section}-${inputData.key}`)}
            value={inputData.boxes[i].key}
            onChange={changeValue}
            defaultChecked={inputData.boxes[i].default ? true : false}
          />
          <label htmlFor={`${inputData.key}-${i}`}>
            {inputData.boxes[i].value}
          </label>
        </div>
      );
    }
    return dom;
  };

  React.useEffect(() => {
    initialSetData();
  }, []);

  return (
    <div>
      <p>{inputData.fieldName}</p>
      <p>{inputData.description}</p>
      <div>{createRadios()}</div>
    </div>
  );
};

export default DefaultRadio;
