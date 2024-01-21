import { Toggle, Button } from "./Index.jsx";
import bgImage from "../assets/pictures/bg-login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { loginValidation } from "../validation/loginValidation";
import { postLoginInf } from "../services/loginservice.js";
// import { useState } from "react";

const LogIn = () => {
  const navigate = useNavigate();
  // const [item, setItem] = useState({ username: "", password: "" });

  // const handleChange = (e) => {
  //   setItem((preItem) => ({
  //     ...preItem,
  //     [e.target.name]: e.target.value,
  //   }));
  //   if (e.target.value) {
  //     e.currentTarget.nextSibling.classList.add("-translate-y-[1.15rem]");
  //     e.currentTarget.nextSibling.classList.add("scale-[0.9]");
  //     e.currentTarget.nextSibling.classList.add("bg-background");
  //     e.currentTarget.classList.add("bg-transparent");
  //     console.log(item);
  //   }
  // };

  return (
    // back ground image
    <div
      className="flex justify-center items-center h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* card */}
      <div className=" md:w-1/4 md:min-w-[420px] min-w-[450px] bg-background shadow-xl rounded-xl">
        {/* blue box */}
        <div className="bg-gradient-to-bl from-blueLight to-blueDark mx-6 py-8 rounded-xl -m-10">
          <div className="flex flex-col justify-center items-center text-white gap-y-7 ">
            <span className="text-2xl">صفحه ورود</span>
            <div className="flex gap-x-8">
              <Link href="/">
                <i className="fa-brands fa-facebook text-xl"></i>
              </Link>
              <Link href="/">
                <i className="fa-solid fa-envelope-open text-xl"></i>
              </Link>
            </div>
          </div>
        </div>
        {/* log in form */}
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={loginValidation}
          onSubmit={async (values) => {
            // console.log(values);
            try {
              const token = await postLoginInf(values);
              // console.log(values);
              if (token) {
                navigate("/dashboard");
              }
            } catch (err) {
              console.log(err);
            }
          }}
        >
          {
            <Form>
              <div className="flex flex-col gap-y-3 mx-4 mt-16">
                {/* username */}
                <div className="relative mb-1">
                  <label
                    htmlFor="username"
                    className="px-4 pointer-events-none mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-grayDark transition-all duration-200 ease-out  peer-focus:scale-[0.9]  motion-reduce:transition-none "
                  >
                    {/*  className="px-4 pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-grayDark transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.9] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.9] motion-reduce:transition-none peer-focus:bg-background" */}
                    نام کاربری
                  </label>
                  <Field
                    type="text"
                    name="username"
                    // value={value.username}
                    // onChange={handleChange}
                    className=" peer block min-h-[auto] w-full rounded border border-grayMid  focus:border-blueLight bg-transparent px-2 py-[0.32rem] leading-[2.15] outline-none transition-all duration-150 ease-linear peer-focus:text-primary  motion-reduce:transition-none overflow-hidden "
                  />
                  {/*  className=" peer block min-h-[auto] w-full rounded border border-grayMid  focus:border-blueLight bg-transparent px-2 py-[0.32rem] leading-[2.15] outline-none transition-all duration-150 ease-linear peer-focus:text-primary  motion-reduce:transition-none overflow-hidden " */}

                  <ErrorMessage name="username" />
                </div>
                {/* password */}
                <div className="relative mb-3">
                  <label
                    html="password"
                    className="px-4 pointer-events-none mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-grayDark transition-all duration-200 ease-out  peer-focus:scale-[0.9]  motion-reduce:transition-none  "
                  >
                    رمز{" "}
                  </label>
                  <Field
                    type="text"
                    name="password"
                    // value={value.password}
                    // onChange={handleChange}
                    className=" peer block min-h-[auto] w-full rounded border border-grayMid  focus:border-blueLight bg-transparent px-2 py-[0.32rem] leading-[2.15] outline-none transition-all duration-150 ease-linear peer-focus:text-primary  motion-reduce:transition-none overflow-hidden "
                  />

                  <ErrorMessage name="password" />
                </div>
                {/* toggle*/}
                <Toggle text={"ذخیره اطلاعات"} />
                {/* button */}
                <Button type={"submit"} text={"ورود"} />
                <p className="mb-7 py-3 text-grayDark text-center">
                  آیا حساب کاربری ندارید؟{" "}
                  <Link to="/signup" className="text-blueLight">
                    عضویت
                  </Link>
                </p>
              </div>
            </Form>
          }
        </Formik>
      </div>
    </div>
  );
};

export default LogIn;
