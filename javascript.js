const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "blue",
  "indigo",
  "violet",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
 let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
   circle.style.left = x - 20 + "px";
    circle.style.top = y - 20+ "px";
    
 //  circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
  circle.y = y;

  const nextCircle = circles[index + 1] || circles[0];
   x += (nextCircle.x - x) * 0.9;
   y += (nextCircle.y - y) * 0.9;
  });
 
 requestAnimationFrame(animateCircles);
}

animateCircles();
