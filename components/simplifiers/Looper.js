import { useEffect, useState } from "react"

export default function Looper(props) {
    return (
        <>
            <div className={`${props.otherstyles} flex w-full flex-wrap`} {...props} >
                {
                    props.elements.map((element, key) =>
                    (
                        Array.isArray(element) ? <a target="_blank" key={key} className={`empty:hidden w-max rounded-full p-3 border font-medium dark:text-white text-gray-900 hover:ring-4 transition mx-1 hover:ring-gray-900 dark:hover:ring-white capitalize ring-0 dark:bg-gray-700 bg-gray-200 border-transparent  my-1 `} href={element[1]}>{element[0]}</a> : <span key={key} className="p-3 mx-1 my-1 font-medium text-gray-900 capitalize transition bg-gray-200 border border-transparent rounded-full w-max dark:text-white hover:ring-4 hover:ring-gray-900 dark:hover:ring-white ring-0 dark:bg-gray-700 empty:hidden">{element}</span>
                    )
                    )
                }
            </div>
        </>
    )
}


export function TagsLooper({ elements, otherstyles, searchContent, ...props }) {
    const [searchByTags, setSearchByTags] = useState("");
    useEffect(() => {
        searchContent(searchByTags)
    }, [searchByTags])
    const handleSearchByTags = (tag) => {
        setSearchByTags(searchByTags.concat(" ", tag));
    }
    const removeSearch = (search) => {
        setSearchByTags(searchByTags.replaceAll(search, ""));
    }
    return (
        <>
            <div className={`${otherstyles} flex w-full flex-wrap`} {...props} >
                {elements.map((element, key) => <Button key={key} element={element} removeSearch={removeSearch} search={handleSearchByTags} />)
                }
            </div>
        </>
    )
}

export const Button = ({ element, search, removeSearch, ...props }) => {

    const [toggle, setToogle] = useState(true);
    const [styles, setStyles] = useState("");
    const change = (e) => {
        styles === "" ? setStyles("!text-white dark:!text-gray-900 dark:bg-gray-200 bg-gray-700") : setStyles("")
        setToogle(toggle === false ? true : false);
        if (toggle) {
            search(e.target.value);
        } else {
            removeSearch(e.target.value);
        }
    }
    return (
        <>
            <button {...props} className={`${styles} cursor-pointer w-max rounded-full p-3 border-transparent empty:hidden border capitalize ring-0 hover:ring-4 transition m-1 dark:text-white text-gray-900 hover:ring-gray-900 dark:hover:ring-white dark:bg-gray-700 bg-gray-200`} value={element} onClick={(e) => change(e)}>{element}</button>
        </>
    )
}