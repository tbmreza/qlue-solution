const express = require('express')
const path = require('path')
const { get } = require('request')

const app = express()



app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const viewsDir = path.join(__dirname, 'views')
app.use(express.static(viewsDir))
app.use(express.static(path.join(__dirname, './public')))
app.use(express.static(path.join(__dirname, './face-api/images')))
app.use(express.static(path.join(__dirname, './face-api/media')))
app.use(express.static(path.join(__dirname, './face-api/weights')))
app.use(express.static(path.join(__dirname, './face-api/dist')))

// Routing
app.get('/', (req, res) => res.redirect('/video'))
app.get('/video', (req, res) => res.sendFile(path.join(viewsDir, 'video.html')))
app.get('/webcam', (req, res) => res.sendFile(path.join(viewsDir, 'webcam.html')))



app.listen(3000, () => console.log('Server running on http://localhost:3000/'))  