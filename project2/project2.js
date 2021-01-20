
/*---------------------
Jon Bernstein
CSC470-03
Project 2
---------------------*/
(function(){ //all code defined in an IIFE
  var boxes = document.getElementsByClassName("box");
  var matches = 0;
  var ctr = 0;
  var timeoutID;
  var selection;
  var colors = createColorArray();
  var his = [];

/*---------------------
Creates the boxes for the game
in a for loops, also does formatting
builds the boxes in a 10x10 grid
then appends the grid to the body
---------------------*/

  var buildSVGTable = function(){
	   var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	   svg.setAttributeNS(null,'style', 'margin: auto; display: block; border: 1px solid black; margin-top: 50px');
	   svg.setAttributeNS(null,'width', '497');
	   svg.setAttributeNS(null,'height', '497');
	   svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
	   document.body.appendChild(svg);
	   var counter = 0;
	   var height = -50;
  /*---------------------
  This for loop is responsible for
  formatting the individual boxes and
  creating the boxes in a grid
  ---------------------*/
  	for(var i = 0; i < 100; i++){
  		var tempElement = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  		tempElement.setAttributeNS(null, 'width', '47');
  		tempElement.setAttributeNS(null, 'height', '47');
  		tempElement.setAttributeNS(null, 'fill', 'lightgrey');
  		tempElement.setAttributeNS(null, 'stroke', 'black');
  		tempElement.setAttributeNS(null, 'class', 'box');
  		tempElement.setAttributeNS(null, 'idx', i);
  		if(counter % 10 === 0){
  			height += 50;
  			counter = 0;
  		}
  	  tempElement.setAttributeNS(null, 'y', height);
  	  tempElement.setAttributeNS(null,'x', counter*50);
  		svg.appendChild(tempElement);
  		counter++;
  	}
  }

/*---------------------
Creates the handler for a user click
on a box
---------------------*/
function clickHandler(){
	ctr++;
	clearTimeout(timeoutID);

  /*---------------------
  Resets the boxes when a match
  has not been made
  ---------------------*/
	if(ctr % 2 !== 0 && his.length > 0){
		his.pop().setAttributeNS(null, "fill", "lightgrey");
		his.pop().setAttributeNS(null, "fill", "lightgrey");
	}
	var currentBox = this;
	currentBox.setAttributeNS(null, "fill", colors[currentBox.getAttributeNS(null,"idx")]);

  /*---------------------
  Sets selection equal to
  the box that has been selected first
  ---------------------*/
	if(ctr % 2 !== 0){
		selection = this;
	}

  /*---------------------
  Handles the second click

  First, checks if the same box as selection
  is clicked, does nothing in this case.
  ---------------------*/
	if(ctr % 2 === 0){
		if(selection.getAttributeNS(null,"idx") === currentBox.getAttributeNS(null,"idx")){
			ctr--;
		}
		else{
			if(colors[selection.getAttributeNS(null, "idx")] === colors[currentBox.getAttributeNS(null, "idx")]){
				selection.removeEventListener('click', clickHandler, false);
				currentBox.removeEventListener('click', clickHandler, false);
				matches++; //if a match has been made, removes the listeners for those boxes
				if(matches===50){ //Checks the win condition
					alert("Congratulations, you've won!");
				}
			}
			else{
				his.push(currentBox);
				his.push(selection);
				timeoutID = setTimeout(function(){
					currentBox.setAttributeNS(null, "fill", "lightgrey");
					selection.setAttributeNS(null, "fill", "lightgrey");
				},500);
			}
		}
	}
}

function createColorArray(){
  /*------------------
  First, fills an array with
  equally distributed colors
  ------------------*/
  var arr = [];
  for(var i = 0; i < 100; i++){
    if(i < 20){
      arr[i] = "red";
    }
    else if(i >= 20 && i < 40){
      arr[i] = "lime";
    }
    else if(i >= 40 && i < 60){
      arr[i] = "yellow";
    }
    else if(i >= 60 && i < 80){
      arr[i] = "lightblue";
    }
    else if(i >= 80 && i < 100){
      arr[i] = "purple";
    }
  }
  /*------------------
  Then, shuffles that array
  using the Math.random() function
  ------------------*/
  var shuffled = arr;
  var randomidx;
  var currentidx = shuffled.length;
  var temp;
  while(currentidx !== 0){
    randomidx = Math.floor(Math.random()*currentidx);
    currentidx--;
    temp = shuffled[currentidx];
    shuffled[currentidx] = shuffled[randomidx];
    shuffled[randomidx] = temp
  }
  return shuffled;
}
buildSVGTable(); //function call to build the table
//adds click event listener to every box
for(var i = 0; i < boxes.length; i++){
	boxes[i].addEventListener('click', clickHandler, false);
}
})();
