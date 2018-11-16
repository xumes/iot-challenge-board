const express = require('express')
const router = express.Router()
const axios = require('axios')

const BASE_URL = 'https://iot-challenge-api.eu-de.mybluemix.net'  // /getdata    /getalerts
const url = `${BASE_URL}/getdata`

router.get('/weather', (req, res) => {
  axios
    .get(url)
    .then(data => {
      res.json(data.data)
    })
    .catch(error => {
      res.json({error})
    })

})

module.exports = router;