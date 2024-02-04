import { Table, MenuSidebar, Pagination, Header } from "./Index";
import { salesData } from "../data/salesData";
import { useState, useEffect, useContext, useRef } from "react";
import { dashboardContext } from "../context/dashboardContext";

const Sales = () => {
  const headers = ["نام خریدار", "نام محصول", "تاریخ", "مبلغ"];
  const [showArray, setShowArray] = useState([]);
  const { setSidebarMenuShow, sidebarMenuShow } = useContext(dashboardContext);

  useEffect(() => {
    const fetchData = async () => {
      // const numberOfPage = Math.ceil(dataLength / lengthPerPage);
      const newArray = salesData.slice(0, 3);
      setShowArray(newArray);
    };
    fetchData();
  }, []);

  // click out of sidebar menu and close sidebar menu
  const newRef = useRef();
  useEffect(() => {
    const hamburgerMenu = document.getElementById("hamdergur-menu");
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);

    function handleClick(e) {
      console.log(e);
      if (newRef && newRef.current) {
        const ref = newRef.current;
        console.log(ref);
        console.log(e.target);
        if (!e.target.contains(hamburgerMenu)) {
          if (!ref.contains(e.target)) {
            console.log("I'm Outside");
            setSidebarMenuShow(false);
          }
        }
      }
    }
  }, []);

  return (
    <div className="relative flex flex-row p-4 xl:gap-x-4 gap-x-0  h-screen">
      <div ref={newRef} className={sidebarMenuShow ? "show" : "hide"}>
        <MenuSidebar />
      </div>
      <div className="grow min-h-full">
        <Header />
        <Table data={showArray} headers={headers} />
        <Pagination data={salesData} setShowArray={setShowArray} />
      </div>
    </div>
  );
};
export default Sales;
