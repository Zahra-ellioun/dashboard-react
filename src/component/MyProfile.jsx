import bgProfile from "../assets/pictures/selective-focus-soft-foliage-with-summer-light-background.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./Index";
import { useEffect, useState } from "react";
import { getUserProfile } from "../services/loginservice";

const MyProfile = () => {
  const navigate = useNavigate("");
  const [contactInfo, setContactInfo] = useState({
    username: "zahra elliooun",
    id: 1,
    job: "frontend Devaloper",
    linkdin: "#",
    whatsapp: "#",
    telgram: "#",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { user } = await getUserProfile();
        // console.log(user);
        // console.log(contactInfo);

        setContactInfo({
          ...contactInfo,
          username: user.username,
          id: user.id,
        });
        // console.log(contactInfo);
      } catch (err) {
        console.log(err);
        navigate("/");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="px-4 xl:px-0 h-full">
      {/* picture in top */}
      <div
        className="h-72 rounded-xl w-full bg-cover bg-bottom"
        style={{ backgroundImage: `url(${bgProfile})` }}
      />
      {/* card profile info */}
      <div className="mx-5 rounded-xl z-40 -mt-7 bg-background px-5 py-7 shadow-2xl">
        {/* section 1  */}
        <div className="flex justify-between items-center mb-5">
          {/* pro pic and name */}
          <div className="flex gap-x-5 items-center">
            <img
              src={require("../assets/pictures/cutegirl.jpg")}
              alt=""
              className="rounded-full w-16 h-16 object-cover object-bottom"
            />
            <div>
              <p className="text-2xl font-medium">{contactInfo.username}</p>
              <p className="text-grayDark">{contactInfo.job}</p>
            </div>
          </div>
          {/* social media icons */}
          <div className="flex gap-x-3">
            {/* linkdin */}
            <div className="flex justify-center items-center rounded-full h-12 w-12 text-3xl bg-[#FFCFD1]">
              <Link rel="stylesheet" href={contactInfo.linkdin} className=" ">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
            {/* whatsApp */}
            <div className="flex justify-center items-center rounded-full h-12 w-12 text-3xl bg-[#FFCFD1]">
              <Link rel="stylesheet" href={contactInfo.whatsapp} className=" ">
                <i className="fab fa-whatsapp"></i>
              </Link>
            </div>
            {/* telgram */}
            <div className="flex justify-center items-center rounded-full h-12 w-12 text-3xl bg-[#FFCFD1]">
              <Link rel="stylesheet" href={contactInfo.telgram} className=" ">
                <i className="fab fa-telegram-plane"></i>
              </Link>
            </div>
          </div>
        </div>
        <Link to="../changepass">
          <Button text={"تغییر رمز عبور"} type={"text"} />
        </Link>
      </div>
    </div>
  );
};

export default MyProfile;
