/**
 * Created by Administrator on 2017/6/13.
 */
var range = document.getElementById("range");
var num = document.getElementById("number");
var content = [];
var all = [];
// 先将两个input的dom节点获取，再通过函数进行数据互换
// oninput 事件在元素值发生变化时立即触发，然后通过互换两个input的值，实现互相绑定
function number1() {
    range.value = num.value;
}
function range1() {
    num.value = range.value;
}
function selectNum() {
    // num.value是字符串，用.search的正则表达式的方法对输入数据进行判断，可以规避输入内容为小数，非数字，非十进制数据的情况
    if (num.value.search(/^([4-9])$|^(1[0-8])$/)) {
        alert("请输入正确的数值：4-18");
        document.getElementById("number").value = '';
        number1();
        // document.getElementById("content").innerHTML = '';
    } else {
        // 下面的方法是只设置ul，然后动态的添加li标签，需要在函数开始之前对ul进行清空操作；
        document.getElementById("content").innerHTML = '';
        // 数据变化后需要将原数组清空，然后重新赋值
        all = [];
        for (var i = 0; i < num.value; i++) {
            var para = document.createElement("li");
            var node = document.createTextNode(i + 1 + "号是水民");
            para.appendChild(node);
            var element = document.getElementById("content");
            element.appendChild(para);
            all[i]="水民"
        }
        // 下面是调用随机数去重函数，并将随机取到的li改为杀手
        var arr = [];
        content = document.getElementsByTagName("li");
        // 随机数去重函数
        function deleteSameNum() {
            var x = 4;
            var originalArray = [];
            for (var a = 0; a < parseInt(num.value); a++){
                originalArray[a] = a;
            }
            for (var b, j = 0; j < x; j++){
                do{
                    b = Math.floor(Math.random()*parseInt(num.value));
                } while (originalArray[b] == null);
                originalArray[b] = null;
                arr[j] = b;
            }
        }
        deleteSameNum();
        // 根据input中的数据来判断应该生成几个杀手
        if (num.value > 3 && num.value < 8) {
            content[arr[0]].innerHTML =  arr[0]+1 + "号是杀手";
            all[arr[0]] = "杀手"
        } else if(num.value > 7 && num.value < 12){
            content[arr[0]].innerHTML =  arr[0]+1 + "号是杀手";
            content[arr[1]].innerHTML =  arr[1]+1 + "号是杀手";
            all[arr[0]] = "杀手";
            all[arr[1]] = "杀手"
        }else if (num.value > 11 && num.value < 16){
            content[arr[0]].innerHTML =  arr[0]+1 + "号是杀手";
            content[arr[1]].innerHTML =  arr[1]+1 + "号是杀手";
            content[arr[2]].innerHTML =  arr[2]+1 + "号是杀手";
            all[arr[0]] = "杀手";
            all[arr[1]] = "杀手";
            all[arr[2]] = "杀手"
        }else {
            content[arr[0]].innerHTML =  arr[0]+1 + "号是杀手";
            content[arr[1]].innerHTML =  arr[1]+1 + "号是杀手";
            content[arr[2]].innerHTML =  arr[2]+1 + "号是杀手";
            content[arr[3]].innerHTML =  arr[3]+1 + "号是杀手";
            all[arr[0]] = "杀手";
            all[arr[1]] = "杀手";
            all[arr[2]] = "杀手";
            all[arr[3]] = "杀手"
        }
        console.log(all)
    }
}
function task3 () {
    sessionStorage.setItem("all",JSON.stringify(all));
    window.location.href='task3-1.html';
}