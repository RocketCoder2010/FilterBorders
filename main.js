function preload() {}
function setup(){
    cnvas=createCanvas(400,400);
cnvas.position(100,250);

video=createCapture(VIDEO);
video.hide();
tolor="";
}
function draw(){
background(220);
fill('red');
rect(46,16,320,20);
fill('green');
circle(26,25,40);
fill('green');
circle(360,25,40);
fill('red');
rect(16,46,20,320);
fill('green')
circle(28,385,40);
fill('red');
rect(355,46,20,320);
fill('green');
circle(370,385,40)
    image(video,50,100,300,350);
    tint(tolor);
}
function take_snapshot(){
    save('FILYSILLY.png');
}
function fter(){
    tolor=document.getElementById("colr").value;
}