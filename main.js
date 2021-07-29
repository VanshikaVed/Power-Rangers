var canvas1 = new fabric.Canvas("myCanvas");
var c1 = canvas1.getContext("2d");

 block_y=1;
 block_x=1;

block_image_width = 300;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image ,function(img1){

		image = img1;

		image.scaleToWidth(block_image_width);
		image.scaleToHeight(block_image_height);
		image.set({
			top:block_y,
			left:block_x
		});
		canvas1.add(image);
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') 
	{
		block_x = 0;
		new_image("rr1.png");
		console.log("Red Ranger (r)");
	}
	if(keyPressed == '71')
	{
		block_x = 230;
		new_image("gr.png");
		console.log("Green Ranger (g)");
	}
	
	if(keyPressed == '89')
	{
		block_x =390;
		new_image("yr.png");
		console.log("Yellow Ranger (y)");
	}
	if(keyPressed == '80')
	{
		block_x = 650;
		new_image("pr.png");
		console.log("Pink Ranger (p)");
	}
	if(keyPressed == '66')
	{
		block_x = 670;
		new_image("br.png");
		console.log("red Ranger (R)");
	}
	
}

