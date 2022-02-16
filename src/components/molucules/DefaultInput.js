import React from "react";
import Utils from "@/module/Util";

const DefaultInput = ({ section, inputData, handleChange, onInitial }) => {
  const inputRef = React.useRef();

  const changeValue = ({ target }) => {
    handleChange(target.name, target.value);
  };

  const handleInitial = () => {
    onInitial({
      [inputRef.current.name]: inputRef.current.value
        ? inputRef.current.value
        : "",
    });
  };

  React.useEffect(() => {
    handleInitial();
  }, []);

  return (
    <div>
      <p>{inputData.fieldName}</p>
      <p>{inputData.description}</p>
      <div>
        <input
          type="text"
          name={Utils.toCamelCase(`${section}-${inputData.key}`)}
          onChange={changeValue}
          ref={inputRef}
        />
      </div>
    </div>
  );
};
export default DefaultInput;
