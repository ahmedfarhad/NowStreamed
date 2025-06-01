import axios from 'axios';
import React, { useEffect, useState } from 'react'

function genres({ g_id }) {


  const genreMap = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
    10759: "Action & Adventure",
    10762: "Kids",
    10763: "News",
    10764: "Reality",
    10765: "Sci-Fi & Fantasy",
    10766: "Soap",
    10767: "Talk",
    10768: "War & Politics"
  };


  return (
    <div className='flex flex-row'>
      <div className='flex flex-row'>
        {g_id.map((item, index) => (
          <div key={index} className=' flex ml-2 sm:ml-10 w-25 text-[10px] justify-center items-center rounded text-white h-5 mx-1 border-1'>
            {genreMap[item]}
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default genres;
