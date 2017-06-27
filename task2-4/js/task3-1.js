/**
 * Created by Administrator on 2017/6/16.
 */
//获取上个页面的身份信息
var all = JSON.parse(sessionStorage.getItem("all"));
console.log(all);
var clickNum = 0;
var players = 1;
//注意玩家数量和点击数量，因为这两个数不是同步变化的
function lookStatus() {
    if (clickNum % 2 == 0 && clickNum < (all.length*2 - 1)) {
        players++;
        $(".status").css("opacity","1");
        $(".player-tip img").css("opacity","0");
        $("#people").text(all[players-2]);
        $(".player-num").text(players-1);
        $("#look").text("隐藏并传递给" + players  + "号");
        if (clickNum == (all.length*2 - 2)) {
            $("#look").text("法官查看")
        }
    } else if (clickNum % 2 == 1 && clickNum < (all.length*2 - 1)) {
        $(".status").css("opacity","0");
        $(".player-tip img").css("opacity","1");
        $("#look").text("查看" + players + "号身份")
    } else {
        window.location.href='task3-2.html';
    }
    clickNum++;
}