export default function Text({ children, otherstyles }) {
    return (
        <p className={`!text-gray-500 dark:!text-gray-600 ${otherstyles}`}>
            {children}
        </p>
    )
}
