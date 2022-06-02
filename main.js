textX = 0;
textY = 0;
textSize = 0;
difference = 0; 
rightWristX = 0;
leftWristX = 0;

function setup() {

    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on("pose" , gotPoses);

    console.log("Text X = " + textX + "Text Y = " + textY);

} 

function modelLoaded() {

console.log('poseNet Is Initialized');

}

function gotPoses(results) {

    if(results.length > 0) {

     console.log(results);
     textX = results[0].pose.text.x;
     textY = results[0].pose.text.y;

     leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;

     difference = floor(leftWristX - rightWristX);


    }
}

function draw() {

    background('#8B0000');
    fill('#F90093');
    stroke('blue');
    text('Coffee' , 50 , 400);
    textSize =(difference)
    
    }