//html variables

var nums = 0;
var clicked = document.getElementById('timesClicked');

var size = document.querySelector('input[name="size"]')
var color = document.querySelector('input[name="color"]')

var inputs = document.querySelectorAll('input');

// controls update

function handleUpdate(e) {
    ballColor = color.value;
    ballRadius = parseInt(size.value);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));

//

var canvas = document.getElementById("Game");
var c = canvas.getContext("2d");

var ballX = canvas.width/2;
var ballY = canvas.height/2;
var ballColor = color.value;

var ballRadius = parseInt(size.value);

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
    c.arc(ballX, ballY, ballRadius, 0, 2*Math.PI);
    c.fill();
    
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
        nums += 1;
        clicked.innerHTML = nums;
    }
})
