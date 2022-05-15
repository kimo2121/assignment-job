import { useState, useEffect } from "react";
import React from "react";
import "./styles.scss";
import Validation from "../../utils/Validation";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    phone: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [checked, setChecked] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const checkHandler = () => {
    setChecked(!checked);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(Validation(formValues, checked));
    setIsSubmit(checked === true ? true : false);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      navigate("/barchart");
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && checked === true && isSubmit) {
    }
  }, [formErrors]);

  return (
    <form onSubmit={handleSubmit} className="Form__component">
      <div>
        <label htmlFor="">Your email address</label>
        <input
          type="text"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
      </div>
      <span>{formErrors.email}</span>
      <div>
        <label htmlFor="">Your password</label>
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          onPaste={(e) => {
            e.preventDefault();
            return false;
          }}
          onCopy={(e) => {
            e.preventDefault();
            return false;
          }}
          maxLength="18"
        />
      </div>
      <span>{formErrors.password}</span>
      <div>
        <label htmlFor="">Confirm your password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formValues.confirmPassword}
          onChange={handleChange}
          onPaste={(e) => {
            e.preventDefault();
            return false;
          }}
          onCopy={(e) => {
            e.preventDefault();
            return false;
          }}
          maxLength="18"
        />
      </div>
      <span>{formErrors.confirmPassword}</span>
      <div>
        <label htmlFor="">Your full name</label>
        <input
          type="text"
          name="fullName"
          value={formValues.fullName}
          onChange={handleChange}
        />
      </div>
      <span>{formErrors.fullName}</span>
      <div className="Form__phoneNumber">
        <label htmlFor="">Your phone number</label>
        <input
          pattern="^\d{10}$"
          type="number"
          maxLength="10"
          name="phone"
          value={formValues.phone}
          onChange={handleChange}
        />
      </div>
      <span>{formErrors.phone}</span>
      <div className="Form__radioBtn">
        <input onChange={checkHandler} checked={checked} type="checkbox" />
        <label htmlFor="">I read and agree Terms and Conditions</label>
      </div>
      <span>{formErrors.checked}</span>
      <button className="create">Create account</button>
    </form>
  );
};
export default Form;
