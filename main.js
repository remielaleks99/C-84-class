var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var rover_width = 100; 
var rover_height = 90;
var background_image = "mars.jpg";
var rover_image = "rover.png";
var rover_x = 10;
var rover_y = 10;
function add() {
    var backgroundimage_tag = new Image();
    backgroundimage_tag.onload = uploadbackground();
    backgroundimage_tag.src = background_image;
    var roverimage_tag = new Image();
    roverimage_tag.onload = uploadrover();
    roverimage_tag.src = rover_image;
}
function uploadbackground() {
    ctx.drawImage(backgroundimage_tag,0,0,800,600);
}
function uploadrover() {
    ctx.drawImage(roverimage_tag,rover_x,rover_y,rover_width,rover_height)
}