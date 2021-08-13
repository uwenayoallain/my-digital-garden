export default function SubHeading({ children, ...props }) {
  return (
    <div
      className='mx-3 mt-5 text-xl leading-normal text-gray-800 md:leading-9 md:text-2xl dark:text-gray-300 '
      {...props}>
      {children}
    </div>
  );
}
