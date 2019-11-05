

const fetchTeamData = function () {
    let input = $("#team-input").val()
    $.get(`teams/${input}`, function (teamData) {
        $("#players").empty()
        const source = $('#player-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({ teamData });
        $('#players').append(newHTML);
    })
}
const fetchDreamTeamData = function () {
    $.get('/dreamTeam', function (dreamTeam) {
        $("#dreamTeam").empty()
        const source = $('#dreamTeam-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({ dreamTeam });
        $('#dreamTeam').append(newHTML);
    })
}
$("#players").on("click", ".flex-container", function () {
    let playerData = $(this).data()
    playerData ={firstName:playerData.firstname ,lastName:playerData.lastname,jersey:playerData.jersey,pos:playerData.pos}
        $.post('/roster',playerData)
})
