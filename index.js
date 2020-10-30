const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const canvasWidth=canvas.width;
const canvasHeight=canvas.height;
const canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

let config = {
	scale: {
		current: 1,
		min: 0.5,
		max: 5
	},
	grid: {
		size: 20,
	}
}

const drawGrid = (size, scale = 1) => {
	let verticalLines = Math.ceil(canvasWidth/size/scale)+1;
	let horizontalLines = Math.ceil(canvasHeight/size/scale)+1;
	for(let i = 0; i < verticalLines; i++){
		ctx.beginPath();
		ctx.moveTo(size*i*scale, 0);    
		ctx.lineTo(size*i*scale, canvasHeight);  
		ctx.stroke(); 
	}
	for(let j = 0; j < horizontalLines; j++){
		ctx.beginPath();  
		ctx.moveTo(0, size*j*scale);    
		ctx.lineTo(canvasWidth, size*j*scale);  
		ctx.stroke(); 
	}
}

const scale = (delta) => {
	config.scale.current = config.scale.current + delta;
	if (config.scale.current < config.scale.min) config.scale.current = config.scale.min; 
	if (config.scale.current > config.scale.max) config.scale.current = config.scale.max; 
}

canvas.addEventListener("wheel", (e)=>{
	let delta = (e.deltaY || e.detail || e.wheelDelta) > 0 ? -0.05 : 0.05;
	scale(delta);
})

function render(){
	window.requestAnimationFrame(render);
	ctx.putImageData(canvasData, 0, 0);
	drawGrid(config.grid.size, config.scale.current)
};

(function init(){
	render();
}())