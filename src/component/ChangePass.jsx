import { Button, MenuSidebar, SimpleInput } from "./Index";
const ChangePass = () => {
  return (
    <div className="flex p-4 gap-x-4 min-h-screen">
      <div className="flex-none hidden xl:block min-h-full ">
        <MenuSidebar />
      </div>
      <div className="grow">
        <div className="px-4 xl:px-0 bg-background shadow-2xl h-full">
          <h1 className="text-4xl pt-10 text-center">تغییر رمز ورود</h1>

          <form className="flex justify-center items-center mt-48">
            <div className="flex flex-col items-end gap-y-5 ">
              <SimpleInput text={"رمز ورود فعلی"} />
              <SimpleInput text={"رمز جدید"} />
              <SimpleInput text={"تکرار رمز جدید"} />
              <Button text={"تغییر رمز"} type={"submit"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePass;
