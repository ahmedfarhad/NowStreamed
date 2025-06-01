import React from 'react'
import { FiX, FiArrowRight } from 'react-icons/fi'

function search({onClose}) {
  return (
    <div className='fixed flex h-screen w-screen top-20 justify-center z-50'>
        {console.log('h')}
        <div className='flex flex-row w-100 h-15 items-center justify-center px-2 bg-white rounded-full border-1 border-yellow-400'>
            <input className='flex-grow h-15 px-2 focus:border-0 rounded-full ' placeholder='enter the name here..'>
      </input>
              <button className='flex items-center justify-center w-10 h-10 bg-yellow-400 text-white rounded-full'><FiArrowRight /></button>

        </div>
    </div>
  )
}

export default search
