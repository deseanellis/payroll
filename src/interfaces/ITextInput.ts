import TextInputType from "../enums/TextInputType";

export default interface ITextInput {
  id?: string | undefined;
  placeholder?: string | undefined;
  onChangeHandler?: Function | undefined;
  type?: TextInputType;
  label: string;
  className: string;
  value: any;
}
