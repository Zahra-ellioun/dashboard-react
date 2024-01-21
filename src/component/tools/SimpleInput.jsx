const SimpleInput = ({ text, name, onChangeProp }) => {
  return (
    <div className="flex gap-x-2">
      <label className="text-xl text-grayDark">{text}: </label>
      <input
        type="text"
        name={name}
        onKeyUp={onChangeProp}
        className="px-4 py-1 border border-grayMid rounded-lg focus-visible:border-grayDark outline-none"
      />
    </div>
  );
};

export default SimpleInput;
