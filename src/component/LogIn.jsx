import { Input } from "./Index.jsx";
const LogIn = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="h-1/2 w-1/2 bg-background shadow-xl rounded-xl">
        {/* blue box */}
        <div className="bg-blue  mx-8 py-8 rounded-xl -m-10">
          <div className="flex flex-col justify-center items-center text-white gap-y-7 ">
            <span className="text-2xl">صفحه ورود</span>
            <div className="flex gap-x-8">
              <a href="/">
                <i className="fa-brands fa-facebook text-xl"></i>
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope-open text-xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-3 mx-4 mt-16">
          {/* inputs */}
          <Input labelName={"ایمیل"} />
          <Input labelName={"رمز"} />
        </div>
      </div>
    </div>
  );
};
export default LogIn;
