//BASIC FUNCTIONS
function repeat(times, code) {
  for (i = 0; i < 100; i++) {
    code();
  }
}

//Canvas Scripts:
const canvas = document.querySelector('#crazyCanvas');
const ctx = canvas.getContext('2d');

function clearCanvas() {
  //clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawCircle(x, y, radius, colour, lineWidth) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI); // arc(centre x, centre y, radius)
  ctx.strokeStyle = colour;
  ctx.lineWidth = lineWidth; //set the width of the line
  ctx.stroke();
}

//Main Code

//canvas size
let visibleWidth;
let visibleHeight;
let canvasLongestSide;

function resizeCanvas() {
  visibleWidth = document.documentElement.clientWidth;
  visibleHeight = document.documentElement.clientHeight;
  canvas.width = visibleWidth;
  canvas.height = visibleHeight;

  canvasLongestSide = canvas.width;
  if (canvas.height > canvas.width) {
    canvasLongestSide = canvas.height;
  }
}

function styles(colour) {
  //background
  document.querySelector(
    '#stuff'
  ).style.backgroundColor = `hsla(${colour}deg, 50%, 50%, 0.5)`;
  //links
  let colourIterator = colour + 100;
  document.querySelectorAll('a').forEach((link) => {
    link.style.color = `hsl(${colourIterator}deg, 100%, 50%)`;
    colourIterator += 40;
  });
}
//.style.color = `hsl(${colour + 200}deg, 100%, 50%)`

let hue = 0;
let radius = 0;
let startHue = 0;
let startRad = 5;
let bright = 0;

function drawTunnel() {
  //startRad *= 1.1
  startHue -= 2;
  hue = startHue;
  radius = startRad;
  circles();
  styles(startHue);
}

function circles() {
  resizeCanvas();
  bright = 0;
  while (radius < canvasLongestSide / 1.5) {
    drawCircle(
      canvas.width / 2,
      canvas.height / 2,
      radius,
      `hsl(${hue}deg, 100%, ${bright}%)`,
      radius / 4
    );
    hue += 20;
    radius *= 1.1;
    bright += 1.6;
  }
}

resizeCanvas()

setInterval(drawTunnel, 1000 / 30);