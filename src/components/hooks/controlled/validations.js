import { mobileNumberRegex } from "./regex";

export const mobileValidation = (value) => {
  const mobileRegex = /^[6-9][0-9]{9}$/;
  let error = "";
  if (!value) {
    error = "please enter mobile number";
  } else if (!mobileNumberRegex.test(value)) {
    error = "Plese enter valid mobile number";
  }

  return error;
};
