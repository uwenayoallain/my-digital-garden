export default function Text({ children, otherstyles }) {
    return (
        <p className={`my-8 mx-3 leading-9 ${otherstyles}`}>
            {children}
        </p>
    )
}
