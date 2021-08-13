export default function Heading({ children }) {
  return (
    <div className='mx-1 text-3xl font-medium leading-10 capitalize md:text-4xl'>
      {children}
    </div>
  );
}
