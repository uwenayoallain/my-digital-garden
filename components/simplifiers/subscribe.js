// const res = await fetch("/api/newsletter/subscribe", {
//   body: JSON.stringify({
//     email: inputEl.current.value,
//   }),
//   headers: {
//     "Content-Type": "application/json",
//   },
//   method: "POST",
// });

import React from "react";
import { Form, FormInput, SubmitButton } from "../simplifiers/Form";

const getFieldError = (value, name) => {
  switch (name) {
    case "name":
      value.length < 5 ? "Full Name must be 5 characters long!" : "";
      break;
    case "email":
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? ""
        : "This is not a valid email address.";
      break;
    default:
      break;
  }
};

export default function SubmitForm() {
  const [wasSubmitted, setWasSubmitted] = React.useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fieldValues = Object.fromEntries(formData.entries());
    const formIsValid = Object.values(fieldValues).every(
      (value) => !getFieldError(value, "name") || !getFieldError(value, "email")
    );
    setWasSubmitted(true);
    if (formIsValid) {
      console.log(`Submitted`, fieldValues);
    }
  }
  return (
    <Form className='w-3/4' noValidation onSubmit={handleSubmit}>
      <FormInput type='text' label='Your Name' wasSubmitted={wasSubmitted} />
      <FormInput type='email' label='Your Email' wasSubmitted={wasSubmitted} />
      <SubmitButton type='submit' content='Submit' />
    </Form>
  );
}
