img="";



function preload(){
img = loadImage('modern-white-media-unit-for-living-room.jpg');
}

function setup(){
    canvas = createCanvas(700 , 400);
    canvas.center();
}

function modelLoaded(){
    console.log("Model is Loaded.");
   
    
}


function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    }


function draw(){
    image(img , 0 ,  0, 700 , 400);
    
    fill("#fc0303");
    noFill();
    text("tv" , 110, 120);
    rect(100 , 100 , 500 , 300);
    stroke("#fc0303");

    fill("#fc0303");
    noFill();
    text("sofa" , 20, 220);
    rect(10 , 200 , 300 , 200);
    stroke("#fc0303");
}
