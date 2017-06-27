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
//定义一个所有玩家的数组，数组中的每一项都是对象，对象中包含玩家的状态，id，号码；
for (var a = 0; a < all.length; a++) {
    allPlayers[a] = {};
    allPlayers[a].id = all[a];
    allPlayers[a].status = "live";
    allPlayers[a].num = a + 1;
}
var dieNum = [];
//在该页面定义一个死亡玩家的空数组，并存储，便于在其他页面增加死亡玩家号码；
sessionStorage.setItem("dieNum",JSON.stringify(dieNum));
console.log(allPlayers);
