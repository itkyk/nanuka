export interface textInterface {
  maxLength?: number;
  fieldName: string;
  description?: string;
  key: string;
}

interface BoxesInterface {
  default?: boolean;
  value: string;
  key: string;
}

export interface RadioInterface {
  fieldName: string;
  description?: string;
  key: string;
  output: "string" | "boolean";
  boxes: Array<BoxesInterface>;
}

interface CheckBoxInterface {
  default: boolean;
  key: string;
}

export interface CheckInterface {
  fieldName: string;
  description?: string;
  key: string;
  output: "array" | "boolean";
  boxes: Array<CheckBoxInterface>;
}

export interface fieldInterface {
  img: string;
  section: string;
  inputs: Array<textInterface | RadioInterface | CheckInterface>;
}

class fixerModule {
  static createField = (props: fieldInterface) => {
    return {
      section: props.section,
      image: props.img,
      inputs: props.inputs,
    };
  };

  static createInput = (props: textInterface) => {
    return {
      type: "input",
      maxLength: props.maxLength ? props.maxLength : null,
      fieldName: props.fieldName,
      description: props.description ? props.description : null,
      key: props.key,
    };
  };

  static createTextArea = (props: textInterface) => {
    return {
      type: "textArea",
      maxLength: props.maxLength ? props.maxLength : null,
      fieldName: props.fieldName,
      description: props.description ? props.description : null,
      key: props.key,
    };
  };

  static createRadioButton = (props: RadioInterface): object => {
    return {
      type: "radio",
      fieldName: props.fieldName,
      description: props.description ? props.description : null,
      key: props.key,
      output: props.output,
      boxes: props.boxes,
    };
  };

  static createCheckBox = (props: CheckInterface): object => {
    return {
      type: "checkbox",
      fieldName: props.fieldName,
      description: props.description ? props.description : null,
      key: props.key,
      output: props.output,
      boxes: props.boxes,
    };
  };
}

export default fixerModule;
