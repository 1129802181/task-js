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
        var dieNums = [];//每次清空一次数组，保证数组中只获取最后点击的玩家
        //将最后一次点击的玩家的号码获取出来，即投死的玩家号码，放到死亡玩家数组中
        dieNums.push(allPlayers[this.index].num);
        sessionStorage.setItem("dieNums",JSON.stringify(dieNums));
        if (allPlayers[this.index].status == "die" || allPlayers[this.index].status == "voted" ) {
            alert("他已经死了，换个人吧！")
        }else {
            //lastNum是上次点击的玩家的数组下标；lastNum != undefined成立，说明之前点击了别的玩家，则将之前点击的玩家状态还原；
            if (lastNum != undefined){
                $(allPeople[lastNum]).css("background-color","#f5c97b");
                allPlayers[lastNum].status = "live";
            }
            //将当前点击的玩家背景色更改，状态更改，并将当前点击的玩家的数组下标获取，用于判断如果玩家更改杀死的人员时，将之前的玩家背景色还原，状态还原；
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
    //循环判断玩家对象中，所有活着的杀手和水民的数量，再比较两者的数量，跳转到对应页面；
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
}