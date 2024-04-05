import React, { useState } from 'react'
import useAnimeData from '../../hooks/useAnimeData'
import './UpcomingAnime.scss'

const UpcomingAnime = () => {
	const { animeList, error } = useAnimeData(
		'https://api.jikan.moe/v4/seasons/upcoming'
	)
	const [showAll, setShowAll] = useState(false)

	const visibleAnimeList = showAll ? animeList : animeList.slice(0, 12)

	const toggleView = () => {
		setShowAll(!showAll)
	}

	if (error) {
		return <div className='error-message'>Error: {error.message}</div>
	}

	return (
		<div className='upcoming-anime-container'>
			<div className='upcoming-anime-header'>
				<h2>Top Upcoming</h2>
				{!showAll && animeList.length > 2 && (
					<button onClick={toggleView}>View More</button>
				)}
			</div>

			<div className='upcoming-anime-list'>
				{visibleAnimeList.map((anime, index) => (
					<div className='upcoming-anime-item' key={index}>
						<img src={anime.images?.webp?.large_image_url} alt={anime.title} />
						<div className='upcoming-anime-detail'>
							<h3>{anime.title}</h3>

							<p>{anime.type ? anime.type : '(? type)'}</p>
							<p>{anime.episodes ? anime.episodes : '(? eps)'}</p>
							<p>{anime.year ? anime.year : '(? year)'}</p>
						</div>
					</div>
				))}
				
			</div>
		</div>
	)
}

export default UpcomingAnime
