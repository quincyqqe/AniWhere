import React, { useEffect, useState } from 'react'

import './Header.scss'

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div className={`header ${isScrolled ? 'scrolled' : ''}`}>
			<div className='header__logo'>
				<img src='/public/images/Color logo - no background.png' alt='' />
			</div>
			<div className='header__right-section'>
				<div className='header__search'>
					<img src='/public/images/search.svg' alt='search' />
				</div>
				<div className='header__avatar'>
					<img src='/public/images/avatar.png' alt='avatar' />
				</div>
			</div>
		</div>
	)
}

export default Header
