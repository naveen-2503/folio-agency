const Container = ({ children }) => {
  return (
    <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
      {children}
    </div>
  );
};

export default Container;