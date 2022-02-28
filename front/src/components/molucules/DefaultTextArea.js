import React from "react";
import Utils from "@/module/Util";

const DefaultTextArea = ({ section, inputData, handleChange, onInitial }) => {
  const textAreaRef = React.useRef();

  const changeText = ({ target }) => {
    handleChange(target.name, target.value);
  };

  const setInitialValue = () => {
    onInitial({
      [textAreaRef.current.name]: textAreaRef.current.value
        ? textAreaRef.current.value
        : "",
    });
  };

  React.useEffect(() => {
    setInitialValue();
  }, []);

  return (
    <div>
      <p>{inputData.fieldName}</p>
      <p>{inputData.description}</p>
      <div>
        <textarea
          name={Utils.toCamelCase(`${section}-${inputData.key}`)}
          onChange={changeText}
          ref={textAreaRef}
        />
      </div>
    </div>
  );
};

export default DefaultTextArea;
