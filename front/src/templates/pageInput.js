import React from "react";

// Components
import DefaultTextArea from "@/components/molucules/DefaultTextArea";
import DefaultInput from "@/components/molucules/DefaultInput";
import DefaultRadio from "@/components/molucules/DefaultRadio";
import DefaultCheckBox from "@/components/molucules/DefaultCheckBox";

const PageInput = ({ pageContext }) => {
  // Initialize
  const { dataFilePath } = pageContext;
  const pageData = require(`@/createPages/${dataFilePath}`);
  const [formDatum, setFormDatum] = React.useState({});

  const formRef = React.useRef();
  const initialDatum = [];

  // Logics

  const onGetFormData = (e) => {
    e.preventDefault();
    console.log(formDatum);
  };

  const onChange = (key, value) => {
    const stringFormDatum = JSON.stringify(formDatum);
    const _formDatum = JSON.parse(stringFormDatum);
    _formDatum[key] = value;
    setFormDatum(_formDatum);
  };

  const getInitialData = (data) => {
    initialDatum.push(data);
  };

  const setFormData = () => {
    let transformData = {};
    for (const data of initialDatum) {
      transformData = Object.assign(transformData, data);
    }
    console.log(transformData);
    setFormDatum(transformData);
  };

  React.useEffect(() => {
    setFormData();
  }, []);

  return (
    <div>
      <form action="" ref={formRef}>
        {createFields()}
        <button
          type={"submit"}
          onClick={(e) => {
            onGetFormData(e);
          }}
        >
          保存
        </button>
      </form>
    </div>
  );
};

export default PageInput;
