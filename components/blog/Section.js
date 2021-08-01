export default function Section({ children, title = "#", bg = "transparent", className = "", ...props }) {
    return (
        <div className={`flex flex-wrap h-screen m-10 p-10 w-11/12 !rounded-3xl items-center relative ${bg} ${className}`} id={title} {...props}>
            {children}
        </div>
    )
}
