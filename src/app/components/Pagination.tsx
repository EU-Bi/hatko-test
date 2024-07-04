import React from "react";

const Pagination = () => {
  return (
    <div className="flex flex-row mx-auto gap-1">
      <button
        type="button"
        className="bg-indigo-600 px-3 py-2 text-sm  rounded-l-md
        font-semibold leading-6 text-white shadow-sm
       hover:bg-indigo-500 focus-visible:outline 
        focus-visible:outline-2 focus-visible:outline-offset-2
       focus-visible:outline-indigo-600"
      >
        <div className="flex flex-row align-middle">
          <p className="ml-2">Prev</p>
        </div>
      </button>
      <button
        type="button"
        className=" bg-indigo-600 px-3 py-2 text-sm  rounded-r-md
        font-semibold leading-6 text-white shadow-sm
       hover:bg-indigo-500 focus-visible:outline 
        focus-visible:outline-2 focus-visible:outline-offset-2
       focus-visible:outline-indigo-600"
      >
        <div className="flex flex-row align-middle">
          <span className="mr-2">Next</span>
        </div>
      </button>
    </div>
  );
};

export default Pagination;
