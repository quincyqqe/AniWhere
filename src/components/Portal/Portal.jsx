import React from 'react'
import ReactDOM from 'react-dom'

const Portal = ({ children }) => {
	const portalRoot = document.getElementById('portal-root')

	if (!portalRoot) return (
        <div className='error-message'>Error: Portal root not found</div>
    )

	return ReactDOM.createPortal(children, portalRoot)
}

export default Portal
