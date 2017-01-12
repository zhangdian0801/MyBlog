/*document.createElement("p");/*element 只能创建元素节点，它无法帮你创建文本元素*/
/*var para = document.createElement("p");
var testdiv = document.getElementById("testdiv");
testdiv.appendChild(para);/*如此，para 即p元素 就成为了 testdiv 的一个子节点*/
/*document.createTextNode("hello world");
window.onload=function(){
document.getElementById("testdiv").appendChild(document.createElement("p"));
document.getElementById("p").appendChild(document.createElement("hello world"));
}*/

window.onload=function(){
	var para = document.createElement("p");
	var testdiv = document.getElementById("testdiv");
	testdiv.appendChild(para);
	var txt = document.createTextNode("hello world");
	para.appendChild(txt);
}