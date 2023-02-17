canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d"); 

greencar_width = 75;
greencar_height = 100;//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5;
greencar_y = 225;//Set initial position for a car image.

function add() {
	backg_img = new Image();
	backg_img.onload = uploadBackground;
	backg_img.src = background_image;
	
	greenc_img = new Image();
	greenc_img.onload = uploadgreencar;
	greenc_img.src = greencar_image;//upload car, and background images on the canvas.
}

function uploadBackground() {
	ctx.drawImage(backg_img, 0, 0, canvas.width, canvas.height);//Define function ‘uploadBackground’

}

function uploadgreencar() {
	ctx.drawImage(greenc_img, greencar_x, greencar_y, greencar_width, greencar_height);//Define function ‘uploadBackground’
//Define function ‘uploadgreencar’.

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		else if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		else if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		else if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0)
	{
	greencar_y = greencar_y - 10;
	console.log("when up arrow is pressed, x="+greencar_x+"y=" +greencar_y);
	uploadBackground();
	uploadgreencar();//Define function to move the car upward
}
}

function down()
{
	if(greencar_y <=300)
	{
	greencar_y = greencar_y + 10;
	console.log("when down arrow is pressed, x="+greencar_x+"y=" +greencar_y);
	uploadBackground();
	uploadgreencar();
}
}	

function left()
{
if (greencar_x >=0)
{
    greencar_x=greencar_x-10;
    console.log("When left arrow is pressed, +="+greencar_x+"y="+greencar_y);
    uploadBackground();
    uploadgreencar();
}
}
function right()
{
 if (greencar_x <=700)
 {
greencar_x=greencar_x+10;
console.log("When right arrow is pressed, +="+greencar_x+"y="+greencar_y);
uploadBackground();
uploadgreencar();
 }
}
