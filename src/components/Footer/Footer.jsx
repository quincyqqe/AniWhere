import './Footer.scss'

const Footer = () => {
	return (
		<footer>
			<div className='footer-about'>
				<div className='footer-container'>
					<div className='footer-top'>
						<a href='#' className='footer-logo'>
							<img src='/logo.png' alt='' />
						</a>
						<div className='footer-contact'>
							<a href='#'>
								<img src='/telegram.png' alt='' />
							</a>
						</div>
					</div>
					<div className='about-text'>
						<p>
							AniWhere does not store any files on our server, we only linked to
							the media which is hosted on 3rd party services.
						</p>
						<p className='copyright'>© AniWhere. All rights reserved.</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
