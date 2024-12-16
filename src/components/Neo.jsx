// Neo.jsx

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import API from './API';

const apiURL = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-09-01&end_date=2024-11-14&api_key=fTXa1bg4VBf2Wc6dq05GzMOX3vM05gWVgfWYe0tQ";

async function getNeo() {
  return API(apiURL);
}

function Neo() {
  // Queries
  const query = useQuery({ queryKey: ['neo'], queryFn: getNeo })

  return (
    <section>
      <h3>NASA's Neo feed</h3>

    </section>
  )
}

export default Neo;