export default function Section({
  children,
  title = "#",
  bg = "transparent",
  className = "",
  ...props
}) {
  return (
    <div
      className={`flex flex-wrap h-screen m-2 md:m-10 p-2 md:p-10 w-full md:w-11/12 !rounded-3xl items-center relative ${bg} ${className}`}
      id={title}
      {...props}>
      {children}
    </div>
  );
}

export const Handler = ({ children, height = "md:h-3/4", ...props }) => {
  return (
    <div className={"w-full md:w-1/2 h-full" + height} {...props}>
      {children}
    </div>
  );
};
