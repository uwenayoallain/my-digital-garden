
export default function Looper(props) {
    return (
        <>
            <div className={`${props.otherstyles} flex w-full flex-wrap`} {...props} >
                {
                    props.elements.map((element, key) =>
                    (
                        Array.isArray(element) ? <a target="_blank" key={key} className={`empty:hidden w-max rounded-full p-3 border font-medium dark:text-white text-gray-900 hover:ring-4 transition mx-1 hover:ring-gray-900 dark:hover:ring-white capitalize ring-0 dark:bg-gray-700 bg-gray-200 border-transparent  my-1 `} href={element[1]}>{element[0]}</a> : <span key={key} className="w-max rounded-full p-3 border font-medium dark:text-white text-gray-900 hover:ring-4 transition mx-1 hover:ring-gray-900 dark:hover:ring-white capitalize ring-0 dark:bg-gray-700 bg-gray-200 border-transparent my-1 empty:hidden">{element}</span>
                    )
                    )
                }
            </div>
        </>
    )
}
