import axios from 'axios';
import React, { useEffect, useState } from 'react'

function genres({ m_id }) {

    const [details, setDeatils] = useState([]);

    useEffect (() => {
        const getDetails = async () => {
            const resp = await axios.get(`${import.meta.env.VITE_URL}movie/${m_id}?api_key=${import.meta.env.VITE_API_KEY}`);
            setDeatils(resp.data)
        };

        getDetails();

    }, []);

  return (
    <div className='flex flex-row'>
      <div className='flex flex-row'>
        {details?.genres?.map((item, index)=> (
            <div key={index} className=' flex ml-2 sm:ml-10 w-20 text-[10px] justify-center items-center rounded text-white h-5 mx-1 border-1'>
                {item.name}
                </div>
        ))
        }
      </div>
    </div>
  )
}

export default genres;
