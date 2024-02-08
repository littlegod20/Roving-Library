export function emailValidation(email) {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email || regex.test(email) === false) {
    return { isValid: false, msg: "Email address is invalid" };
  }
  return { isValid: true, msg: null };
}

export function nameValidation(name) {
  const regex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
  if (!name || regex.test(name) === false) {
    return { isValid: false, msg: "Invalid Name" };
  }
  return { isValid: true, msg: null };
}

export function passwordValidation(password) {
  const regex =
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]{8,}$/;
  if (!password || !regex.test(password)) {
    return {
      isValid: false,
      msg: "Password must be at least 8 characters long and contain at least one letter and one digit.",
    };
  }
  return { isValid: true, msg: null };
}
