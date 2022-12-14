
import {useLoaderData, useParams } from 'react-router-dom';

export const Movie = () => {
  const { movieId } = useParams()
  const { name, duration, id: mid} = useLoaderData();
  
  return (
    <>
    <h1>The Movie Page</h1>
    <p>Movie: {movieId}</p>
    <p>{mid}: {name}, {duration}</p>
    </>
  )
}
