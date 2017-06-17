/**
 * Created by Administrator on 2017/6/16.
 */
var all = JSON.parse(sessionStorage.getItem("all"));
console.log(all);
for (var i = 0; i < all.length; i++) {
    $(".content").append(
        "<div class='role'>" +
            "<p class='role-name'>" + all[i]+ "</p>" +
            "<p class='role-num'>" + (i+1) + "号" + "</p>" +
        "</div>");
}