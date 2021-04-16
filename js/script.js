const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const threePIByTwo = (3 * Math.PI) / 2;

let min, sec, hr, ms, amOrPm = 'AM';
let radH, radM, radS;

function init()
{
	canvas.width = document.documentElement.clientWidth - 35;
	canvas.height = document.documentElement.clientHeight - 45;

	window.requestAnimationFrame(draw);	
}

function draw()
{
	const centerX = canvas.width / 2,
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

	const canvasBg = '#1C1C28';

	const hourActiveColor = '#39D98A',
		minuteActiveColor = '#3E7BFA',
		secondActiveColor = '#FDAC42';

	const hourInactiveColor = '#3C4043',
		minuteInactiveColor = '#2E3134',
		secondInactiveColor = '#282A2D';

	const timerBg = '#282A2D';

	const start = 0,
		end = Math.PI * 2;

	// Draw Canvas
	drawRect(0, 0, canvas.width, canvas.height, canvasBg);

	// Hour Hand
	drawCircle(centerX, centerY, 110, start, end , false, hourInactiveColor, 'stroke', 90);
	drawCircle(centerX, centerY, 110, threePIByTwo, rad(radH) + threePIByTwo, false, hourActiveColor, 'stroke', 90);

	// Minute Hand
	drawCircle(centerX, centerY, 180, start, end, false, minuteInactiveColor, 'stroke', 50);
	drawCircle(centerX, centerY, 180, threePIByTwo, rad(radM) + threePIByTwo, false, minuteActiveColor, 'stroke', 50);

	// Second Hand
	drawCircle(centerX, centerY, 220, start, end, false, secondInactiveColor, 'stroke', 30);
	drawCircle(centerX, centerY, 220, threePIByTwo, rad(radS) + threePIByTwo, false, secondActiveColor, 'stroke', 30);

	// Digital Timer
	drawCircle(centerX, centerY, 90, start, end, false, timerBg, 'fill', '50');
	drawText(`${hr.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")} ${amOrPm}`, canvas.width / 2 - 60, canvas.height / 2 + 15, '#ffffff', '28px');

	window.requestAnimationFrame(draw);
}

init();

function rad(deg){
	return  (Math.PI / 180) * deg;
}
