function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    t="";
}
function draw(){
    image(video,0,0,640,480);
    tint(t);
}
function apply_filter(){
    t=document.getElementById("j").value;
}
function take_snapshot(){
    save('pictutre.jpeg')
}