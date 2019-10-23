const fetchTeamData = function () {
    let input = $("#team-input").val()
    $.get(`teams/${input}`, function (teamData) {
    teamData.forEach(t => $("body").append(`<div>${t.firstName} ${t.lastName}
    </div><img src =https://nba-players.herokuapp.com/players/${t.lastName}/${t.firstName}><div>${t.pos}</div><div>${t.jersey}</div>`))
    })
}