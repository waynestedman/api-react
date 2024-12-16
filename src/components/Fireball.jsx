// APOD.jsx

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import API from './API';

const apiURL = "https://ssd-api.jpl.nasa.gov/fireball.api?limit=20";

async function getFireball() {
  return API(apiURL);
}

function APOD() {
  // Queries
  const query = useQuery({ queryKey: ['fireball'], queryFn: getFireball })

  return (
    <section>
      <h3>NASA's Fireball Data API</h3>
      
    </section>
  )
}

export default APOD;