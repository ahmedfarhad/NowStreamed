import React, { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'

function top() {

    const [show, setShow] = useState(false);

    useEffect(() => {
        const toTop = () => {
            if (window.scrollY > 100) {
                setShow(true)
            }
            else {
                setShow(false)
            }
        }

        window.addEventListener('scroll', toTop);

        return () => window.removeEventListener('scroll', toTop)
    }, [])

    const moveToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            {show &&
                <button className='hover:cursor-pointer fixed bg-yellow-400 w-10 h-10 z-10 bottom-2 right-5 flex justify-center items-center text-white text-[20px] rounded-full' onClick={moveToTop}>
                    <FiArrowUp />
                </button>
            }
        </>

    )
}

export default top
