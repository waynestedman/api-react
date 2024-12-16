// Neo.jsx

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import API from './API';

const apiURL = "https://api.nasa.gov/EPIC/api/natural/images?api_key=fTXa1bg4VBf2Wc6dq05GzMOX3vM05gWVgfWYe0tQ";

async function getEpic() {
  return API(apiURL);
}

function Epic() {
  // Queries
  const query = useQuery({ queryKey: ['epic'], queryFn: getEpic })

  return (
    <section>
      <h3>NASA's Earth Polychromatic Imaging Camera (EPIC) daily image</h3>
      {query.isLoading ? (
          <p>Loading...</p>
        ) : query.isError ? (
          <p>Error: {query.error.message}</p>
        ) : (
      <>
        <h4>{query.data[0].date}</h4>
        <img src={query.data.url} alt={query.data.title} />
      </>
      )}
    </section>
  )
}

export default Epic;