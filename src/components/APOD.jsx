// APOD.jsx

import axios from 'axios';
import { useQuery } from '@tanstack/react-query'

const apiURL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

async function getApod() {
  axios.get(apiURL)
  try {
    const response = await axios.get(apiURL);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
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