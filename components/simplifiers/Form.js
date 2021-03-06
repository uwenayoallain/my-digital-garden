import React from "react";
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
export const FormInput = ({
  label,
  type = "text",
  submitted = false,
  ...props
}) => {
  const id = label.trim().replace(" ", "").toLowerCase();
  const [value, setValue] = React.useState("");
  const [touched, setTouched] = React.useState(false);
  const errorMessage = getFieldError(value, type);
  const displayErrorMessage = (submitted || touched) && errorMessage;
  return (
    <div className='relative mx-2 my-4' {...props}>
      <label htmlFor='name' className='transition'>
        {label}
      </label>
      <input
        type={type}
        name={type}
        id={id}
        placeholder={label}
        className='w-full my-2 p-2 rounded border !placeholder-transparent placeholder-gray-400 border-gray-400 !bg-transparent '
        autoComplete={label}
        onChange={(event) => setValue(event.currentTarget.value)}
        onBlur={() => setTouched(true)}
        pattern='[a-z]{3,10}'
        required
        aria-describedby={displayErrorMessage ? `${label}-error` : id}
      />
      {displayErrorMessage && (
        <p id={`${id}-error`} className='text-red-700 '>
          {errorMessage}
        </p>
      )}
    </div>
  );
};
export const FormSearchInput = ({ label, type, Items, value, ...props }) => {
  const id = label.trim().toLowerCase();
  return (
    <div className='relative flex w-5/6 p-6 mt-4 text-xl border border-gray-400 rounded-full'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-6 h-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
        />
      </svg>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={label}
        className='w-10/12 pl-3 placeholder-gray-400 !bg-transparent'
        {...props}
      />
      <p className='absolute w-max right-8'>{Items}</p>
    </div>
  );
};

export const Form = ({ children, ...props }) => {
  return <form {...props}>{children}</form>;
};

export const SubmitButton = ({ content, type = "button", ...props }) => {
  return (
    <button
      type={type}
      {...props}
      className='block w-max p-2 px-12 m-auto my-2 text-white transition bg-gray-900 border-4 border-white rounded-full dark:border-gray-900 group dark:bg-white dark:text-gray-900 ring-0 hover:ring-4 hover:!text-skin-base ring-skin-base'>
      {content}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='inline-block w-6 h-6 transition rotate-0 translate-x-3 group-focus:animate-bounce group-hover:translate-x-9'
        viewBox='0 0 24 24'
        stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={3}
          d='M14 5l7 7m0 0l-7 7m7-7H3'
        />
      </svg>
    </button>
  );
};
