import './SpotlightSection.scss'

const SpotlightSection = () => {
	return (
		<div className='spotlight-section'>
			<img
				className='spotlight-background'
				src='/public/images/spotlight/wallpapersden.com_sung-jin-woo-digital-solo-leveling_1927x1080.jpg'
				alt='banner'
			/>
			<div className='container'>
				<>
					<img
						src='/public/images/spotlight/sololeveling.png'
						alt='Solo Leveling'
						className='spotlight-image'
					/>
					<div className='spotlight-details-row'>
						<p className='spotlight-rating'>92% Match</p>
						<p className='spotlight-year'>2024</p>
						<p className='spotlight-episodes'> 12 episodes</p>
					</div>
					<p className='spotlight-description'>
						They say whatever doesn’t kill you makes you stronger, but that’s
						not the case for the world’s weakest hunter Sung Jinwoo. After being
						brutally slaughtered by monsters in a…
					</p>
					<button className='spotlight-button'>Watch Episode 1</button>
					<button className='spotlight-button__detail'>More Information</button>
				</>
			</div>
		</div>
	)
}

export default SpotlightSection
