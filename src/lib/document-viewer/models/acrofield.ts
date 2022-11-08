export type Annotation = Record<string, any>;

export enum AcrofieldType {
  TextInput,
  TextArea,
  Select,
  Checkbox,
  Radio,
  Date,
  List,
  Unknown
}

export interface Acrofield {
  annotation: Annotation;
  fieldName: string;
  fieldType: AcrofieldType;
  fieldValue: any;
  defaultValue?: string;
  allowedValues?: string[];
}
