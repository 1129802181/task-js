/**
 * Created by Administrator on 2017/6/19.
 */
var allPlayers = JSON.parse(sessionStorage.getItem("allPlayers"));
var days = JSON.parse(sessionStorage.getItem("days"));
var day = days + 1;
var Num = ["一","二","三","四","五","六","七","八","九","十","十一","十二","十三","十四","十五","十六","十七"];
var b1 = JSON.parse(sessionStorage.getItem("b1"));
// 在3-2页面先定义一个空数组dieNum，存储后，再取出来，然后将每次dieNums中的数据添加到dieNum数组中，但是还需要去重
var dieNums = JSON.parse(sessionStorage.getItem("dieNums"));
console.log(dieNums);
var dieNum = JSON.parse(sessionStorage.getItem("dieNum"));
if (dieNums == null) {
}else {
    dieNum.push(dieNums[dieNums.length-1]);
}
// 最简单数组去重法
var n = []; //一个新的临时数组
function unique(array){
//遍历当前数组
    for(var i = 0; i < array.length; i++){
//如果当前数组的第i已经保存进了临时数组，那么跳过，
//否则把当前项push到临时数组里面
        if (n.indexOf(array[i]) == -1) {
            n.push(array[i]);
        }
    }
    return n;
}
unique(dieNum);
console.log(n);
sessionStorage.setItem("n",JSON.stringify(n));
sessionStorage.setItem("dieNum",JSON.stringify(dieNum));
for (var a = 0; a < day; a++) {
    $(".main").append('<div class="days">' + "第" + Num[a] + "天" + '</div>'+
        '<div class="content">'+
        '<div class="content1">'+
        '<div class="content2">'+
        '<div class="content3" onclick="oneClick1()" id="a1">'+
        '<div class="content-triangle"></div>'+
        '<div class="moon"><img src="../images/moon.png" alt=""></div>'+
        '杀手杀人'+
        '</div>'+
        '<br>'+
        '<div class="content4" onclick="oneClick2()">'+
        '<div class="content-triangle"></div>'+
        '<div class="sun"><img src="../images/sun.png" alt=""></div>'+
        '<p id="a2">亡灵发表遗言</p>'+
        '</div>'+
        '<br>'+
        '<div class="content3" onclick="oneClick3()" id="a3">'+
        '<div class="content-triangle"></div>'+
        '玩家依次发言'+
        '</div>'+
        '<br>'+
        '<div class="content3" onclick="oneClick4()" id="a4">'+
        '<div class="content-triangle"></div>'+
        '全民投票'+
        '</div>'+
        '</div>'+
        '<div class="line">' + '</div>'+
        '</div>'+ '</div>');
        sessionStorage.removeItem("b1");  //手动清除浏览器缓存

}
//添加点击隐藏事件；
var d = $(".days");
var m = $(".content");
for (var e = 0; e < day; e++) {
    $(m[e-1]).hide();  //跳转到下一天的时候，将之前天数的流程默认隐藏
    d[e].index = e;
    d[e].onclick = function () {
        $(m[this.index]).toggle();
    }
}
console.log(allPlayers);
var content = $(".content2");
//将之前的流程按钮颜色均变成灰色
for (var c = 1; c < content.length; c++) {
    $(content[c-1]).css({"pointer-events":"none","cursor":"default"});//将之前的所有流程按钮禁止点击
    $(content[c-1]).children(".content3").css("background-color","#999999");
    $(content[c-1]).children(".content4").css("background-color","#999999");
    $(content[c-1]).children(".content4").children(".content-triangle").css("border-right-color","#999999");
    $(content[c-1]).children(".content3").children(".content-triangle").css("border-right-color","#999999");

}
//根据死亡人数来动态插入死亡玩家信息，注意content数组中指数的变化
if (n.length == 0) {
} else {
    for (var i = 0; i < n.length; i++) {
        if (i%2 == 0 ) {
            $(content[i/2]).children("#a1").after("<p class='die-color'>" + n[i] + "号被杀死 ，" + n[i] + "号是水民" + "</p>");
        }else if (i%2 == 1) {
            $(content[(i-1)/2]).children("#a4").after("<p class='die-color'>" + n[i] + "号被投死 ，" + n[i] + "号是" + allPlayers[n[i]-1].id  + "</p>");
        }
    }
}
//当杀手杀人后跳转到该页面时，判断之前杀手杀人按钮的颜色，并将其变成灰色
if ( b1 == "rgb(153, 153, 153)" ){
    $(content[content.length-1]).children("#a1").css("background-color","#999999");
    $(content[content.length-1]).children("#a1").children(".content-triangle").css("border-right-color","#999999");
}

// 为每一个流程按钮添加点击事件
function oneClick1() {
    var b = $(content[content.length-1]).children(".content3").css("background-color");
    if (b == "rgb(153, 153, 153)") {
        alert("请按照顺序点击！")
    } else {
        $(content[content.length-1]).children(".content3").css("background-color","#999999");
        $(content[content.length-1]).children(".content3").children(".content-triangle").css("border-right-color","#999999");
        b = $(content[content.length-1]).children(".content3").css("background-color");
        sessionStorage.setItem("b1",JSON.stringify(b));
        window.location.href='killPeople.html'
    }
}

function oneClick2() {
    if ( $(content[day-1]).children(".content3:eq(0)").css("background-color") == "rgb(36, 167, 198)") {
        alert("请按照顺序点击！")
    }else {
        $(".content4").css("background-color","#999999");
        $(".content4 .content-triangle").css("border-right-color","#999999");
        alert("亡灵发表遗言并表明身份！")
    }

}
function oneClick3() {
    if ($(content[day-1]).children(".content3:eq(0)").css("background-color") == "rgb(36, 167, 198)" || $(content[day-1]).children(".content4").css("background-color") == "rgb(36, 167, 198)" ) {
        alert("请按照顺序点击！")
    }else {
        $(content[content.length-1]).children("#a3").css("background-color","#999999");
        $(content[content.length-1]).children("#a3").children(".content-triangle").css("border-right-color","#999999");
        alert("玩家发言讨论！");
    }

}
function oneClick4() {
    if ($(content[day-1]).children(".content3:eq(0)").css("background-color") == "rgb(36, 167, 198)" || $(content[day-1]).children(".content3:eq(1)").css("background-color") == "rgb(36, 167, 198)" || $(content[day-1]).children(".content4").css("background-color") == "rgb(36, 167, 198)" ) {
        alert("请按照顺序点击！")
    }else {
        sessionStorage.setItem("days", JSON.stringify(day));
        window.location.href = 'vote.html'
    }
}
function gameOver() {
    if (confirm("确定结束该游戏吗？")) {
        sessionStorage.removeItem("b1");  //手动清除浏览器缓存
        sessionStorage.removeItem("days");
        sessionStorage.removeItem("dieNum");
        sessionStorage.removeItem("dieNums");
        sessionStorage.removeItem("n");
        window.location.href='task2-1.html';
    }
}
