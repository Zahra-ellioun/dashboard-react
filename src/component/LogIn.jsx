import { Toggle, Button, Spinner } from "./Index.jsx";
import bgImage from "../assets/pictures/bg-login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { loginValidation } from "../validation/loginValidation";
import { getLoginInf } from "../services/loginservice.js";
import { useState } from "react";

const LogIn = () => {
  const navigate = useNavigate();
  const { loading, setLoading } = useState(false);

  return (
    // back ground image
    <div
      className="flex justify-center items-center h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* card */}
      <div className=" md:w-1/4 md:min-w-[380px] min-w-[450px] bg-background shadow-xl rounded-xl">
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
          initialValues={{ email: "", password: "" }}
          validationSchema={loginValidation}
          onSubmit={async (value) => {
            try {
              console.log(value);
              const { data: contact, status } = await getLoginInf(value);
              console.log(contact);
              if (status === 201) {
                navigate("/dashboard");
              }
            } catch (err) {
              navigate("/dashboard");
              console.log(err);
            }
          }}
        >
          {loading ? (
            <Spinner />
          ) : (
            <Form>
              <div className="flex flex-col gap-y-3 mx-4 mt-16">
                {/* email */}
                <div className="relative mb-3">
                  <Field
                    type="text"
                    name="email"
                    className=" peer block min-h-[auto] w-full rounded border border-grayMid  focus:border-blueLight bg-transparent px-2 py-[0.32rem] leading-[2.15] outline-none transition-all duration-150 ease-linear peer-focus:text-primary  motion-reduce:transition-none "
                  />
                  <label
                    htmlFor="email"
                    className="px-4 pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-grayDark transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.9] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.9] motion-reduce:transition-none peer-focus:bg-background"
                  >
                    ایمیل
                  </label>
                  <ErrorMessage name="email" />
                </div>
                {/* password */}
                <div className="relative mb-3">
                  <Field
                    type="text"
                    name="password"
                    className=" peer block min-h-[auto] w-full rounded border border-grayMid  focus:border-blueLight bg-transparent px-2 py-[0.32rem] leading-[2.15] outline-none transition-all duration-150 ease-linear peer-focus:text-primary  motion-reduce:transition-none "
                  />
                  <label
                    html="email"
                    className="px-4 pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-grayDark transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.9] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.9] motion-reduce:transition-none peer-focus:bg-background "
                  >
                    رمز{" "}
                  </label>
                  <ErrorMessage name="password" />
                </div>
                {/* toggle*/}
                <Toggle text={"ذخیره اطلاعات"} />
                {/* button */}
                <Button type={"submit"} text={"ورود"} />
                <p className="mb-7 py-3 text-grayDark text-center">
                  آیا حساب کاربری ندارید؟{" "}
                  <Link href="/" className="text-blueLight">
                    عضویت
                  </Link>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

/**
 * {
 *    Status Code: int
 *    Message: string
 *    Data: null --> object
 * }
 */
export default LogIn;
