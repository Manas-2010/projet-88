
// Create canvas variable
canvas = new fabric.Canvas("myCanvas");
//Set initial positions for ball and hole images.
ball_y =0;
ball_x=0;
hole_y=400;
hole_x=800;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){
		hole_object= Img;
		hole_object.scaleToWidth(50);
		hole_object.scaleToHeight(50);
		hole_object.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_object);
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
		ball_object= Img;
		ball_object.scaleToWidth(50);
		ball_object.scaleToHeight(50);
		ball_object.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(ball_x == hole_x && ball_y == hole_y){
		canvas.remove(ball_object);
		document.getElementById("myCanvas").style.borderColor="red";
		document.getElementById("hd3").innerHTML="You Have Hit The Goal!!!";

	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if (ball_y >= 1000);
		{
            ball_y = ball_y - 5;
			console.log("When right arrow is pressed Y = " + ball_y +",X = " + ball_x);
			canvas.remove(ball_object);
			load_img();
		}
	}

	function down()
	{
		if (ball_y <= 1000);
		{
            ball_y = ball_y + 5;
			console.log("When right arrow is pressed Y = " + ball_y +",X = " + ball_x);
			canvas.remove(ball_object);
			load_img();
		}
	}

	function left()
	{
		if(ball_x >=5)
		{
				ball_x = ball_x - 5;
				console.log("When right arrow is pressed Y = " + ball_y +",X = " + ball_x);
				canvas.remove(ball_object);
				load_img();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
				ball_x = ball_x + 5;
				console.log("When right arrow is pressed Y = " + ball_y +",X = " + ball_x);
				canvas.remove(ball_object);
				load_img();
		}
	}
	
}

