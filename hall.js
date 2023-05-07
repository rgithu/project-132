img="";


function preload(){
img = loadImage('antonovich-design-2019ENbmYuwpPXoY.jpg');
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
    text("Chandelier" , 110,70);
    rect(100 , 50 , 300 , 150);
    stroke("#fc0303");

    fill("#fc0303");
    noFill();
    text("Stairs" , 20, 220);
    rect(10 , 200 , 300 , 200);
    stroke("#fc0303");
}