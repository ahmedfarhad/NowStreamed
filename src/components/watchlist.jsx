import axios from 'axios';
import React, { useEffect, useState } from 'react';

function watchlist({ m_id }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const resp = await axios.get(
          `${import.meta.env.VITE_URL}movie/${m_id}/watch/providers?api_key=${import.meta.env.VITE_API_KEY}`
        );
        setDetails(resp.data);
      } catch (error) {
        console.error('Error fetching movie watch providers:', error);
      } finally {
        setLoading(false);
      }
    };

    if (m_id) {
      getDetails();
    }
  }, [m_id]);

  const rentProviders = details?.results?.US?.rent;

  return (
    <div className='flex flex-row'>
      <div className='flex flex-row'>
        {rentProviders && rentProviders.length > 0 ? (
          rentProviders.map((item, index) => (
            <div key={index} className='flex ml-2 sm:ml-10 justify-center items-center'>
              <img
                className='img w-12 rounded-full hover:border-1 hover:border-yellow-400'
                src={`${import.meta.env.VITE_IMAGE_URL}${item.logo_path}`}
                onClick={() => window.location.href = item.link}
              />
            </div>
          ))
        ) : (
          !loading && (
            <div className='flex ml-2 sm:ml-10 justify-center items-center'>
              <img
                className='img w-12 rounded-full hover:border-1 hover:border-yellow-400'
                src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
                alt='TMDb'
                onClick={() => window.location.href = 'https://www.themoviedb.org/'}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default watchlist;
