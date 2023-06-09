import React from 'react'
import './Search.scss'

const Search = ({ setSearch }) => {
  return (
   <label className='search'>
    <i className='bx bx-search-alt-2'></i>
    <input
    onChange={e => setSearch(e.target.value)}
     type="text" placeholder='Enter your favourite cinema name...' />
   </label>
  )
}

export default Search