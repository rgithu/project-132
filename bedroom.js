img="";


function preload(){
img = loadImage('bedroom.jpg');
}

function setup(){
    canvas = createCanvas(550 , 450);
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
    image(img , 0 , 0 , 550 , 450);

    
    fill("#fc0303");
    noFill();
    text("Pillows" , 110, 120);
    rect(100 , 100 , 300 , 100);
    stroke("#fc0303");

    fill("#fc0303");
    noFill();
    text("Blanket" , 20, 220);
    rect(10 , 200 , 300 , 200);
    stroke("#fc0303");
}