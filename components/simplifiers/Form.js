export const FormInput = ({ label, type, ...props }) => {
  const id = label.trim().replace(" ", "").toLowerCase();
  return (
    <div className='relative mt-4' {...props}>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={label}
        className='peer w-full my-2 p-2 rounded border !placeholder-transparent placeholder-gray-400 border-gray-400 !bg-transparent '
        autoComplete={label}
      />
      <label
        htmlFor='name'
        className='absolute font-medium transition -translate-y-3 pointer-events-none left-2 peer-hover:-translate-y-3 peer-focus:-translate-y-3 bg-gradient-to-b dark:from-gray-900 dark:via-gray-900 from-white via-white to-transparent peer-placeholder-shown:translate-y-4'>
        {label}
      </label>
    </div>
  );
};
export const FormSearchInput = ({ label, type, Items, ...props }) => {
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
      <p className='absolute w-max right-4'>{Items}</p>
    </div>
  );
};

export const Form = ({ children, ...props }) => {
  return <form {...props}>{children}</form>;
};

export const SubmitButton = ({ content, type = "button" }) => {
  return (
    <button
      type={type}
      className='block w-3/5 p-2 m-auto my-2 text-white transition bg-gray-900 border-4 border-white rounded-full dark:border-gray-900 group dark:bg-white dark:text-gray-900 ring-0 hover:ring-4 hover:!text-skin-base ring-skin-base'>
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
