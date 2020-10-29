const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const canvasWidth=canvas.width;
const canvasHeight=canvas.height;
const canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

let gridSize = 40;

function drawGrid(size){
	let verticalLines = Math.ceil(canvasWidth/size)+1;
	let horizontalLines = Math.ceil(canvasHeight/size)+1;
	for(let i = 0; i < verticalLines; i++){
		ctx.beginPath();
		ctx.moveTo(size*i, 0);    
		ctx.lineTo(size*i, canvasHeight);  
		ctx.stroke(); 
	}
	for(let j = 0; j < horizontalLines; j++){
		ctx.beginPath();  
		ctx.moveTo(0, size*j);    
		ctx.lineTo(canvasWidth, size*j);  
		ctx.stroke(); 
	}
}

function render(){
	drawGrid(gridSize);
}

render();