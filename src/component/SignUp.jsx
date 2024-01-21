import { useState } from "react";
import { SimpleInput, Button } from "./Index";
import bgImage from "../assets/pictures/bg-login.jpg";
import { useNavigate, Link } from "react-router-dom";
import { postNewContact } from "../services/loginservice";

const SingUp = () => {
  const [contactInfo, setContactInfo] = useState({});
  const navigate = useNavigate("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setContactInfo((preContactInfo) => ({ ...preContactInfo, [name]: value }));
  };

  const addContactInfo = (e) => {
    e.preventDefault();
    const fetchData = async () => {
      try {
        const { status: response } = await postNewContact(contactInfo);
        console.log(response);
        if (response === 201) {
          const sucssesText = document.getElementById("signup-done");
          sucssesText.classList.remove("invisible");
          // navigate("/");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  };

  return (
    // back ground image
    <div
      className="flex justify-center items-center h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* card */}
      <div className=" md:w-1/4 md:min-w-[420px] min-w-[450px] bg-background shadow-xl rounded-xl ">
        {/* blue box */}
        <div className="bg-gradient-to-bl from-blueLight to-blueDark mx-6 py-8 rounded-xl -m-10">
          <div className="flex flex-col justify-center items-center text-white gap-y-7 ">
            <span className="text-2xl">ثبت نام</span>
          </div>
        </div>

        <form
          onSubmit={addContactInfo}
          className="flex flex-col gap-y-3 items-center mt-16 "
        >
          <p
            id="signup-done"
            className=" py-2 text-green text-center invisible"
          >
            کاربر با موفقیت ثبت شد.{" "}
          </p>
          <div className="flex flex-col items-end gap-y-4 ">
            <SimpleInput
              onChangeProp={handleChange}
              name={"username"}
              text={"نام و نام خانوادگی"}
            />
            <SimpleInput
              onChangeProp={handleChange}
              name={"job"}
              text={"شغل"}
            />
            <SimpleInput
              onChangeProp={handleChange}
              name={"linkdin"}
              text={"لینک صفحه لینکدین"}
            />
            <SimpleInput
              onChangeProp={handleChange}
              name={"whatsapp"}
              text={"شماره واتس آپ"}
            />
            <SimpleInput
              onChangeProp={handleChange}
              name={"telgram"}
              text={"شماره تلگرام"}
            />
            <SimpleInput
              onChangeProp={handleChange}
              name={"password"}
              text={"رمز عبور"}
            />

            <Button text={"ثبت نام"} type={"submit"} />
          </div>
        </form>
        <p className="mb-7 py-3 text-grayDark text-center">
          آیا حساب کاربری دارید؟{" "}
          <Link to="/" className="text-blueLight">
            ورود به حساب کاربری
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SingUp;
