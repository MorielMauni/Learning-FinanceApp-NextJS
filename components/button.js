export default function Button(props) {
  const variants = {
    default:
      "bg-black text-white dark:bg-white dark:text-black rounded-md hover:bg-gray-700 dark:hover:bg-gray-200",
      outline: 'border border-gret-300 dark:border-grey-500 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500',
      ghost: 'rounded-md bg-white hover:bg-gray-700 dark:bg-gray-300',
  };
  const sizes = {
    small: 'text-sm px-3 py-1.5',
    base: "text-bae px-4 py-2",
    large: 'text-lg px-4 p-2',
  };
  return (
    <button
      {...props}
      className={`${props.variant ? variants[props.variant] : variants["default"]}
        ${props.size ? sizes[props.size] : sizes["base"]}
        `}
    ></button>
  );
}
