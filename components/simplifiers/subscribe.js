import React from "react";
import axios from "axios";
import { Form, FormInput, SubmitButton } from "../simplifiers/Form";
export default function SubmitForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fieldValues = Object.fromEntries(formData.entries());
    const formIsValid = Object.entries(fieldValues).every(
      ([key, value]) => !getFieldError(value, key)
    );
    setSubmitted(true);
    if (formIsValid) {
      try {
        const res = await axios.post("/api/newsletter/subscribe", {
          email: fieldValues.email,
          name: fieldValues.text === "" ? null : fieldValues.text,
        });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
      // event.target.reset();
    }
  };
  return (
    <Form
      className='w-full p-8 font-medium leading-10 capitalize rounded rounded-t-full dark:rounded-t-[5rem] dark:rounded-bl-[48px] bg-skin-inverted'
      noValidate
      onSubmit={handleSubmit}>
      <div className='p-4 bg-white rounded-lg shadow-2xl dark:bg-gray-900'>
        <FormInput type='text' label='Your Name' submitted={submitted} />
        <FormInput type='email' label='Your Email' submitted={submitted} />
        <SubmitButton type='submit' content='Submit' />
      </div>
    </Form>
  );
}

function getFieldError(value, type) {
  if (type != "text") {
    if (!value) return `${type} is required!`;
    const valueIsLongEnough = value.length >= 8;
    const valueIsShortEnough = value.length <= 80;
    if (!valueIsLongEnough) {
      return "value must be at least 8 characters long";
    } else if (!valueIsShortEnough) {
      return "value must be no longer than 80 characters";
    }
  } else {
    if (value) {
      const optionalNotice = "This input is optional but it needs to be";
      const valueIsLongEnough = value.length >= 6;
      const valueIsShortEnough = value.length <= 70;
      if (!valueIsLongEnough) {
        return `${optionalNotice} at least 6 characters long.`;
      } else if (!valueIsShortEnough) {
        return `${optionalNotice} at most 70 characters long`;
      }
    }
  }
  return null;
}
