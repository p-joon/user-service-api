const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json([
	{
		name: 'test1',
		contact: 'test1@test.test'
	},
	{
		name: 'test2',
		contact: 'test2@test.test'
	},
	{
		name: 'test3',
		contact: 'test3@test.test'
	}
]))

app.listen(port, () => {
	  console.log(`Example app listening at http://localhost:${port}`)
})
