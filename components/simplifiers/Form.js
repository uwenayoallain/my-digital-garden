
export const FormInput = ({ label, type, ...props }) => {
    const id = label.trim().replace(" ", "").toLowerCase();
    return (
        <div className="relative mt-4" {...props}>
            <input type={type} name={id} id={id} placeholder={label} className="peer w-full my-2 p-2 rounded border !placeholder-transparent placeholder-gray-400 border-gray-400 !bg-transparent " autoComplete={label} />
            <label htmlFor="name" className=" transition font-medium absolute left-2 peer-hover:-translate-y-3 -translate-y-3 peer-focus:-translate-y-3 bg-gradient-to-b dark:from-gray-900 dark:via-gray-900 from-white via-white to-transparent peer-placeholder-shown:translate-y-4 pointer-events-none ">{label}</label>
        </div>
    )
}
export const FormSearchInput = ({ label, type, ...props }) => {
    const id = label.trim().replace(" ", "").toLowerCase();
    return (
        <div className="relative mt-4" {...props}>
            <input type={type} name={id} id={id} placeholder={label} className="w-5/6 my-5 mx-1 p-8 rounded-full border placeholder-gray-400 border-gray-400 !bg-transparent " autoComplete={label} />
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
        <button type={type} className="group block m-auto w-3/5 my-2 p-2 rounded-full border bg-gray-900 text-white dark:bg-white dark:text-black ring-0 transition hover:ring-4 hover:ring-gray-900 dark:hover:ring-gray-700" >
            {content}
            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block group-focus:animate-bounce group-hover:translate-x-9  w-6 h-6 rotate-0 translate-x-3 transition" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </button>
    )
}