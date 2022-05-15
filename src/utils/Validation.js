const Validation = (values, checked) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i;
  // const regexPhone = /^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/;

  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (!regexPassword.test(values.password)) {
    errors.password =
      "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number";
  } else if (values.password.length < 8) {
    errors.password =
      "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number";
  } else if (values.password.length > 18) {
    errors.password =
      "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Password didn't match";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Password didn't match";
  } else if (values.confirmPassword.length < 4) {
    errors.confirmPassword = "Password didn't match";
  } else if (values.confirmPassword.length > 10) {
    errors.confirmPassword = "Password didn't match";
  }
  if (!values.fullName) {
    errors.fullName = "Fullname is required!";
  } else if (values.fullName.length < 15) {
    errors.fullName = "Full Name must be more than 15 characters";
  }
  if (!values.phone) {
    errors.phone = "Phone number is required!";
  } else if (values.phone.length < 10) {
    errors.phone = "Phone must be more than 10 characters";
  }
  if (checked === false) {
    errors.checked = "Please accept the terms and conditions";
  }
  return errors;
};

export default Validation;
