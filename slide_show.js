function ft_get_sec ()
{
	let sec
	let time = new Date()
	sec = time.getSeconds()
	return sec 
}
function ft_load_image ()
{
	let sec 
	sec = ft_get_sec()
	if (sec < 10)
	{
		document.getElementById("image").style.backgroundImage = "url('image/1.jpg')"
		document.getElementById("image").style.backgroundSize = "100% 100%"
	}
	else if  (sec < 20)
	{
		document.getElementById("image").style.backgroundImage = "url('image/2.jpg')"
		document.getElementById("image").style.backgroundSize = "100% 100%" 
	}
	else if  (sec < 30)
	{
		document.getElementById("image").style.backgroundImage = "url('image/3.jpg')"
		document.getElementById("image").style.backgroundSize = "100% 100%" 
	}
	else if  (sec < 40)
	{
		document.getElementById("image").style.backgroundImage = "url('image/4.jpg')"
		document.getElementById("image").style.backgroundSize = "100% 100%" 
	}
	else if  (sec < 50)
	{
		document.getElementById("image").style.backgroundImage = "url('image/5.jpg')"
		document.getElementById("image").style.backgroundSize = "100% 100%" 
	}
	else   
	{
		document.getElementById("image").style.backgroundImage = "url('image/6.jpg')"
		document.getElementById("image").style.backgroundSize = "100% 100%" 
	}
	

}	
setInterval(ft_load_image , 1000)
