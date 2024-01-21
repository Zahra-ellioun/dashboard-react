import { Fragment, useEffect } from "react";
import { Divide } from "./Index";
// import { getSedebarMenuItems } from "../services/sidebarMenu";
import { Link } from "react-router-dom";
import { sidebarMenuData } from "../data/menuData";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getUserProfile } from "../services/loginservice";

const MenuSidebar = () => {
  const [items, setItems] = useState(sidebarMenuData);
  const navigate = useNavigate("");
  // const [contactInfo, setContactInfo] = useState({
  //   username: "Undefiend",
  // });

  const handleButtonClick = (e) => {
    // console.log(e.currentTarget);
    e.currentTarget.nextSibling.classList.toggle("hidden");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { user } = await getUserProfile();
        const userName = user.username;
        // console.log(userName);

        setItems([...items, (items[0].name = userName)]);
        // console.log(items);
      } catch (err) {
        console.log(err);
        navigate("/");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="h-full overflow-auto">
      {/* container dark gray */}
      <aside className="bg-[#3B3B41] rounded-2xl px-4 w-[250px] text-white h-full">
        <h3 className="text-2xl text-center py-5">پیشخوان</h3>
        <Divide />
        <ul>
          {sidebarMenuData &&
            sidebarMenuData.map((item, index) => {
              return (
                <Fragment key={index}>
                  <li>
                    <button
                      type="botton"
                      id={item.index}
                      onClick={handleButtonClick}
                      className="my-4 flex gap-x-2 items-center relative hover:bg-grayLight hover:text-black rounded-md px-4 py-2 w-full"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="rounded-full h-9 w-9 object-cover object-bottom "
                      />
                      <span className="text-lg">{item.name}</span>
                      <svg
                        className="w-8 h-8 absolute left-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                      </svg>
                    </button>
                    <ul className="hidden">
                      {item.submenu?.length &&
                        item.submenu.map((sub) => {
                          return (
                            <li
                              key={sub.id}
                              className="hover:bg-grayLight hover:text-black ounrded-md px-6 py-2 "
                            >
                              <Link className="text-lg">{sub.name}</Link>
                            </li>
                          );
                        })}
                    </ul>
                  </li>
                </Fragment>
              );
            })}
          <Divide />
        </ul>
      </aside>
    </div>
  );
};
export default MenuSidebar;
