import React from 'react'

const Post = () => {
  return (
    <div className="w-full px-10 my-4 py-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
            <span className="font-light text-gray-600">mar 10, 2019</span>
        </div>
        <div className="mt-2">
            <h3 className="text-2xl text-gray-700 font-bold hover:text-gray-600" >Tutuut</h3>
            <p className="mt-2 text-gray-600">Tututu</p>
        </div>
    </div>
  )
}

export default Post