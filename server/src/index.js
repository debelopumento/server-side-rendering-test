import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Home from './client/components/Home'
import Landing from './client/components/Landing'

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
	const content = renderToString(<Home />)
	const html = `
		<html>
			<head></head>
			<body>
				<div id="root">${content}</div>
				<script src="bundle.js"></script>
			</body>
		</html>
	`

	res.send(html)
})

app.get('/landing', (req, res) => {
	const content = renderToString(<Landing />)
	res.send(content)
})

app.listen(3000, () => {
	console.log('Listening on port 3000')
})
