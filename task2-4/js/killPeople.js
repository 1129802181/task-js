/**
 * Created by Administrator on 2017/6/20.
 */
var all = JSON.parse(sessionStorage.getItem("all"));
var allPlayers = JSON.parse(sessionStorage.getItem("allPlayers"));
var n = JSON.parse(sessionStorage.getItem("n"));
console.log(allPlayers);

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
var lastNum;
for (var j = 0; j < allPeople.length; j++) {
    allPeople[j].index = j ;
    allPeople[j].onclick = function () {
        var dieNums = [];//每次清空一次数组，保证数组中只获取最后点击的玩家
        //将最后一次点击的玩家的号码获取出来，即投死的玩家号码，放到死亡玩家数组中
        dieNums.push(allPlayers[this.index].num);
        sessionStorage.setItem("dieNums",JSON.stringify(dieNums));
        if (this.innerHTML == "杀手" || allPlayers[this.index].status == "die" || allPlayers[this.index].status == "voted"  ) {
            if (allPlayers[this.index].status == "die" || allPlayers[this.index].status == "voted") {
                alert("他已经死了，换个人吧！")
            }else {
                alert("这样不合适，还是选个水民吧！")
            }
        }else {
            //lastNum是上次点击的玩家的数组下标；lastNum != undefined成立，说明之前点击了别的玩家，则将之前点击的玩家状态还原；
            if (lastNum != undefined){
                $(allPeople[lastNum]).css("background-color","#f5c97b");
                allPlayers[lastNum].status = "live";
            }
            //将当前点击的玩家背景色更改，状态更改，并将当前点击的玩家的数组下标获取，用于判断如果玩家更改杀死的人员时，将之前的玩家背景色还原，状态还原；
            $(allPeople[this.index]).css("background-color","red");
            allPlayers[this.index].status = "die";
            lastNum = this.index;
        }
        console.log(dieNums);
    };
}
var killer = 0;
var water = 0;
function die() {
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
   if (killer == water) {
       var result = 2;
       sessionStorage.setItem("result",JSON.stringify(result));
        alert("游戏结束，杀手胜利！");
        window.location.href='task4.html';
    } else {
        window.location.href='task3-3.html';
    }
    console.log(killer);
}