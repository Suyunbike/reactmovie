import React from 'react'
import Skeleton from '../../../UI/Skeleton'
import MovieItem from './MovieItem'
import './Movies.scss'
const fakeArray = [1, 2, 4, 9, 5, 7, 34, 2342, 234234, 12]
const Movies = ({movies, loading }) => {
  console.log(movies);
  return (
    <div className='movies'>
     {loading 
     ? fakeArray.map(item => <Skeleton key={item} />)
     : movies?.map(item => <MovieItem key={item.imdbId} item={item} />)
     }
    </div>
  )
}

export default Movies