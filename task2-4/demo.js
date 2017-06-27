/**
 * Created by Y on 2017/3/22.
 */
var jso = sessionStorage.jso;
jso=JSON.parse(jso);
console.log(jso);
$(function() {
    // 输出内容
    for (var b = 0; b < jso.date; b++) {
        $("#days").html($("#days").html() + "<div class='day text-center'>第" + (b + 1) + "天</div><div class='data text-center'><img src='img/moon.png'><button class='btn btn-info vote'>杀手杀人</button><img src='img/sun.png'><button class='btn btn-info'>亡灵发表遗言</button><button class='btn btn-info'>玩家依次发言</button><button class='btn btn-info vote'>投票</button></div>");
    }
    var c=0;
    while (jso.deadList[c]!==undefined){
        $(".vote:eq("+c+")").after("<p>"+(jso.deadList[c])+"号死亡"+"</p>");
        c++;
    }
    // 如果日期大于1,就把之前的按钮改变样式
    if (jso.date > 1) {
        for (var d = 0; d < (jso.date - 1); d++) {
            $(".btn-info:lt(4)").removeClass("btn-info");
        }
    }
    // 设置所有按键
    var btuNum = [];
    for(var a=0;a<4;a++){
        btuNum[a] =$(".btn-info:eq("+a+")");
    }
    if (jso.step === 1) {
        btuNum[0].removeClass("btn-info");
    }
    // 设置每一个按键的点击事件
    btuNum[0].click(function () {
        if(jso.step===0){
            jso.step++;
            jso = JSON.stringify(jso);
            sessionStorage.jso = jso;
            window.location.href = "vote.html";
        }
        else {
            alert("这个按钮已经按过了啊混蛋！")
        }
    });
    btuNum[1].click(function () {
        jso.step++;
        btuNum[1].removeClass("btn-info");
    });
    btuNum[2].click(function () {
        jso.step++;
        btuNum[2].removeClass("btn-info");
    });
    btuNum[3].click(function () {
        jso.step++;
        jso.date++;
        btuNum[3].removeClass("btn-info");
        jso = JSON.stringify(jso);
        sessionStorage.jso = jso;
        window.location.href = "vote.html";
    });
    //点击显示或者隐藏按钮
    var day=$(".day");
    var dayDiv=$(".day+div");
    day.click(function (){
        dayDiv.toggle("normal");
    })
});