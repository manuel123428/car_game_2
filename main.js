canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
roverX=10;
roverY=10;
C2_width=100;
C2_height=90;
c2_X=10;
c2_Y=10;
background_image="CANVAS.jpg";
CAR1_image="CAR_1.png";
CAR2_image="CAR_2.png";
function add(){
    CAR1_imgtag=new Image();
    CAR1_imgtag.onload=uploadCAR1();
    CAR1_imgtag.src=CAR1_image;
    CAR2_imgtag=new Image();
    CAR2_imgtag.onload=uploadCAR2();
    CAR2_imgtag.src=CAR2_image;
}
function uploadCAR1(){
    ctx.drawImage(CAR1_imgtag,roverX,roverY,rover_width,rover_height);
}
function uploadCAR2(){
    ctx.drawImage(CAR2_imgtag,c2_X,c2_Y,C2_width,C2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        up()
        console.log("up")
    }
    if(keyPressed=='40'){
        down()
        console.log("down")
    }
    if(keyPressed=='37'){
        left()
        console.log("left")
    }
    if(keyPressed=='39'){
        right()
        console.log("right")
    }
    if(keyPressed=='87'){
        w()
        console.log("w")
    }
    if(keyPressed=='83'){
        s() 
        console.log("s")
    }
    if(keyPressed=='65'){
        a()
        console.log("a")
    }
    if(keyPressed=='68'){
        d()
        console.log("d")
    }
    }
    function up(){
        if(roverY>=0){
            roverY=roverY-10;
            console.log("When up arrow key is pressed,X= "+ roverX + " , y=" + roverY);
        }
    }
    function right(){
        if(roverX>=0){
            roverX=roverX+10;
            console.log("When up arrow key is pressed,X= "+ roverX + " , y=" + roverY);
        }
    }
    function left(){
        if(roverX>=0){
            roverX=roverX-10;
            console.log("When up arrow key is pressed,X= "+ roverX + " , y=" + roverY);
        }
    }
    function down(){
        if(roverY<=500){
            roverY=roverY+10;
            console.log("When up arrow key is pressed,X= "+ roverX + " , y=" + roverY);
        }
    }
    function w(){
        if(c2_Y>=0){
            roverY=roverY-10;
            console.log("When up arrow key is pressed,X= "+ roverX + " , y=" + roverY);
        }
    }
    function d(){
        if(c2_X>=0){
            roverX=roverX+10;
            console.log("When up arrow key is pressed,X= "+ roverX + " , y=" + roverY);
        }
    }
    function a(){
        if(c2_X>=0){
            roverX=roverX-10;
            console.log("When up arrow key is pressed,X= "+ roverX + " , y=" + roverY);
        }
    }
    function s(){
        if(c2_Y<=500){
            roverY=roverY+10;
            console.log("When up arrow key is pressed,X= "+ roverX + " , y=" + roverY);
        }
    }
if(roverX>=700){
    console.log("Car 1 won");
    document.getElementById('game_status').innerHTML="GAME STATUS : Car 1 has won!!";
}
if(c2_X>=700){
    console.log("Car 2 won");
    document.getElementById('game_status').innerHTML="GAME STATUS : Car 2 has won!!";
}