//Javascript code for RGB color guessing game

/*The guess function is an if else statement, that if id==index, or if rgb displayed is equal to the button
color it will display correct and text will be green, but if not, it will display wrong and text 
will be red.*/
function guess(){
    if(document.activeElement.id==index){
        document.getElementById("colorValue").innerHTML="You are correct!";
        document.getElementById("colorValue").style.color="darkgreen";
    }
    else{
        document.getElementById("colorValue").innerHTML="You are wrong!";
        document.getElementById("colorValue").style.color="red";
    }

    /*Getting element from html,"button, for all three classes.*/
    document.getElementsByClassName("button")[0].removeAttribute("onclick");
    document.getElementsByClassName("button")[1].removeAttribute("onclick");
    document.getElementsByClassName("button")[2].removeAttribute("onclick");
}

/*Function that will repeat the whole process when pressed, which is when user click the next button.*/
function Next(){
    window.location.reload();
}

/*Variables are asigned for r,g, and b and is randomized.*/
var arr =[0,1,2];
var r= Math.floor((Math.random())*256);
var g= Math.floor((Math.random())*256);
var b= Math.floor((Math.random())*256);

/*Getting element "colorValue" for the r, g, b value and will be displayed.*/
document.getElementById("colorValue").innerHTML="( "+r+" , "+g+" , "+b+" )";

var index=Math.floor((Math.random())*3);

/*One button will match the rgb values and it will be the correct answer.*/
document.getElementById(index).style.backgroundColor="rgb("+r+","+g+","+b+")";

arr.splice(index,1);

/*This will generate any random color*/
var r1= Math.floor((Math.random())*256);
var g1= Math.floor((Math.random())*256);
var b1= Math.floor((Math.random())*256);
document.getElementById(arr[0]).style.backgroundColor="rgb("+r1+","+g1+","+b1+")";

/*Just as the one above will generate a random color, witch is the wrong one when displayed.*/
var r2= Math.floor((Math.random())*256);
var g2= Math.floor((Math.random())*256);
var b2= Math.floor((Math.random())*256);
document.getElementById(arr[1]).style.backgroundColor="rgb("+r2+","+g2+","+b2+")";

/*That is basically all of the javascript code for the RGB Guessing game.*/



