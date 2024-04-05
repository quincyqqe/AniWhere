
import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.scss'

const Modal = ({ isOpen, onClose }) => {
	if (!isOpen) return null

	return ReactDOM.createPortal(
		<div className='modal-overlay' onClick={onClose}>
			<div className='modal-content' onClick={e => e.stopPropagation()}>
				<span className='close-button' onClick={onClose}>
					&times;
				</span>
				<h2>Episode 1</h2>
				<p>This is the content of Episode 1.</p>
			</div>
		</div>,
		document.getElementById('modal-root')
	)
}

export default Modal
