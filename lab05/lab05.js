//Jon Bernstein
//CSC470-03
//Lab 05

(function(){ //iife
  let red = document.getElementById("R").value; //gets initial value for R
  let green = document.getElementById("G").value; //gets initial value for G
  let blue = document.getElementById("B").value; //gets initial value for B
  let el = document.getElementById("swatch"); //gets the swatch element
  let x = "rgb(" + red + ", " + green + ", " + blue + ")"; //formats a string to be passed as a parameter
  document.getElementById("clr").innerHTML = x;
  //console.log(x); DEBUG

  R.oninput = function(){ //executes function on input of R
    red = document.getElementById("R").value; //updates value of red
    x = 'rgb(' + red + ", " + green + ", " + blue + ")"; //formats string for setAttribute parameter
    document.getElementById("clr").innerHTML = x;
    //console.log(x); DEBUG
    el.setAttribute('style',"background-color: " + x); //changes the background-color attribute
    //console.log("Red: " + red); DEBUG
  }
  G.oninput = function(){ //executes function on input of G
    green = document.getElementById("G").value; //updates value of green
    x = 'rgb(' + red + ", " + green + ", " + blue + ")"; //formats string for setAttribute parameter
    document.getElementById("clr").innerHTML = x;
    //console.log(x); DEBUG
    el.setAttribute('style',"background-color: " + x); //changes the background-color attribute
    //console.log("Green: " + green); DEBUG
  }
  B.oninput = function(){ //executes function on input of B
    blue = document.getElementById("B").value; //updates value of blue
    x = 'rgb(' + red + ", " + green + ", " + blue + ")"; //formates string for setAttribute parameter
    document.getElementById("clr").innerHTML = x;
    //console.log(x); DEBUG
    el.setAttribute('style',"background-color: " + x); //changes the background-color attribute
    //console.log("Blue: " + blue); DEBUG
  }
})();
