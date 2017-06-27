/**
 * Created by Administrator on 2017/6/26.
 */
function game() {
    window.location.href = 'task2-2.html';
}
function color1() {
    $(".click-circle").children("button:eq(0)").css("backgroundColor","#69d1e9")
    $(".click-circle").children("button:eq(1)").css("backgroundColor","#999")
}
function color2() {
    $(".click-circle").children("button:eq(1)").css("backgroundColor","#69d1e9")
    $(".click-circle").children("button:eq(0)").css("backgroundColor","#999")
}