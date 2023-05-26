//your JS code here. If required.
let select=document.getElementsById("colorSelect");
let button=document.getElementsByTagName("input")[0];

function remove(){
	if(select.value==="Red")
		select.value="";
}

button.createEventListener(click, remove);