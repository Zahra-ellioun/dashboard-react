import { useState } from "react";

const Pagination = ({ data, setShowArray }) => {
  const [firstIndex, setFirstIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3);
  const lengthPerPage = 3;
  const dataLength = data.length;
  // console.log(dataLength);

  const backPage = () => {
    console.log(firstIndex, endIndex);

    if (firstIndex !== 0) {
      const first = firstIndex - lengthPerPage;
      setFirstIndex(first);
      const end = endIndex - lengthPerPage;
      setEndIndex(end);
      const newArray = data.slice(first, end);
      setShowArray(newArray);
    }
  };

  const nextPage = () => {
    if (endIndex < dataLength) {
      const first = firstIndex + lengthPerPage;
      setFirstIndex(first);
      const end = endIndex + lengthPerPage;
      setEndIndex(end);
      const newArray = data.slice(first, end);
      setShowArray(newArray);
    }
  };

  return (
    <div className="flex justify-center mt-8 mb-6">
      {/* <!-- Previous Button --> */}
      <button
        className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-grayDark bg-transparent border border-grayDark rounded-lg hover:bg-gray-700 hover:text-white"
        onClick={backPage}
      >
        <svg
          className="w-3.5 h-3.5 me-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 5H1m0 0 4 4M1 5l4-4"
          />
        </svg>
        صفحه قبل
      </button>
      {/* next button */}
      <button
        onClick={nextPage}
        className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-grayDark bg-transparent border border-grayDark rounded-lg hover:bg-gray-700 hover:text-white"
      >
        صفحه بعد
        <svg
          className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
