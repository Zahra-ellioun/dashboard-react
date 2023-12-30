const Button = ({ text }) => {
  return (
    <button
      type="button"
      class="text-white bg-gradient-to-l from-blueLight to-blueDark  focus:outline-none font-medium rounded-lg text-lg px-5 py-2 text-center my-4 hover:shadow-lg  hover:shadow-blueLight duration-150"
    >
      {text}
    </button>
  );
};
export default Button;
