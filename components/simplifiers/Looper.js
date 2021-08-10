import { useEffect, useState } from "react";

export default function Looper(props) {
  return (
    <>
      <div className={`${props.otherstyles} flex w-full flex-wrap`} {...props}>
        {props.elements.map((element, key) =>
          Array.isArray(element) ? (
            <a
              target={props.target || "_blank"}
              key={key}
              className={`empty:hidden w-max rounded-full p-3 border font-medium dark:text-white text-gray-900 hover:ring-4 transition mx-1 hover:ring-gray-900 dark:hover:ring-white capitalize ring-0 dark:bg-gray-700 bg-gray-200 border-transparent  my-1 `}
              href={element[1]}>
              {element[0]}
            </a>
          ) : (
            <span
              key={key}
              className='p-3 mx-1 my-1 font-medium text-gray-900 capitalize transition bg-gray-200 border border-transparent rounded-full w-max dark:text-white hover:ring-4 hover:ring-gray-900 dark:hover:ring-white ring-0 dark:bg-gray-700 empty:hidden'>
              {element}
            </span>
          )
        )}
      </div>
    </>
  );
}

export function TagsLooper({
  elements,
  otherstyles,
  currentSearchValue,
  appendSearch,
  ...props
}) {
  const handlesearchbyTag = (tag) => {
    appendSearch(tag);
  };
  return (
    <>
      <div className={`${otherstyles} flex w-full flex-wrap`} {...props}>
        {elements.map((element, key) => (
          <Button
            key={key}
            element={element}
            currentSearchValue={currentSearchValue}
            appendSearch={handlesearchbyTag}
          />
        ))}
      </div>
    </>
  );
}

export const Button = ({
  element,
  search,
  removeSearch,
  currentSearchValue,
  appendSearch,
  ...props
}) => {
  const tag = element.trim().toLowerCase();
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (currentSearchValue.trim().toLowerCase().includes(tag)) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [currentSearchValue, tag]);

  const handleonCkick = (e) => {
    setActive(!active);
    appendSearch(tag);
  };
  return (
    <>
      <button
        {...props}
        className={
          active
            ? "text-white dark:text-gray-900 dark:bg-gray-200 bg-gray-700 cursor-pointer w-max rounded-full p-3 empty:hidden border-2 capitalize ring-0 hover:ring-4 ring-skin-base transition m-1 dark:border-gray-900 border-white"
            : "cursor-pointer w-max rounded-full p-3 empty:hidden border-2 capitalize ring-0 dark:border-gray-900 border-white hover:ring-4 transition m-1 dark:text-white text-gray-900 hover:ring-gray-900 dark:hover:ring-white dark:bg-gray-700 bg-gray-200"
        }
        value={element}
        onClick={(e) => handleonCkick(e)}>
        {element}
      </button>
    </>
  );
};
