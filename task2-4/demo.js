/**
 * Created by Administrator on 2017/6/16.
 */
function next() {
    var leftBtn=confirm("确定要返回？你可想好喽？");
    if(leftBtn==true){
        window.location.href="../task2/task2.html";//返回配置玩家数目的页面
    }
}
function question() {
    alert("你要嘎哈啊？")
}
//滑块
var slider = function(){return document.getElementById("slider")};
//输入框
var text = function(){return document.getElementById("text")};
//滑动滑块输入框人数随之变化
function moveMouse(){
    //把滑块的值赋给输入框
    text().value=slider().value;
}
//输入框人数改变滑块随之变动
function wanjia() {
    //把输入框的值赋给滑块
    slider().value=text().value;
}

//加减按钮函数。
function less() {
    text().value--;
    if (text().value<6){
        alert("少6个人你就别玩啦");
        text().value=6;
    }
    else {
        slider().value=text().value;//  将玩家人数赋值给滑轮的值
    }
}
function plus() {
    text().value++;
    if (text().value>18){
        alert("整这么多人？你不嫌挤啊？");
        text().value=18;
    }
    else {
        slider().value=text().value;
    }
}
var total;//声明一个变量，总人数
function setup() {
    total = parseInt(slider().value);//总人数注入
    var killer;//杀手
    var Water;//水民
    var sh = [];
    killer = Math.floor(total / 4);//杀手为总人数1/4，向下取整

    Water = total - killer;//水民人数为总人数减去杀手数
    for (i = 0; i < Water; i++) {
        sh.push({role: '水民'})
    }
    for (i = 0; i < killer; i++) {
        sh.push({role: '杀手'});
        //打乱数组
        //  sh.sort(function(a,b){ return Math.random()>.5 ? -1 : 1;});

        // 打乱数组另一种方法
        for (var a = sh.length; a--;) {
            var b = Math.floor(Math.random() * (a + 1));
            var c = sh[a];
            sh[b] = c;
            sh[a] = sh[b];
            // // console.log(a)
            // // console.log(b)
            // console.log(c)
        }
    }
    abc = "";
    for (i = 0; i < total; i++) {
        abc = abc + sh[i].role + "&nbsp;1&nbsp;人" + "<br/>";
        document.getElementById("content1").innerHTML = abc;   //输出
    }

    //
    // alloplayer = JSON.stringify(day);
    // sessionStorage.day = alloplayer;
    // console.log("第"+day+"天");
    alloplayer = JSON.stringify(sh);
    sessionStorage.sh = alloplayer;
    // console.log(alloplayer);


    // sessionstorage.zongrenshu = JSON.stringify(total);
    // console.log(Water);//平民人数
    // sessionstorage.pingminrenshu = JSON.stringify(Water);
    // console.log(killer);//杀手人数
    // sessionstorage.shashourenshu = JSON.stringify(killer);
    // console.log(sh[killer]);//杀手
    // sessionstorage.sharen = JSON.stringify(sh[killer]);
    // console.log(sh[Water]);//平民
    // sessionstorage.minrem = JSON.stringify(sh[Water]);


}
function gonext() {
    if (total != null) {
        window.location.href = "../task3/task3-1.html";//已配置身份转到下一个页面
    } else {
        alert("请设置身份");
    }

}
