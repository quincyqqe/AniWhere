import React, { useState } from 'react'

import './Sidebar.scss'

const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen)
	}

	return (
		<div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
			<div className='sidebar__toggle' onClick={toggleSidebar}>
				<img src='/images/pngwing.com.png' alt='arrow' />
			</div>
			{isSidebarOpen && (
				<div className='sidebar__menu'>
					<ul>
						<li>Home</li>
						<li>Movies</li>
						<li>Series</li>
					</ul>
				</div>
			)}
		</div>
	)
}

export default Sidebar
