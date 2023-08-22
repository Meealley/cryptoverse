const validateEmail = ({ email, setEmailError }) => {
  const emailRegular =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email && !email.match(emailRegular)
    ? setEmailError("Email is not valid")
    : setEmailError("");
};
const validatePhone = ({ phone, setPhoneError }) => {
  const phoneRegular = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return phone && !phone.match(phoneRegular)
    ? setPhoneError("Phone is not valid")
    : setPhoneError("");
};
const validateFirstName = ({ firstName, setFirstNameError }) => {
  return firstName && firstName.length < 2
    ? setFirstNameError("First name is too short")
    : firstName && firstName.length > 20
    ? setFirstNameError("Try to make short and meaningful")
    : setFirstNameError("");
};
const validateLastName = ({ lastName, setLastNameError }) => {
  return lastName && lastName.length < 2
    ? setLastNameError("Last name is too short")
    : lastName && lastName.length > 20
    ? setLastNameError("Try to make short and meaningful")
    : setLastNameError("");
};
const validateMessage = ({ message, setMessageError }) => {
  return message && message.length < 5
    ? setMessageError("Message is too short")
    : message && message.length > 200
    ? setMessageError("Try to make short and meaningful")
    : setMessageError("");
};

export {
  validateEmail,
  validatePhone,
  validateFirstName,
  validateLastName,
  validateMessage,
};
