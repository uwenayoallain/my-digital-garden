import React from "react";
export default function Section({
  children,
  title = "#",
  bg = "transparent",
  className = "",
  reverse = false,
  parentStyles = "",
  ...props
}) {
  return (
    <div
      className={`h-full md:h-screen w-full flex p-10  items-center justify-center relative ${className}`}>
      <div
        className={`${parentStyles} absolute inset-0 filter transition`}></div>
      <div
        className={`${
          !reverse ? "flex-wrap-reverse md:flex-wrap" : "flex-wrap"
        } flex h-full p-2 w-full md:w-11/12  md:rounded-3xl items-center relative ${bg} ${className}`}
        id={title}
        {...props}>
        {children}
      </div>
    </div>
  );
}

export const Handler = ({ children, height = "md:h-3/4", ...props }) => {
  return (
    <div className={"w-full md:w-1/2 h-full " + height} {...props}>
      {children}
    </div>
  );
};
