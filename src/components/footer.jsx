import React from 'react'

function footer() {
  return (
    <div className='flex mt-10 bg-yellow-400 justify-center items-center'>
      &copy; {new Date().getFullYear()} Made with 🤍 by  <a target='_blank' href='hanannawaz.me' className='ml-1 text-white hover:cursor-pointer hover:text-black'>hanannawaz.me</a>
    </div>
  )
}

export default footer
