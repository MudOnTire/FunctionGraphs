"use strict"

var graphCanvas = document.getElementById("board");
var canvasContext = graphCanvas.getContext("2d");

function clearCanvas(){
	canvasContext.clearRect(0, 0, graphCanvas.width, graphCanvas.height);
}

//绘制坐标系
function drawAxis(width, originY){
	var originX=width/2;
	canvasContext.beginPath();
	canvasContext.strokeStyle="skyblue";
	canvasContext.lineWidth = 1.0
	canvasContext.moveTo(0,originY);
	canvasContext.lineTo(width,originY);
	canvasContext.moveTo(originX,2*originY);
	canvasContext.lineTo(originX,0);
	canvasContext.stroke();
	canvasContext.closePath();
}

//绘制三角函数
function drawTrig(trigName, originY, scaleX, scaleY){
	clearCanvas();
	if(!scaleX) scaleX = 1;
	if(!scaleY) scaleY = 1;
	var trigFun;
	switch(trigName){
		case "sin":
			trigFun = Math.sin;
			break;
		case "cos":
			trigFun = Math.cos;
			break;
		case "tan":
			trigFun = Math.tan;
			break;
		case "sec":
			trigFun = function(x){
				return 1/Math.cos(x);	
			};
			break;
		case "csc":
			trigFun = function(x){
				return 1/Math.sin(x);	
			};
			break;
		case "cot":
			trigFun = function(x){
				return 1/Math.tan(x);	
			};
			break;
		default:
			throw new Error("三角函数不存在");
			break;
	}
	var canvasWidth=graphCanvas.width;
	drawAxis(canvasWidth, originY);
	canvasContext.beginPath();
	canvasContext.strokeStyle="#ff8300";
	canvasContext.moveTo(0,originY);
	for(var x=0;x<canvasWidth*10;x++){
		var d = (x-canvasWidth*5)/scaleX;
		var y = -1*trigFun(d)*scaleY+originY;
		if(Math.abs(y-originY)>originY){
			canvasContext.moveTo(x/10,y);
		}else{
			canvasContext.lineTo(x/10,y);
		}	
	}
	canvasContext.stroke();
	canvasContext.closePath();
}

//绘制幂函数
function drawPower(power, originY, scaleX, scaleY){
	clearCanvas();
	if(!scaleX) scaleX = 1;
	if(!scaleY) scaleY = 1;
	var canvasWidth=graphCanvas.width;
	drawAxis(canvasWidth, originY);
	canvasContext.beginPath();
	canvasContext.strokeStyle="#ff8300";
	canvasContext.moveTo(0,originY);
	for(var x=0;x<canvasWidth*10;x++){
		var d = (x-canvasWidth*5)/scaleX;
		var y = -1*Math.pow(d,power)*scaleY+originY;
		if(Math.abs(y-originY)>originY){
			canvasContext.moveTo(x/10,y);
		}else{
			canvasContext.lineTo(x/10,y);
		}
		console.log(x+" , "+y);	
	}
	canvasContext.stroke();
	canvasContext.closePath();
}

// drawPower(-3, 500, 1000);

//绘制倒数
function drawReciprocal(originY, scaleY){
	clearCanvas();
	var canvasWidth=graphCanvas.width;
	drawAxis(canvasWidth, originY);
	canvasContext.beginPath();
	canvasContext.strokeStyle="#ff8300";
	canvasContext.moveTo(0,originY);
	for(var x=0;x<canvasWidth*10;x++){
		var d = (x-canvasWidth*5);
		var y = -1*1/d*scaleY + originY;
		if(Math.abs(y-originY)>originY){
			canvasContext.moveTo(x/10,y);
		}else{
			canvasContext.lineTo(x/10,y);
		}
	}
	canvasContext.stroke();
	canvasContext.closePath();
}

// drawReciprocal(200,10000);

//绘制tan的反函数
function drawReverseTan(originY, scaleX, scaleY){
	var canvasWidth=graphCanvas.width;
	drawAxis(canvasWidth, originY);
	canvasContext.beginPath();
	canvasContext.strokeStyle="#ff8300";
	canvasContext.moveTo(0,originY);
	for(var x=0;x<canvasWidth*10;x++){
		var d = (x-canvasWidth*5)/scaleX;
		var y = -1*Math.atan(d)*scaleY + originY;
		if(Math.abs(y-originY)>originY){
			canvasContext.moveTo(x/10, y);
		}else{
			canvasContext.lineTo(x/10, y);
		}
	}
	canvasContext.stroke();
	canvasContext.closePath();
}

// drawReverseTan(200, 200, 100);