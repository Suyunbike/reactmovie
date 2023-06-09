import { useEffect, useState } from 'react'

const useDebounce = (value, delay) => {
 const [debouncedValue, setDebouncedValue] = useState(value)

 useEffect(() => {
  const timeout = setTimeout(() => setDebouncedValue(value), delay || 500)

  return () => {
   clearTimeout(timeout)
  }
 }, [value, delay])

 return debouncedValue
}

export default useDebounce