import React from "react";
import BackButton from "./BackButton";

const ContactForm = ({
  details,
  formChangeHandler,
  formSubmitHandler,
  mode = "add",
}) => {
  const buttonText = mode === "edit" ? "Edit Contact" : "Add Contact";

  return (
    <div className="container">
      <BackButton />
      <h1>{buttonText}</h1>
      <form className="contact-form" onSubmit={formSubmitHandler}>
        <div className="input-container">
          <label htmlFor="contactName">Contact Name*</label>
          <input
            type="text"
            name="name"
            className="contact-name"
            placeholder="Name"
            id="contactName"
            required
            value={details.name || ""}
            onChange={formChangeHandler}
          />
        </div>
        <div className="input-container">
          {" "}
          <label htmlFor="gender">Gender*</label>
          <select
            id="gender"
            required
            name="gender"
            value={details.gender || ""}
            onChange={formChangeHandler}
          >
            <option value="" disabled>
              --Please choose an option--
            </option>
            <option
              value="Male"
              name="male"
              defaultValue={
                mode === "edit" && details.gender === "Male" ? true : false
              }
            >
              Male
            </option>
            <option
              value="Female"
              name="female"
              defaultValue={
                mode === "edit" && details.gender === "Female" ? true : false
              }
            >
              Female
            </option>
            <option
              value="Other"
              name="other"
              defaultValue={
                mode === "edit" && details.gender === "Other" ? true : false
              }
            >
              Other
            </option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="contactNumber1">Contact Primary Number*</label>
          <input
            type="tel"
            name="number1"
            className="contact-number1"
            placeholder="Contact Primary Number"
            id="contactNumber1"
            maxLength={12}
            required
            value={details.number1 || ""}
            onChange={formChangeHandler}
          />
        </div>
        <div className="input-container">
          <label htmlFor="contactNumber2">Contact Secondary Number</label>
          <input
            type="tel"
            name="number2"
            className="contact-number2"
            placeholder="Contact Secondary Number"
            id="contactNumber2"
            maxLength={12}
            value={details.number2 || ""}
            onChange={formChangeHandler}
          />
        </div>
        <div className="input-container">
          <label htmlFor="contactEmail">Contact Email</label>
          <input
            type="email"
            name="email"
            className="contact-email"
            placeholder="Contact Email"
            id="contactEmail"
            value={details.email || ""}
            onChange={formChangeHandler}
          />
        </div>
        <div className="input-container">
          <label htmlFor="contactCity">Contact City</label>
          <input
            type="text"
            name="city"
            className="contact-city"
            placeholder="Contact City"
            id="contactCity"
            value={details.city || ""}
            onChange={formChangeHandler}
          />
        </div>
        <div className="input-container">
          <label htmlFor="contactOrg">Contact Organization</label>
          <input
            type="text"
            name="org"
            className="contact-org"
            placeholder="Contact Org."
            id="contactOrg"
            value={details.org || ""}
            onChange={formChangeHandler}
          />
        </div>
        <button type="submit" className="submit-btn">
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
