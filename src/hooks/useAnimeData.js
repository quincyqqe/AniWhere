// useAnimeData.js

import { useState, useEffect } from 'react'
import axios from 'axios'

const useAnimeData = url => {
	const [animeList, setAnimeList] = useState([])
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(url)
				setAnimeList(response.data.data)
			} catch (error) {
				setError(error)
			}
		}

		fetchData()
	}, [url])

	return { animeList, error }
}

export default useAnimeData
