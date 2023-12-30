import React from "react";
const Buttom = ({ text }) => {
  return (
    <>
      <label class="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer" />
        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue"></div>
        <span class="ms-3 text-sm font-medium text-[#7B809A] dark:text-gray-300">
          {text}
        </span>
      </label>
    </>
  );
};
export default Buttom;
