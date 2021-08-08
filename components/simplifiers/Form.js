
export const FormInput = ({ label, type, ...props }) => {
    const id = label.trim().replace(" ", "").toLowerCase();
    return (
        <div className="relative mt-4" {...props}>
            <input type={type} name={id} id={id} placeholder={label} className="peer w-full my-2 p-2 rounded border !placeholder-transparent placeholder-gray-400 border-gray-400 !bg-transparent " autoComplete={label} />
            <label htmlFor="name" className="absolute font-medium transition -translate-y-3 pointer-events-none left-2 peer-hover:-translate-y-3 peer-focus:-translate-y-3 bg-gradient-to-b dark:from-gray-900 dark:via-gray-900 from-white via-white to-transparent peer-placeholder-shown:translate-y-4">{label}</label>
        </div>
    )
}
export const FormSearchInput = ({ label, type, ...props }) => {
    const id = label.trim().toLowerCase();
    return (
        <div className="relative mt-4">
            <input type={type} name={id} id={id} placeholder={label} className="w-5/6 my-5 mx-1 p-6 rounded-full border placeholder-gray-400 border-gray-400 !bg-transparent " {...props} />
        </div>
    )
}

export const Form = ({ children, ...props }) => {
    return (
        <form {...props}>
            {children}
        </form>
    )
}

export const SubmitButton = ({ content, type = "button" }) => {
    return (
        <button type={type} className="block w-3/5 p-2 m-auto my-2 text-white transition bg-gray-900 border rounded-full group dark:bg-white dark:text-black ring-0 hover:ring-4 hover:ring-gray-900 dark:hover:ring-gray-700" >
            {content}
            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-6 h-6 transition rotate-0 translate-x-3 group-focus:animate-bounce group-hover:translate-x-9" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </button>
    )
}