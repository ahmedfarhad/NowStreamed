import React from 'react'

function card({ data }) {
  return (
    <>
      {data.poster_path &&

        <div className='flex flex-col p-1 m-2 border-1 shadow hover:border-yellow-400 hover:cursor-pointer border-gray-200 w-full h-120 '>
          <img className='w-full h-full object-cover' src={`${import.meta.env.VITE_IMAGE_URL}${data.poster_path}`} alt={data.title} />

        </div>
      }
    </>
  )
}

export default card
