var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var min, sec, hr, ms, amOrPm = 'AM';
var radH, radM, radS;
const threePIByTwo = (3 * Math.PI) / 2;
function init()
{
	canvas.width = document.documentElement.clientWidth - 35;
	canvas.height = document.documentElement.clientHeight - 45;
	window.requestAnimationFrame(draw);	
}

function draw(now)
{
	var centerX = canvas.width / 2,
		centerY = canvas.height / 2,
		date = new Date();

	hr = date.getHours();
	min = date.getMinutes();
	sec = date.getSeconds();
	ms = date.getMilliseconds();
	if(hr > 12)
	{
		amOrPm = 'PM';
		hr -= 12;
	}

	radH = 0.000008333 * ( ( hr * 60 * 60 * 1000 ) + ( min * 60 * 1000 ) + ( sec * 1000 ) + ms );
	radM = 0.0001 * ( ( min * 60 * 1000 ) + ( sec * 1000 ) + ms );
	radS = 0.006 * ( ( sec * 1000 ) + ms );

	drawRect(0, 0, canvas.width, canvas.height, '#202833');
	drawCircle(centerX, centerY, 220, 0, Math.PI * 2, false, '#546E7A', 'stroke', 30); //secondgrey
	drawCircle(centerX, centerY, 220, threePIByTwo, rad(radS) + threePIByTwo, false, '#DC543E', 'stroke', 30); //second
	drawCircle(centerX, centerY, 180, 0, Math.PI * 2, false, '#455A64', 'stroke', 50); //minutegrey
	drawCircle(centerX, centerY, 180, threePIByTwo, rad(radM) + threePIByTwo, false, '#FEB737', 'stroke', 50); //minute
	drawCircle(centerX, centerY, 110, 0, Math.PI * 2 , false, '#37474F', 'stroke', 90); //hourgrey
	drawCircle(centerX, centerY, 110, threePIByTwo, rad(radH) + threePIByTwo, false, '#27AE61', 'stroke', 90); //hour
	drawCircle(centerX, centerY, 95, 0, Math.PI * 2, false, '#263238', 'fill', '50'); //inner
	drawText(`${hr.toString().length == 1?'0'+hr:hr}:${min.toString().length == 1?'0'+min:min}:${sec.toString().length == 1?'0'+sec:sec}`, canvas.width / 2 - 59, canvas.height / 2 + 15, '#ffffff', '40px');
	drawText(amOrPm, canvas.width / 2 - 15, canvas.height / 2 + 50, '#ffffff', '25px');
	window.requestAnimationFrame(draw);	
}

init();

function rad(deg){
	return  (Math.PI / 180) * deg;
}