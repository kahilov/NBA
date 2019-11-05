const express = require('express')
const router = express.Router()
const request = require('request')
// const teamToIDs = require('../server')

const teamToIDs = {
    lakers: "1610612747",
    warriors: "1610612744",
    heat: "1610612748",
    suns: "1610612756"
}

router.get('/teams/:teamName', function (req, res) {
    request('http://data.nba.net/10s/prod/v1/2018/players.json', function (err, response) {
        const data = JSON.parse(response.body)
        const relevantData = data.league.standard
        let team = req.params.teamName
        let teamId = teamToIDs[team]
        let teamPlayers = relevantData.filter(r => r.teamId === teamId & r.isActive === true)
        let teamData = teamPlayers.map(t => { return { firstName: t.firstName, lastName: t.lastName, jersey: t.jersey, pos: t.pos } })
        res.send(teamData)
        playersContainer.players = teamData
    })
})
router.put('/teams', function (req, res) {
    let teamName = req.body.teamName
    let teamId = req.body.teamId
    teamToIDs[teamName] = teamId
    res.send(JSON.stringify(teamToIDs))
})
const dreamTeam = []
router.get('/dreamTeam', function (req, res) {
    res.send(dreamTeam)
})

router.post('/roster', function (req, res) {
    let player = req.body
    console.log(player)
    dreamTeam.push(player)
    res.send(JSON.stringify(dreamTeam))
})

module.exports = router
