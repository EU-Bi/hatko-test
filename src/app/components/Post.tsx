import React from 'react'

const Post = () => {
  return (
    <div className="w-full px-10 my-4 py-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
            <span className="font-light text-gray-600">mar 10, 2019</span>
        </div>
        <div className="mt-2">
            <h3 className="text-2xl text-gray-700 font-bold hover:text-gray-600" >Accessibility tools for designers and developers</h3>
            <p className="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
        </div>
    </div>
  )
}

export default Post