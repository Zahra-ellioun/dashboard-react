import { Table, MenuSidebar, Pagination } from "./Index";
import { salesData } from "../data/salesData";
import { useState, useEffect } from "react";

const Sales = () => {
  const headers = ["نام خریدار", "نام محصول", "تاریخ", "مبلغ"];
  const [showArray, setShowArray] = useState([]);
  const [indexShowArray, setIndexShowArray] = useState({ first: 0, end: 3 });

  useEffect(() => {
    const fetchData = async () => {
      // const numberOfPage = Math.ceil(dataLength / lengthPerPage);
      const newArray = salesData.slice(0, 3);
      setShowArray(newArray);
    };
    fetchData();
  }, []);

  return (
    <div className="flex p-4 gap-x-4 h-screen">
      <div className="hidden xl:block min-h-full">
        <MenuSidebar />
      </div>
      <div className="grow min-h-full">
        <Table data={showArray} headers={headers} />
        <Pagination data={salesData} setShowArray={setShowArray} />
      </div>
    </div>
  );
};
export default Sales;
