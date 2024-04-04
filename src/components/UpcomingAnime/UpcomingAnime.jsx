import useAnimeData from '../../hooks/useAnimeData'
import './UpcomingAnime.scss'

const UpcomingAnime = () => {
	const { animeList, error } = useAnimeData(
		'https://api.jikan.moe/v4/seasons/upcoming'
	)

	// if (error) {
	// 	return <div className='error-message'>Error: {error.message}</div>
	// }

    return (
			<section className='upcoming-anime'>
				<div className='upcoming-anime__header'>
					
						<h2>Upcoming Anime</h2>
						<p>View more</p>
					</div>
		
			</section>
		)
}

export default UpcomingAnime
