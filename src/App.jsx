import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Search from './components/Search/Search'
import MovieItem from './components/Search/movies/MovieItem'
import useDebounce from './hooks/useDebounced'
import Movies from './components/Search/movies/Movies'
const App = () => {
    const [search, setSearch] = useState('')
    const debounceSearch = useDebounce(search, 500)
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      setLoading(true)
      axios
      .get (`https://www.omdbapi.com/?s=${debounceSearch}=&apikey=9446507`)
      .then(res => {
        setMovies(res.data.Search)
      })
      .finally(() => setLoading(false))
    }, [debounceSearch])

  return (
    <div className='container'>
      <Search search={search} setSearch={setSearch} />
      {!loading && !movies ? (
        <h1 className='center my-12 flex h-[400px] items-center justify-center rounded-md bg-slate-50 text-3xl text-slate-400'>
          Movies not found!!
        </h1>
      ) : (
        <Movies movies={movies} loading={loading} />
      )}
    </div>
  )
}

export default App
