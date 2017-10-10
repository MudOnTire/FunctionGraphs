"use strict"

var chessCanvas = document.getElementById("board");
var chessContext = chessCanvas.getContext("2d");

function drawBoard(){
	var gradient = chessContext.createLinearGradient(0,600,600,0);
	gradient.addColorStop(0.0,"#D50005");
	gradient.addColorStop(0.5,"#E27883");
	gradient.addColorStop(1.0,"#FFDDDD");

	chessContext.clearRect(0,0,600,600);

	chessContext.fillStyle=gradient;
	chessContext.strokeStyle="black";

	for (var x=0;x<8; x++) {
		for(var y=0;y<8;y++){
			if((x+y)%2){
				chessContext.fillRect(75*x,75*y,75,75);
			}
		}
	}

	chessContext.strokeRect(0,0,600,600);
}

function drawImage(){
	var image = new Image();
	image.onload=function(){
		chessContext.drawImage(image,0,0,300,100);
	}
	image.src = "42131.jpg";
}

//绘制坐标系
function drawAxis(width, originY){
	var originX=width/2;
	chessContext.beginPath();
	chessContext.strokeStyle="skyblue";
	chessContext.lineWidth = 1.0
	chessContext.moveTo(0,originY);
	chessContext.lineTo(width,originY);
	chessContext.moveTo(originX,2*originY);
	chessContext.lineTo(originX,0);
	chessContext.stroke();
	chessContext.closePath();
}

//绘制三角函数
function drawTrig(trigName, originY, scaleX, scaleY){
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
	var canvasWidth=chessCanvas.width;
	drawAxis(canvasWidth, originY);
	chessContext.beginPath();
	chessContext.strokeStyle="#ff8300";
	chessContext.moveTo(0,originY);
	for(var x=0;x<canvasWidth*10;x++){
		var d = (x-canvasWidth*5)/scaleX;
		var y = -1*trigFun(d)*scaleY+originY;
		if(Math.abs(y-originY)>originY){
			chessContext.moveTo(x/10,y);
		}else{
			chessContext.lineTo(x/10,y);
		}	
	}
	chessContext.stroke();
	chessContext.closePath();
}

// drawTrig("sin", 200, 1000, 100);

//绘制幂函数
function drawPower(power, originY, scaleX, scaleY){
	if(!scaleX) scaleX = 1;
	if(!scaleY) scaleY = 1;
	var canvasWidth=chessCanvas.width;
	drawAxis(canvasWidth, originY);
	chessContext.beginPath();
	chessContext.strokeStyle="#ff8300";
	chessContext.moveTo(0,originY);
	for(var x=0;x<canvasWidth*10;x++){
		var d = (x-canvasWidth*5)/scaleX;
		var y = -1*Math.pow(d,power)*scaleY+originY;
		if(Math.abs(y-originY)>originY){
			chessContext.moveTo(x/10,y);
		}else{
			chessContext.lineTo(x/10,y);
		}
		console.log(x+" , "+y);	
	}
	chessContext.stroke();
	chessContext.closePath();
}

// drawPower(-3, 500, 1000);

//绘制倒数
function drawReciprocal(originY, scaleY){
	var canvasWidth=chessCanvas.width;
	drawAxis(canvasWidth, originY);
	chessContext.beginPath();
	chessContext.strokeStyle="#ff8300";
	chessContext.moveTo(0,originY);
	for(var x=0;x<canvasWidth*10;x++){
		var d = (x-canvasWidth*5);
		var y = -1*1/d*scaleY + originY;
		if(Math.abs(y-originY)>originY){
			chessContext.moveTo(x/10,y);
		}else{
			chessContext.lineTo(x/10,y);
		}
	}
	chessContext.stroke();
	chessContext.closePath();
}

// drawReciprocal(200,10000);

//绘制tan的反函数
function drawReverseTan(originY, scaleX, scaleY){
	var canvasWidth=chessCanvas.width;
	drawAxis(canvasWidth, originY);
	chessContext.beginPath();
	chessContext.strokeStyle="#ff8300";
	chessContext.moveTo(0,originY);
	for(var x=0;x<canvasWidth*10;x++){
		var d = (x-canvasWidth*5)/scaleX;
		var y = -1*Math.atan(d)*scaleY + originY;
		if(Math.abs(y-originY)>originY){
			chessContext.moveTo(x/10, y);
		}else{
			chessContext.lineTo(x/10, y);
		}
	}
	chessContext.stroke();
	chessContext.closePath();
}

// drawReverseTan(200, 200, 100);