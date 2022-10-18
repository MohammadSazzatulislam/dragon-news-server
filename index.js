const express = require('express');
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const category = require('./data/dragonNews.json')


app.get('/', (req, res) => {
    res.send('dragon news coming soon')
})

app.get('/news-category', (req, res) => {
    res.send(category)
})


app.listen(port, () => {
    console.log('Port is running on :', port );
})