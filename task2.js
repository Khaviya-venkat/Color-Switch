var x = 200;
var y = 500;
var dy = 0.7; 
var radius = 15;
var color = "#FF2080";
var distance = 0;
var highScore;
var mySound;
mySound = new sound("Jump.mp3");

var obstacleCircle1 = {x: 200, y: 300, radius: 70, startingAngle: 1.5, endingAngle: 0.5, color: "#FF2080"};
var obstacleCircle2 = {x: 200, y: 300, radius: 70, startingAngle: 0.5, endingAngle: 1.5, color: "purple"};

var obstacleCircle3 = {x: 200, y: 0, radius: 70, startingAngle: 1.5, endingAngle: 0.5, color: "#FF2080"};
var obstacleCircle4 = {x: 200, y: 0, radius: 70, startingAngle: 0.5, endingAngle: 1.5, color: "purple"};

var obstacleCircle5 = {x: 200, y: -300, radius: 70, startingAngle: 1.5, endingAngle: 0.5, color: "#FF2080"};
var obstacleCircle6 = {x: 200, y: -300, radius: 70, startingAngle: 0.5, endingAngle: 1.5, color: "purple"};

var canvas = document.querySelector("canvas");
var body = document.querySelector("body");
var start = document.querySelector("button");
var scoreContent = document.querySelector("#scoreContent");
var endScoreContent = document.querySelector("#endScoreContent");
var secondPage = document.querySelector("#secondPage");
var thirdPage = document.querySelector("#thirdPage");
var bestScore = document.querySelector(".bestScore");
var c = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 700;


c.beginPath();
c.arc(obstacleCircle1.x, obstacleCircle1.y, obstacleCircle1.radius, obstacleCircle1.startingAngle * Math.PI, obstacleCircle1.endingAngle * Math.PI, false);
c.lineWidth = 20;
c.strokeStyle = "#FF2080";
c.stroke();

c.beginPath();
c.arc(obstacleCircle2.x, obstacleCircle2.y, obstacleCircle2.radius, obstacleCircle2.startingAngle * Math.PI, obstacleCircle2.endingAngle * Math.PI, false);
c.lineWidth = 20;
c.strokeStyle = "purple";
c.stroke();

c.beginPath();
c.arc(obstacleCircle3.x, obstacleCircle3.y, obstacleCircle3.radius, obstacleCircle3.startingAngle * Math.PI, obstacleCircle3.endingAngle * Math.PI, false);
c.lineWidth = 20;
c.strokeStyle = "#FF2080";
c.stroke();

c.beginPath();
c.arc(obstacleCircle4.x, obstacleCircle4.y, obstacleCircle4.radius, obstacleCircle4.startingAngle * Math.PI, obstacleCircle4.endingAngle * Math.PI, false);
c.lineWidth = 20;
c.strokeStyle = "purple";
c.stroke();

c.beginPath();
c.arc(obstacleCircle5.x, obstacleCircle5.y, obstacleCircle5.radius, obstacleCircle5.startingAngle * Math.PI, obstacleCircle5.endingAngle * Math.PI, false);
c.lineWidth = 20;
c.strokeStyle = "#FF2080";
c.stroke();

c.beginPath();
c.arc(obstacleCircle6.x, obstacleCircle6.y, obstacleCircle6.radius, obstacleCircle6.startingAngle * Math.PI, obstacleCircle6.endingAngle * Math.PI, false);
c.lineWidth = 20;
c.strokeStyle = "purple";
c.stroke();

c.beginPath();
c.arc(x, y, radius, 2 * Math.PI, false);
c.fillStyle = "#FF2080";
c.fill();

function animate(){
	c.clearRect(0, 0, 400, 800);
   	c.beginPath();
	c.arc(x, y, radius, 2 * Math.PI, false);
	c.fillStyle = "#FF2080";
	c.fill();
	y = y - 10;
	distance = distance + 1;
	scoreContent.innerHTML = "Score : " + distance;
	obstacleCircle1.y = obstacleCircle1.y + 20;
	obstacleCircle2.y = obstacleCircle2.y + 20;
	obstacleCircle3.y = obstacleCircle3.y + 20;
	obstacleCircle4.y = obstacleCircle4.y + 20;
	obstacleCircle5.y = obstacleCircle5.y + 20;
	obstacleCircle6.y = obstacleCircle6.y + 20;
}

body.addEventListener("click", function(){

	animate();
	if (obstacleCircle1.y === 800){
	obstacleCircle1.y = obstacleCircle5.y - 300;
	obstacleCircle2.y = obstacleCircle6.y - 300;
	}

	if (obstacleCircle3.y === 800){
	obstacleCircle3.y = obstacleCircle1.y - 300;
	obstacleCircle4.y = obstacleCircle2.y - 300;
	}

	if (obstacleCircle5.y === 800){
	obstacleCircle5.y = obstacleCircle3.y - 300;
	obstacleCircle6.y = obstacleCircle4.y - 300;
	}
});

function gravity(){
	requestAnimationFrame(gravity);
	c.clearRect(0, 0, 400, 800);
	c.beginPath();
	c.arc(x, y, radius, 2 * Math.PI, false);
	c.fillStyle = "#FF2080";
	c.fill();
	if (y + radius < 700) {
		y = y + dy;
	}
}

function moveObstacle(){
	requestAnimationFrame(moveObstacle);
	c.clearRect(0, 0, 400, 800);

	if (obstacleCircle1.startingAngle < 2) {
		obstacleCircle1.startingAngle = obstacleCircle1.startingAngle + 0.01;
	}
	else {
		obstacleCircle1.startingAngle = 0;
	}
	
	if (obstacleCircle1.endingAngle < 2) {
		obstacleCircle1.endingAngle = obstacleCircle1.endingAngle + 0.01;
	}	
	else {
		obstacleCircle1.endingAngle = 0;
	}

	if (obstacleCircle2.startingAngle < 2) {
		obstacleCircle2.startingAngle = obstacleCircle2.startingAngle + 0.01;
	}
	else {
		obstacleCircle2.startingAngle = 0;
	}
	
	if (obstacleCircle2.endingAngle < 2) {
		obstacleCircle2.endingAngle = obstacleCircle2.endingAngle + 0.01;
	}	
	else {
		obstacleCircle2.endingAngle = 0;
	}

		if (obstacleCircle3.startingAngle < 2) {
		obstacleCircle3.startingAngle = obstacleCircle3.startingAngle + 0.01;
	}
	else {
		obstacleCircle3.startingAngle = 0;
	}
	
	if (obstacleCircle3.endingAngle < 2) {
		obstacleCircle3.endingAngle = obstacleCircle3.endingAngle + 0.01;
	}	
	else {
		obstacleCircle3.endingAngle = 0;
	}

	if (obstacleCircle4.startingAngle < 2) {
		obstacleCircle4.startingAngle = obstacleCircle4.startingAngle + 0.01;
	}
	else {
		obstacleCircle4.startingAngle = 0;
	}
	
	if (obstacleCircle4.endingAngle < 2) {
		obstacleCircle4.endingAngle = obstacleCircle4.endingAngle + 0.01;
	}	
	else {
		obstacleCircle4.endingAngle = 0;
	}

	if (obstacleCircle5.startingAngle < 2) {
		obstacleCircle5.startingAngle = obstacleCircle5.startingAngle + 0.01;
	}
	else {
		obstacleCircle5.startingAngle = 0;
	}
	
	if (obstacleCircle5.endingAngle < 2) {
		obstacleCircle5.endingAngle = obstacleCircle5.endingAngle + 0.01;
	}	
	else {
		obstacleCircle5.endingAngle = 0;
	}

	if (obstacleCircle6.startingAngle < 2) {
		obstacleCircle6.startingAngle = obstacleCircle6.startingAngle + 0.01;
	}
	else {
		obstacleCircle6.startingAngle = 0;
	}
	
	if (obstacleCircle6.endingAngle < 2) {
		obstacleCircle6.endingAngle = obstacleCircle6.endingAngle + 0.01;
	}	
	else {
		obstacleCircle6.endingAngle = 0;
	}


	if (y < obstacleCircle2.y + obstacleCircle2.radius) {
		if (y > ((obstacleCircle2.y + obstacleCircle2.radius) - 10)){
			if (obstacleCircle2.startingAngle < 0.5){
				if (obstacleCircle2.endingAngle < 1.5) {
					endGame();
				}	
			}

			else if (obstacleCircle2.startingAngle > 1.5) {
				if (obstacleCircle2.endingAngle > 0.5) {
					endGame();
				}
			}
		}
	}	

	if (y < obstacleCircle2.y - obstacleCircle2.radius) {
		if (y > ((obstacleCircle2.y - obstacleCircle2.radius) - 10)){
			if (obstacleCircle2.startingAngle > 0.5) {
				if (obstacleCircle2.endingAngle < 2) {
					endGame();
				}
			}			

			else if (obstacleCircle2.startingAngle > 1) {
					if (obstacleCircle2.endingAngle < 0.5) {
						endGame();
					}
				}
		}		
	} 
		
	if (y < obstacleCircle4.y + obstacleCircle4.radius) {
		if (y > ((obstacleCircle4.y + obstacleCircle4.radius) - 10)){
			if (obstacleCircle4.startingAngle < 0.5){
				if (obstacleCircle4.endingAngle < 1.5) {
					endGame();
				}	
			}

			else if (obstacleCircle4.startingAngle > 1.5) {
					if (obstacleCircle4.endingAngle > 0.5) {
						endGame();
					}
				}
		}
	}	

	if (y < obstacleCircle4.y - obstacleCircle4.radius) {
		if (y > ((obstacleCircle4.y - obstacleCircle4.radius) - 10)){
			if (obstacleCircle4.startingAngle > 0.5) {
				if (obstacleCircle4.endingAngle > 1.5) {
					endGame();
				}
			}			

			else if (obstacleCircle4.startingAngle > 1) {
					if (obstacleCircle4.endingAngle < 0.5) {
						endGame();
					}
				}
		}		
	} 	

	if (y < obstacleCircle6.y + obstacleCircle6.radius) {
		if (y > ((obstacleCircle6.y + obstacleCircle6.radius) - 10)){
			if (obstacleCircle6.startingAngle < 0.5){
				if (obstacleCircle6.endingAngle < 1.5) {
					endGame();
				}	
			}

			else if (obstacleCircle6.startingAngle > 1.5) {
					if (obstacleCircle6.endingAngle > 0.5) {
						endGame();
					}
				}
		}
	}	

	if (y < obstacleCircle6.y - obstacleCircle6.radius) {
		if (y > ((obstacleCircle6.y - obstacleCircle6.radius) - 10)){
			if (obstacleCircle6.startingAngle > 0.5) {
				if (obstacleCircle6.endingAngle > 1.5) {
					endGame();
				}
			}			

			else if (obstacleCircle6.startingAngle > 1) {
					if (obstacleCircle6.endingAngle < 0.5) {
						endGame();
					}
				}
		}		
	} 

	c.beginPath();
	c.arc(obstacleCircle1.x, obstacleCircle1.y, obstacleCircle1.radius, obstacleCircle1.startingAngle * Math.PI, obstacleCircle1.endingAngle * Math.PI, false);
	c.lineWidth = 20;
	c.strokeStyle = "#FF2080";
	c.stroke();
	
	c.beginPath();
	c.arc(obstacleCircle2.x, obstacleCircle2.y, obstacleCircle2.radius, obstacleCircle2.startingAngle * Math.PI, obstacleCircle2.endingAngle * Math.PI, false);
	c.lineWidth = 20;
	c.strokeStyle = "purple";
	c.stroke();

	c.beginPath();
	c.arc(obstacleCircle3.x, obstacleCircle3.y, obstacleCircle3.radius, obstacleCircle3.startingAngle * Math.PI, obstacleCircle3.endingAngle * Math.PI, false);
	c.lineWidth = 20;
	c.strokeStyle = "#FF2080";
	c.stroke();

	c.beginPath();
	c.arc(obstacleCircle4.x, obstacleCircle4.y, obstacleCircle4.radius, obstacleCircle4.startingAngle * Math.PI, obstacleCircle4.endingAngle * Math.PI, false);
	c.lineWidth = 20;
	c.strokeStyle = "purple";
	c.stroke();

	c.beginPath();
	c.arc(obstacleCircle5.x, obstacleCircle5.y, obstacleCircle5.radius, obstacleCircle5.startingAngle * Math.PI, obstacleCircle5.endingAngle * Math.PI, false);
	c.lineWidth = 20;
	c.strokeStyle = "#FF2080";
	c.stroke();

	c.beginPath();
	c.arc(obstacleCircle6.x, obstacleCircle6.y, obstacleCircle6.radius, obstacleCircle6.startingAngle * Math.PI, obstacleCircle6.endingAngle * Math.PI, false);
	c.lineWidth = 20;
	c.strokeStyle = "purple";
	c.stroke();

	c.beginPath();
	c.arc(x, y, radius, 2 * Math.PI, false);
	c.fillStyle = "#FF2080";
	c.fill();	
}


start.addEventListener("click", function(){
	start.classList.remove("startingGame");
	start.classList.add("gameOver");
	secondPage.classList.remove("gameOver");
	gravity();
	moveObstacle();
});

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}

function endGame(){

	var hs = localStorage.highScore;
	if (hs == "undefined"){
		localStorage.highScore = distance;
		bestScore.innerHTML = "Best Score : " + localStorage.highScore;
	}

	if (distance >= parseInt(hs)){
		localStorage.highScore = distance;
		bestScore.innerHTML = "Best Score : " + localStorage.highScore;
	}

	if (distance < parseInt(hs)) {
		bestScore.innerHTML = "Best Score : " + localStorage.highScore;
	}

	endScoreContent.innerHTML = "Score : " + distance;
	secondPage.classList.add("gameOver");
	thirdPage.classList.remove("gameOver");

	mySound.play();
	mySound.stop();
}
