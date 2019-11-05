const express = require('express')
const path = require('path')
const app = express()
const api = require('./routes/api')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname,"..", 'dist')))
app.use(express.static(path.join(__dirname,"..", 'node_modules')))
app.use('/', api)
mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost/yourDB');

const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}















module.exports = teamToIDs
const PORT = 8080
app.listen(process.env.PORT || PORT);