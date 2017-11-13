import React from 'react'

const Landing = () => {
	return (
		<div>
			<div>I'm the best home component</div>
			<button
				onClick={() => {
					console.log('Landing')
				}}
			>
				Landing page button
			</button>
		</div>
	)
}

export default Landing
