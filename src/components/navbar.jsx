import React, { useState } from 'react';
import { url_links } from '../assets/constants/index';
import { FaSearch } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

function navbar() {

    const [isshow, setIsShow] = useState(false)

    const openNavBar = () => {
        setIsShow(!isshow);
    }

    return (
        <>
            <div className='flex flex-row py-3 mx-5 bg-transparent'>
                <div className='flex-2 text-[25px] font-bold'>
                    <span className='text-yellow-400'>Now</span> Streamed
                </div>
                <ul className='  flex-4 justify-evenly items-center hidden md:flex'>
                    {
                        url_links.map((item, index) => (
                            <li key={index}>
                                <a className='hover:text-yellow-400' href={item.link}>{item.name}</a>
                            </li>
                        ))
                    }
                </ul>
                <div className='flex-1 hidden md:flex items-center justify-end'>
                    <button className='hover:text-yellow-400 hover:cursor-pointer'><FaSearch /></button>
                </div>
                <div className='flex flex-1 md:hidden items-center justify-end'>
                    <button className='hover:text-yellow-400 hover:cursor-pointer text-[20px]' onClick={openNavBar}>
                        {isshow ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>
            {isshow && 
            <div className='flex flex-col items-center justify-center bg-transparent'>
                <ul className='flex flex-col justify-evenly items-center flex md:hidden'>
                    {
                        url_links.map((item, index) => (
                            <li key={index} className='my-2'>
                                <a className='hover:text-yellow-400' href={item.link}>{item.name}</a>
                            </li>
                        ))
                    }
                </ul>
                <div className='md:hidden items-center mt-2'>
                    <button className='hover:text-yellow-400 hover:cursor-pointer'><FaSearch /></button>
                </div>
            </div>
            }
        </>
    )
}

export default navbar;
