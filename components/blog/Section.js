export default function Section({ children, title = "#", bg = "transparent" }) {
    return (
        <div className={`flex flex-wrap h-screen m-10 p-10 w-11/12 !rounded-3xl items-center relative ${bg}`} id={title}>
            {children}
        </div>
    )
}
