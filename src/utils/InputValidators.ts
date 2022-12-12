import { ChangeEvent } from "react";
import InputValidatorType from "../enums/InputValidatorType";

const InputValidators = {
  [InputValidatorType.PositiveInteger]: function (
    e: ChangeEvent<HTMLInputElement>
  ): boolean {
    let inputValue = Number(e.target.value);

    //numeric check
    if (isNaN(inputValue)) return false;

    //integer check
    if (!Number.isInteger(inputValue)) return false;

    //positive check
    if (inputValue < 0) return false;

    return true;
  },
  [InputValidatorType.PositiveNumber]: function (
    e: ChangeEvent<HTMLInputElement>
  ): boolean {
    let inputValue = Number(e.target.value);

    //numeric check
    if (isNaN(inputValue)) return false;

    //positive check
    if (inputValue < 0) return false;

    return true;
  },
};

export default InputValidators;
