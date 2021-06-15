import express from 'express'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

const PORT = process.env.PORT || 3000

app.use('/', express.static(__dirname + '/public'))

app.get('/*', (req, res) => {
  res.sendFile(path.resolve('public', 'index.html'))
})

app.listen(PORT, () => console.log(`Server running on ${PORT}`))
