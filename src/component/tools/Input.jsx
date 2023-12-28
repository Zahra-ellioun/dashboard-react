const Input = ({ labelName }) => {
  return (
    <div class="relative mb-3" data-te-input-wrapper-init>
      <input
        type="text"
        class=" peer block min-h-[auto] w-full rounded border-2 border-grayMid bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear peer-focus:text-primary  motion-reduce:transition-none "
        id="email"
      />
      <label
        for="email"
        class="px-4 pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-grayMid transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.9] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.9] motion-reduce:transition-none peer-focus:bg-background"
      >
        {labelName}
      </label>
    </div>
  );
};
export default Input;