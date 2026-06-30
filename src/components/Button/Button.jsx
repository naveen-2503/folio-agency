const Button = ({ children }) => {
  return (
    <button
      className="
      bg-[#1F2041]
      text-white
      px-7
      py-4
      rounded-xl
      font-semibold
      hover:bg-[#5B5BFF]
      duration-300
      "
    >
      {children}
    </button>
  );
};

export default Button;