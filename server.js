const express = require('express')
const path = require('path')
const request = require('request')
const app = express()
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}

app.get('/teams/:teamName', function (req, res) {
    request('http://data.nba.net/10s/prod/v1/2018/players.json', function(err, response){
        const data = JSON.parse(response.body) 
        const relevantData = data.league.standard   
        let team = req.params.teamName
        let teamId = teamToIDs[team]
        let teamPlayers = relevantData.filter(r => r.teamId === teamId & r.isActive === true)
        let newTeamPlayers = teamPlayers.map(t => { return { firstName: t.firstName, lastName: t.lastName, jersey: t.jersey, pos:t.pos } })
        res.send(newTeamPlayers)
    })
})















app.listen(3000, () => console.log(`Server is up and running smoothly`))