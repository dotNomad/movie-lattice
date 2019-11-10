const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.get('/popular', (req, res) => {
    const uri = new URL('https://api.themoviedb.org/3/movie/popular?api_key=00f3438ab5aadb417c0f472f81b17092&language=en-US&page=1');
    fetch(uri)
        .then(response => response.json())
        .then(data => res.json(data));
});

module.exports = router;
