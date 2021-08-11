export default function SubHeading({ children, ...props }) {
  return (
    <div
      className='mt-5 text-2xl leading-9 text-gray-800 dark:text-gray-300 '
      {...props}>
      {children}
    </div>
  );
}
