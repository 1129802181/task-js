/**
 * Created by Administrator on 2017/6/22.
 */
var all = JSON.parse(sessionStorage.getItem("all"));
var allPlayers = JSON.parse(sessionStorage.getItem("allPlayers"));
var n = JSON.parse(sessionStorage.getItem("n"));
console.log(allPlayers);
console.log(all);
for (var i = 0; i < all.length; i++) {
    $(".content").append(
        "<div class='role'>" +
        "<p class='role-name'>" + all[i]+ "</p>" +
        "<p class='role-num'>" + (i+1) + "号" + "</p>" +
        "</div>");
    var allPeople = $(".role-name");
    if (allPlayers[i].status == "die" || allPlayers[i].status == "voted") {
        $(allPeople[i]).css("background-color","red");
    }
}
console.log(allPeople);
var lastNum;
for (var j = 0; j < allPeople.length; j++) {
    allPeople[j].index = j ;
    allPeople[j].onclick = function () {
        console.log(allPlayers[this.index].status);
        var dieNums = [];
        dieNums.push(allPlayers[this.index].num);
        n.push(dieNums[dieNums.length-1]);
        sessionStorage.setItem("n",JSON.stringify(n));
        sessionStorage.setItem("dieNums",JSON.stringify(dieNums));
        if (allPlayers[this.index].status == "die" || allPlayers[this.index].status == "voted" ) {
            alert("他已经死了，换个人吧！")
        }else {
            if (lastNum != undefined){
                $(allPeople[lastNum]).css("background-color","#f5c97b");
                allPlayers[lastNum].status = "live";
            }
            $(allPeople[this.index]).css("background-color","red");
            allPlayers[this.index].status = "voted";
            lastNum = this.index;
            console.log(allPlayers);
        }
    }
}

var killer = 0;
var water = 0;
function vote() {
    sessionStorage.setItem("allPlayers",JSON.stringify(allPlayers));
    for (var i = 0; i < allPlayers.length; i++) {
        if (allPlayers[i].status == "live") {
            if (allPlayers[i].id == "水民") {
                water++
            } else {
                killer++
            }
        }
    }
    if (killer == 0) {
        var result = 1;
        sessionStorage.setItem("result",JSON.stringify(result));
        alert("游戏结束，水民胜利！");
        window.location.href='task4.html';
    } else if (killer == water) {
        alert("游戏结束，杀手胜利！");
        window.location.href='task4.html';
    } else {
        window.location.href='task3-3.html';
    }
    console.log(killer);
}