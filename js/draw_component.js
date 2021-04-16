function drawText(text, x, y, color, size) {
	ctx.font = `${size} "Poppins"`;
	ctx.fillStyle = color;
	ctx.fillText(text, x, y);
}

function drawRect(x, y, width, height, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, width, height);
}

function drawArc(x, y, radius, start, end, clockwise)
{
	ctx.beginPath();
	ctx.arc(x, y, radius, start, end, clockwise);
}

function drawCircle(x, y, radius, start, end, clockwise, color, type, thickness) {
	switch (type) {
		case 'fill':
			ctx.fillStyle = color;
			drawArc(x, y, radius, start, end, clockwise)
			ctx.fill();
			break;
		case 'stroke':
			ctx.strokeStyle = color;
			ctx.lineWidth = thickness;
			drawArc(x, y, radius, start, end, clockwise)
			ctx.stroke();
			break
	}
}
