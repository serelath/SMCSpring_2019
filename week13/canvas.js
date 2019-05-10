var canvas = document.getElementById("Game");
var c = canvas.getContext("2d");

var ballX = canvas.width/2;
var ballY = canvas.height/2;
var ballColor = 'rgb(0, 155, 155)';

var ballRadius = 100;

var speedX = 3;
var speedY = 3;
var moveRight = true;
var moveDown = true;

var animate = function() {
    c.fillStyle = 'rgba(255,255,255, 0.6)';
    c.fillRect(0,0, canvas.width, canvas.height);

    //draw the ball
    c.beginPath();
    c.fillStyle = ballColor;
    c.strokeStyle = 'black';
    c.arc(ballX, ballY, ballRadius, 0, 2*Math.PI);
    c.fill();
    c.stroke();
    
    if (ballX+ballRadius >= canvas.width || ballX-ballRadius <= 0) {
        moveRight = !moveRight;
    }
    if (ballY+ballRadius >= canvas.height || ballY-ballRadius <=0) {
        moveDown = !moveDown;
    }
    
    if (moveRight) {
        ballX = ballX + speedX;
    } else {
        ballX = ballX - speedX;
    }
    
    if (moveDown) {
        ballY = ballY + speedY;
    } else {
        ballY = ballY - speedY;
    }
    
    window.requestAnimationFrame(animate);
}

animate();

canvas.addEventListener('click', function(event) {
    if (ballX-event.clientX < ballRadius && ballY-event.clientY < ballRadius) {
        console.log('Nice!');
    }
})

