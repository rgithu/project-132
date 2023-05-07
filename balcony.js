img="";


function preload(){
img = loadImage('photo-1619082791183-1888233d6569.jpg');
}

function setup(){
    canvas = createCanvas(350 , 450);
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
    image(img , 0 , 0 , 350 , 450);

    fill("#fc0303");
    noFill();
    text("Balcony" , 110, 120);
    rect(100 , 100 , 200 , 200);
    stroke("#fc0303");


}