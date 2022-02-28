const Fixer = require("../../../fixerModule/bin/index").default;

module.exports = [
  Fixer.createField({
    section: "kv",
    img: "https://picsum.photos/960/540",
    inputs: [
      Fixer.createInput({
        maxLength: 100,
        fieldName: "title",
        description: "Input のモジュールです。",
        key: "title",
      }),
      Fixer.createTextArea({
        fieldName: "lead",
        description: "TextArea のモジュールです。",
        key: "description",
      }),
      Fixer.createRadioButton({
        fieldName: "radioButtonBoolean",
        description: "Radioボタンのモジュールです。(Boolean)",
        key: "radio-boolean",
        output: "boolean",
        boxes: [
          { default: false, value: "ある", key: "exist" },
          { default: true, value: "ない", key: "none" },
        ],
      }),
      Fixer.createRadioButton({
        fieldName: "radioButtonString",
        description: "Radioボタンのモジュールです。(String)",
        key: "radio-string",
        output: "string",
        boxes: [
          { default: false, value: "ある", key: "exist" },
          { default: true, value: "ない", key: "none" },
        ],
      }),
      Fixer.createCheckBox({
        fieldName: "checkBox",
        description: "CheckBoxTest",
        output: "array",
        key: "checkbox",
        boxes: [
          { default: true, value: "子", key: "mouse" },
          { value: "牛", key: "cow" },
        ],
      }),
    ],
  }),
];
