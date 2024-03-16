const express = require('express')
const path = require('path')
const app = express()
const fs = require('fs')
const ytdl = require('ytdl-core')

app.use(express.static(path.join(__dirname, 'index')))

// /watch to index/watch.html
app.get('/watch', (req, res) => {
    res.sendFile(path.join(__dirname, 'index', 'watch.html'))
})

app.listen(3002, () => {
    console.log('App is listening on port 3002');
});