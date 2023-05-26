function removecolor()
{
var x=document.getElementById("colorSelect");
x.remove(x.selectedIndex);
}

document.getElementsByTagName("input")[0].addEventListener("click", removecolor);