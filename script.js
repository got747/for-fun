let step_x=2;
let step_y=2;
let svg=document.querySelector('svg');
let image=document.querySelector('image');
let text=document.querySelector('.Rrrrr');

let width=0;
let height=0;
let width_ball=parseInt(image.getAttribute('width'));
let height_ball=parseInt(image.getAttribute('height'));
let flag_show=false;
let score = 0;

window.onload = function() {
	
	width=window.innerWidth;
	height=window.innerHeight;


	svg.setAttribute('width', width);
	svg.setAttribute('height', height);
	
	text.setAttribute('x', width/2);
	text.setAttribute('y', height/5);
	
	text.setAttribute('display', 'none');


  };
  
document.querySelector("image").onclick = function () {

	flag_show = true;
	showOrHideText();

 }; 
 
function showOrHideText() {
	
	if (flag_show) {
		
		text.setAttribute('display', 'block');
		
		step_x=step_x *  (Math.random() < 0.5 ? -1 : 1);
		step_y=step_y * (Math.random() < 0.5 ? -1 : 1);
		
		score++;
		
		// let text2=document.querySelector('.Score');
		// text2.setAttribute('text', '11111');
		
	} else {
		text.setAttribute('display', 'none');
	}
	
	

}

 
function move() {

	flag_show = false;
	
	let x=parseInt(image.getAttribute('x'));
	let y=parseInt(image.getAttribute('y'));

	x+=step_x;
	y+=step_y;
	
if (y+height_ball>=height || y<=0) {
	step_y=-step_y;
}
if (x+width_ball>=width || x<=0) {
     step_x=-step_x;
}
	
	image.setAttribute('x', x);
	image.setAttribute('y', y);
	
	
	
	// console.log(width)
	// console.log(svg)
}
setInterval(move,10);
setInterval(showOrHideText,400)