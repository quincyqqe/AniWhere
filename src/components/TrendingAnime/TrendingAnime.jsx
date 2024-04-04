import React, { useState, useRef } from 'react'
import useAnimeData from '../../hooks/useAnimeData'
import './TrendingAnime.scss'

const TrendingAnime = () => {
	const { animeList, error } = useAnimeData(
		'https://api.jikan.moe/v4/top/anime'
	)
	const [hoveredAnime, setHoveredAnime] = useState(null)
	const animeListRef = useRef(null)

	const scroll = scrollOffset => {
		animeListRef.current.scrollLeft += scrollOffset
	}

	if (error) {
		return <div className='error-message'>Error: {error.message}</div>
	}

	return (
		<div className='trending-anime'>
			<h2>Trending Anime</h2>

			<div className='anime-list' ref={animeListRef}>
				{animeList.map((anime, index) => (
					<div
						className='anime-item'
						key={index}
						onMouseEnter={() => setHoveredAnime(anime)}
						onMouseLeave={() => setHoveredAnime(null)}
					>
						<img src={anime.images?.webp?.image_url} alt={anime.title} />
						{hoveredAnime === anime && (
							<div className='anime-name-overlay'>
								<p>{anime.title}</p>
							</div>
						)}
					</div>
				))}
			</div>
			<button className='button-next' onClick={() => scroll(600)}>
				<img src='/public/images/pngwing.com.png' alt='' />
			</button>
			<button className='button-previous' onClick={() => scroll(-600)}>
				<img src='/public/images/pngwing.com.png' alt='' />
			</button>
		</div>
	)
}

export default TrendingAnime
