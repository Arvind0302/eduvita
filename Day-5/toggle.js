var button = document.querySelector("button");	

button.addEventListener("click", changeBackground);
var isOrange = false;


function changeBackground()
{
	if(isOrange)
	{
		document.body.style.backgroundColor = "black"
		isOrange = false;
	}
	else
	{
		document.body.style.backgroundColor = "orange"
		isOrange = true;
	}
}