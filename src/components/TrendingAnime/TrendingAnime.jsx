import React, { useState, useRef, useEffect } from 'react'
import useAnimeData from '../../hooks/useAnimeData'
import './TrendingAnime.scss'


const TrendingAnime = () => {
	const { animeList, error } = useAnimeData(
		'https://api.jikan.moe/v4/top/anime'
	)
	const [hoveredAnime, setHoveredAnime] = useState(null)
	const [isHovered, setIsHovered] = useState(false)
	const [scrollLeft, setScrollLeft] = useState(0) 
	const animeListRef = useRef(null)
	const trendingAnimeRef = useRef(null)

	const scroll = scrollOffset => {
		animeListRef.current.scrollLeft += scrollOffset
		trendingAnimeRef.current.style.paddingLeft = '0px'
	}

	const handleScroll = () => {
		setScrollLeft(animeListRef.current.scrollLeft)
	}

	useEffect(() => {
		animeListRef.current.addEventListener('scroll', handleScroll) 
		return () => {
			animeListRef.current.removeEventListener('scroll', handleScroll) 
		}
	}, [])

	if (error) {
		return <div className='error-message'>Error: {error.message}</div>
	}

	return (
		<div
			className='trending-anime'
			ref={trendingAnimeRef}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<h2>Trending Anime</h2>

			<div className='anime-list' ref={animeListRef}>
				{animeList.map((anime, index) => (
					<div
						className='anime-item'
						key={index}
						onMouseEnter={() => {
							setHoveredAnime(anime)
							setIsHovered(true)
						}}
						onMouseLeave={() => {
							setHoveredAnime(null)
							setIsHovered(false)
						}}
					>
						<img src={anime.images?.webp?.large_image_url} alt={anime.title} />
					
							{(hoveredAnime === anime || isHovered) && (
								<div className='anime-name-overlay'>
									<p>{anime.title}</p>
								</div>
							)}
					
					</div>
				))}
			</div>
			{scrollLeft > 0 && ( // Проверяем, можно ли прокрутить влево, если да, то отображаем кнопку "Previous"
				<button className='button-previous' onClick={() => scroll(-600)}>
					<img src='/arrow.png' alt='' />
				</button>
			)}
			<button className='button-next' onClick={() => scroll(600)}>
				<img src='/arrow.png' alt='' />
			</button>
		</div>
	)
}

export default TrendingAnime
