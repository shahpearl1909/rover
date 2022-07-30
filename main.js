canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");

nasa_image=["nasa.jpg","nasa2.jpg","nasa3.jpg","nasa4.jpg","nasa5.jpg"];
random_number=Math.floor(Math.random()*5);
console.log(random_number);

rover_width=100;
rover_height=90;

backmar=nasa_image[random_number];
roverimg="rover.png";

rover_x=10;
rover_y=10;

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=load_bg;
    background_imgTag.src=backmar;

    rover_imgTag=new Image();
    rover_imgTag.onload=load_r;
    rover_imgTag.src=roverimg;
}

function load_bg(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function load_r(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed=="38"){
        up();
        console.log(up);
    }
    if (keypressed=="39"){
        right();
        console.log(right);
    }
    if (keypressed=="40"){
        down();
        console.log(down);
    }
    if (keypressed=="37"){
        left();
        console.log(left);
    }
}

function up(){
    if (rover_y>=0){
        rover_y=rover_y-10;
        console.log(rover_y,rover_x);
        load_bg();
        load_r();
    }
}
function down(){
    if (rover_y<=500){
        rover_y=rover_y+10;
        console.log(rover_y,rover_x);
        load_bg();
        load_r();
    }
}
    function left(){
        if (rover_x>=0){
            rover_x=rover_x-10;
            console.log(rover_y,rover_x);
            load_bg();
            load_r();
        }
    }
        function right(){
            if (rover_x<=700){
                rover_x=rover_x+10;
                console.log(rover_y,rover_x);
                load_bg();
                load_r();
            }
        }