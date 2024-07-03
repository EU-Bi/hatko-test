import React from 'react'

const Pagination = () => {
  return (
    <div className="flex flex-row mx-auto">
    <button type="button" className="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-indigo-600 hover:text-white px-3">
      <div className="flex flex-row align-middle">
        <p className="ml-2">Prev</p>
      </div>
    </button>
    <button type="button" className="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-indigo-600 hover:text-white px-3">
      <div className="flex flex-row align-middle">
        <span className="mr-2">Next</span>
      </div>
    </button>
  </div>
  )
}

export default Pagination