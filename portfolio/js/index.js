let menu = document.getElementById("menu");

function openMenu()
{
	menu.style.display = "block";
}

function closeMenu()
{
	if(window.matchMedia("(max-width:1000px)").matches)
	menu.style.display = "none";
}
