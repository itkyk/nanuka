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
declare class fixerModule {
    static createField: (props: fieldInterface) => {
        section: string;
        image: string;
        inputs: (textInterface | RadioInterface | CheckInterface)[];
    };
    static createInput: (props: textInterface) => {
        type: string;
        maxLength: number | null;
        fieldName: string;
        description: string | null;
        key: string;
    };
    static createTextArea: (props: textInterface) => {
        type: string;
        maxLength: number | null;
        fieldName: string;
        description: string | null;
        key: string;
    };
    static createRadioButton: (props: RadioInterface) => object;
    static createCheckBox: (props: CheckInterface) => object;
}
export default fixerModule;
//# sourceMappingURL=index.d.ts.map