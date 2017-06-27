/**
 * Created by Administrator on 2017/6/16.
 */
var all = JSON.parse(sessionStorage.getItem("all"));
console.log(all);
for (var i = 0; i < all.length; i++) {
    $(".content").append(
        "<div class='role'>" +
            "<p class='role-name'>" + all[i]+ "</p>" +
            "<p class='role-num'>" + (i+1) + "号" + "</p>" +
        "</div>");
}
function startGame() {
    sessionStorage.setItem("allPlayers",JSON.stringify(allPlayers));
    window.location.href='task3-3.html';
}
var allPlayers = [];
var dieNum = [];
sessionStorage.setItem("dieNum",JSON.stringify(dieNum));
for (var a = 0; a < all.length; a++) {
    allPlayers[a] = {};
    allPlayers[a].id = all[a];
    allPlayers[a].status = "live";
    allPlayers[a].num = a + 1;
}
console.log(allPlayers);
