import { Input, Buttom } from "./Index.jsx";
import bgImage from "../assets/pictures/bg-login.jpg";

const LogIn = () => {
  return (
    // back ground image
    <div
      className="flex justify-center items-center h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* card */}
      <div className="h-1/2 min-w-[450px] bg-background shadow-xl rounded-xl">
        {/* blue box */}
        <div className="bg-gradient-to-bl from-[#46A0F0] to-[#1D76E9] mx-6 py-8 rounded-xl -m-10">
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
          {/* buttom */}
          <Buttom text={"اطالاعات ذخیره شود"} />
        </div>
      </div>
    </div>
  );
};
export default LogIn;
