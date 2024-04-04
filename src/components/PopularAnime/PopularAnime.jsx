import { useEffect, useState } from 'react'
import './PopularAnime.scss'
import axios from 'axios'

const PopularAnime = () => {
	const [randomIndex, setRandomIndex] = useState(null)
	const [anime, setAnime] = useState(null)

	useEffect(() => {
		axios
			.get('https://animenewsnetwork.p.rapidapi.com/api.xml')
			.then(res => {
				console.log(res)
				// if (res.data.data.length > 0) {
				// 	const index = Math.floor(Math.random() * res.data.data.length)
				// 	setRandomIndex(index)
				// 	setAnime(res.data.data[index])
				// }
			})
			.catch(err => console.log(err))
	}, [])

	return (
		<div className='main-container'>
			{/* {anime && (
				<div>
					<img src={anime.images.webp.image_url} alt={anime.title} />
					<p>{anime.title}</p>
				</div>
			)} */}
		
		</div>
	)
}

export default PopularAnime
