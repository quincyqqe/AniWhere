import { useState, useEffect, useRef } from 'react'
import axios from 'axios'

const useAnimeData = url => {
	const [animeList, setAnimeList] = useState([])
	const [error, setError] = useState(null)
	const isMounted = useRef(false)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(url)
				if (isMounted.current) {
					setAnimeList(response.data.data)
				}
			} catch (error) {
				if (isMounted.current) {
					setError(error)
				}
			}
		}

		if (!isMounted.current) {
			fetchData()
			isMounted.current = true
		}
	}, [url])

	return { animeList, error }
}

export default useAnimeData
