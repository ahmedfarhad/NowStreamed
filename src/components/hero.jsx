import axios from 'axios'
import React, { useEffect, useState } from 'react'

function hero() {

    const [movieslist, setMoviesList] = useState([]);
    const [currentmovie, setCurrentMovie] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await axios.get(import.meta.env.VITE_POPULAR_URL);
            setMoviesList(resp.data.results);
            }
            catch (e) {
                console.log(e);
            }
            
        }
       
        fetchData();
    }, [])
  return (
    <div className='w-full h-screen bg-center bg-cover bg-no-repeat' style={{
        backgroundImage: `url(${import.meta.env.VITE_IMAGE_URL}${movieslist[currentmovie]?.backdrop_path})`
    }}>
        {console.log(movieslist.length)}
    </div>
  )
}

export default hero
