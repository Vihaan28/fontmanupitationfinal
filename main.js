leftwristx = 0;
rightwristx = 0;
difference=0;


function setup(){
    canvas = createCanvas( 700 , 500);
    canvas.position(800 , 150);

    video = createCapture(VIDEO);
    video.size(700 , 500);

    poseNet=ml5.poseNet(video , Modalloaded);
    poseNet.on('pose' , gotposes);

}

function draw(){

    background("lightcyan");
    fill("red");
    stroke("black");
    textSize( difference);
    text( "hi" ,150 , 450 );
    
    }

    function Modalloaded(){
        console.log( " Modal PoseNet Loaded");
    }

function gotposes(results){

    if(results.length > 0 ){
        console.log(results);
   

    leftwristx = results[0].pose.leftWrist.x;
    reftwristx = results[0].pose.rightWrist.x;

    difference = floor(leftwristx - rightwristx);

    }
}
