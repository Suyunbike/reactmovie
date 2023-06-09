import React from 'react'

const MovieItem = ({item }) => {
  return (
    <div className='item'>
        <img src={item?.Poster} alt={item?.Title} />

        <div>
            <h1>{item?.Title}</h1>
            <div className='details-info'>
                <span>{item?.Type}</span>
                <span>{item?.Year}</span>
            </div>
        </div>
    </div>
  )
}

export default MovieItem