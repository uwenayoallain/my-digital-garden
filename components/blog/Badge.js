export default function Badge({ children }) {
    return (
        <span className="bg-skin-inverted/30 dark:bg-skin-inverted rounded px-3 py-0.5">
            {children}
        </span>
    )
}
