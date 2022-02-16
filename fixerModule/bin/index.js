"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fixerModule = /** @class */ (function () {
    function fixerModule() {
    }
    fixerModule.createField = function (props) {
        return {
            section: props.section,
            image: props.img,
            inputs: props.inputs,
        };
    };
    fixerModule.createInput = function (props) {
        return {
            type: "input",
            maxLength: props.maxLength ? props.maxLength : null,
            fieldName: props.fieldName,
            description: props.description ? props.description : null,
            key: props.key,
        };
    };
    fixerModule.createTextArea = function (props) {
        return {
            type: "textArea",
            maxLength: props.maxLength ? props.maxLength : null,
            fieldName: props.fieldName,
            description: props.description ? props.description : null,
            key: props.key,
        };
    };
    fixerModule.createRadioButton = function (props) {
        return {
            type: "radio",
            fieldName: props.fieldName,
            description: props.description ? props.description : null,
            key: props.key,
            output: props.output,
            boxes: props.boxes,
        };
    };
    fixerModule.createCheckBox = function (props) {
        return {
            type: "checkbox",
            fieldName: props.fieldName,
            description: props.description ? props.description : null,
            key: props.key,
            output: props.output,
            boxes: props.boxes,
        };
    };
    return fixerModule;
}());
exports.default = fixerModule;
//# sourceMappingURL=index.js.map