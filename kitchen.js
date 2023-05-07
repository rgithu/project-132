img="";



function preload(){
img = loadImage('kitchenimage.jpg');
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
    text("Kitchen compartments" , 110, 120);
    rect(100 , 100 , 500 , 300);
    stroke("#fc0303");

    fill("#fc0303");
    noFill();
    text("Kitchen counter" , 20, 220);
    rect(10 , 200 , 300 , 200);
    stroke("#fc0303");
}