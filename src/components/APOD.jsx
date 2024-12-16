// APOD.jsx

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import API from './API';

const apiURL = "https://api.nasa.gov/planetary/apod?api_key=fTXa1bg4VBf2Wc6dq05GzMOX3vM05gWVgfWYe0tQ";

async function getApod() {
  return API(apiURL);
}

function APOD() {
  // Queries
  const query = useQuery({ queryKey: ['apod'], queryFn: getApod })

  return (
    <section>
      <h3>NASA's Astronomy Picture of the Day</h3>
      <p>Today's date is {new Date().toISOString().slice(0, 10)}</p>
        {query.isLoading ? (
          <p>Loading...</p>
        ) : query.isError ? (
          <p>Error: {query.error.message}</p>
        ) : (
      <>
        <h4>{query.data.title}</h4>
        <img src={query.data.url} alt={query.data.title} />
        <p>{query.data.explanation}</p>
      </>
      )}
    </section>
  )
}

export default APOD;