import React from "react";
import Utils from "@/module/Util";

const DefaultCheckBox = ({ section, inputData, handleChange, onInitial }) => {
  const checkBoxRefs = [];

  const changeValue = ({ target }) => {
    if (inputData.output === "array") {
      const labels = [];
      for (const radioRef of checkBoxRefs) {
        if (radioRef.current.checked) {
          labels.push(radioRef.current.value);
        }
      }
      handleChange(target.name, labels);
    } else if (inputData.output === "boolean") {
      const labels = {};
      for (const radioRef of checkBoxRefs) {
        labels[radioRef.current.value] = radioRef.current.checked;
      }
      handleChange(target.name, labels);
    }
  };

  const createCheckBox = () => {
    const dom = [];
    for (let i = 0; i < inputData.boxes.length; i++) {
      checkBoxRefs.push(React.createRef());
      dom.push(
        <div key={`default-radio-${i}`}>
          <input
            ref={checkBoxRefs[i]}
            type="checkbox"
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

  const setInitialProps = () => {
    if (inputData.output === "array") {
      const labels = [];
      let labelName = "";
      for (const radioRef of checkBoxRefs) {
        labelName = radioRef.current.name;
        if (radioRef.current.checked) {
          labels.push(radioRef.current.value);
        }
      }
      onInitial({ [labelName]: labels });
    } else if (inputData.output === "boolean") {
      const labels = {};
      let labelName = "";
      for (const radioRef of checkBoxRefs) {
        labelName = radioRef.current.name;
        labels[radioRef.current.value] = radioRef.current.checked;
      }
      onInitial({ [labelName]: labels });
    }
  };

  React.useEffect(() => {
    setInitialProps();
  }, []);

  return (
    <div>
      <p>{inputData.fieldName}</p>
      <p>{inputData.description}</p>
      <div>{createCheckBox()}</div>
    </div>
  );
};

export default DefaultCheckBox;
