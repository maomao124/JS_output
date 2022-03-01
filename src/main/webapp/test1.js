/**
 * Project name(项目名称)：JS_output
 * File name(文件名): test1
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/1
 * Time(创建时间)： 13:42
 * Version(版本): 1.0
 * Description(描述)： 无
 */

var a = 11,
    b = 5;
window.alert("a * b = " + a * b);

var res = window.confirm("点击确定或者取消");
if (res === true)
{
    alert("你点击了“确定”按钮");
}
else
{
    alert("你点击了“取消”按钮");
}

console.log("123456")

document.write("<p>现在的时间是：</p>");
document.write(Date());



var demo = document.getElementById("demo");
console.log(demo.innerHTML);
demo.innerHTML = "<h2>innerHTML</h2>"