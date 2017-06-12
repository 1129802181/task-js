/**
 * Created by Administrator on 2017/6/10.
 */
var square = document.getElementsByClassName('square');
console.log(square);
// square.style.backgroundColor = "#FF890A";该方法错误，由于此时square获取所有class为square的数据，使其变成了一个数组，因此不能直接给square赋值，改变颜色，需要用for循环单独给每一个square赋值；
function clear() {
    for (var i = 0; i < square.length; i++){
        square[i].style.backgroundColor = "#FF890A";
    }
}
function selectColor() {
    clear();
    var arr = [];
    var x = 3;
    var originalArray=[];
    // 随机数去重；注意：do...while 循环是 while 循环的变体。在检查while()条件是否为真之前，该循环首先会执行一次do{}之内的语句，然后在while()内检查条件是否为真，如果条件为真的话，就会重复do...while这个循环,直至while()为假。
    for (var a = 0; a < square.length; a++){
        originalArray[a] = a ;
    }
    for (var num,i = 0; i < x; i++){
        do{
            num = Math.floor(Math.random()*square.length);
        } while (originalArray[num] == null);
        originalArray[num] = null;
        arr[i] = square[num];
    }
    console.log(arr);
    arr[0].style.backgroundColor = bgColor();
    arr[1].style.backgroundColor = bgColor();
    arr[2].style.backgroundColor = bgColor();
}
function bgColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb("+r+','+g+','+b+")";//所有方法的拼接都可以用ES6新特性`其他字符串{$变量名}`替换
}
var int;
function start() {
    clearInterval(int);
    // 多次点击按钮时，为了防止定时器被重复调用，需要先清除一下之前的定时器；
    int = setInterval("selectColor()",1000);
}
function closeColor(){
    clearInterval(int);
    clear();
}



