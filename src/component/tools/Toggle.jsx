import React from "react";
const Toggle = ({ text }) => {
  return (
    <>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-grayDark peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blueDark"></div>
        <span className="ms-3 text-sm font-medium text-grayDark">{text}</span>
      </label>
    </>
  );
};
export default Toggle;
