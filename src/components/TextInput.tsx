import ITextInput from "../interfaces/ITextInput";

export default function TextInput({
  id,
  label,
  type,
  value,
  className,
  placeholder,
  onChangeHandler,
}: ITextInput) {
  return (
    <div className="form-control">
      <label>{label}</label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        value={value.toString()}
        className={className}
        onChange={(e) => onChangeHandler !== undefined && onChangeHandler(e)}
      />
    </div>
  );
}
