/**
 * Created by Administrator on 2017/6/26.
 */
var allPlayers = JSON.parse(sessionStorage.getItem("allPlayers"));
var n = JSON.parse(sessionStorage.getItem("n"));
var days = JSON.parse(sessionStorage.getItem("days"));
var result = JSON.parse(sessionStorage.getItem("result"));
console.log(n);
console.log(days);
console.log(allPlayers);
if (result == 1) {
    $(".win-page").append(
        "<img src='../images/waterWin.png'>");
    $(".win-page").after(
        "<p class='nb-p'>" + "太棒了！终于把可恶的杀手都干掉了，为死去的水民复仇了，水民万岁！" + "</p>");
}else {
    $(".win-page").append(
        "<img src='../images/killerWin.png'>");
    $(".win-page").after(
        "<p class='nb-p'>" + "太棒了！你知道么？在捉鬼游戏中只有20%的杀手取得游戏最终的胜利哦！" + "</p>");
}
var m = Math.round(n.length/2);
for (var day = 0; day < m; day++) {
    if (day == parseInt(n.length/2) && (n.length%2 == 1)) {
        $(".content").append(
            "<div class='day'>" +
            "<h3>" + "第" + (day+1) + "天" + "</h3>" +
            "<p class='time1'>" + "晚上：" + n[day*2] + "号被杀手杀死，"+ n[day*2]  + "号是水民" + "</p>" + "<br>" + "</div>");
    }else {
        $(".content").append(
            "<div class='day'>" +
            "<h3>" + "第" + (day+1) + "天" + "</h3>" +
            "<p class='time1'>" + "晚上：" + n[day*2] + "号被杀手杀死，"+ n[day*2]  + "号是水民" + "</p>" +
            "<p class='time1'>" + "白天：" + n[day*2+1] +"号被全民投票投死，"+ n[day*2+1]  + "号是" + allPlayers[n[day*2+1]-1].id + "</p>" + "<br>" + "</div>");
    }
}
function again() {
    sessionStorage.removeItem("b1");  //手动清除浏览器缓存
    sessionStorage.removeItem("days");
    sessionStorage.removeItem("dieNum");
    sessionStorage.removeItem("dieNums");
    sessionStorage.removeItem("n");
    window.location.href = 'task2-1.html';
}