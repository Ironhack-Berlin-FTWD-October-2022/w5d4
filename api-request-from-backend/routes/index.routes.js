const express = require('express');
const router = express.Router();
const axios = require("axios")

/* GET home page */
router.get("/", (req, res, next) => {
  // Request data from API and render it in the view
  axios.get("https://api.kanye.rest/")
      .then(response => {
      // res.send(response.data.quote)

      const quote = response.data.quote
      
      // Render data in the view
      res.render("index", { quote })
      })
      .catch(err => next(err))
})

module.exports = router;
