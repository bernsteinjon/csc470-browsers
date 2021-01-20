/*
Jon Bernstein
CSC470-03
Lab 03
*/

class ConvexPoly{
  /*
  Constructor for convexPoly, as specified in project description
  */
  constructor(points){
      this._points = points;
  };
  /*
  getter function for area
  */
  get area(){
      var x = []; //array for x coordinates
      var y = []; //array for y coordinates
      var numpoints = this._points.length; //numpoints variable
      var area = 0; //area variable initialized
      var j = numpoints - 1; //variable j for looping

      /*
      splits points array into x and y components

      */
      for(var i = 0; i < numpoints; i++){
          x[i] = this._points[i].x;
          y[i] = this._points[i].y;
      }

      /*
      calculates area of polygon
      */
      for(var i = 0; i < numpoints; i++){
        area = area + (x[j] + x[i]) * (y[j] - y[i]);
        j = i;
      }
      area = area/2;

      return Math.abs(area); //returns area
  }
}

class RegularPoly extends ConvexPoly{

    constructor(center, nsides, radius){
        super();
        this.center = center;
        this.nsides = nsides;
        this.radius = radius;

        var corners = []; //array to hold coordinates of corners
        var x = []; //array to hold x vals
        var y = []; //array to hold y vals
        var theta = 0; //initializes theta var
        var i = 0; //var i for looping

        /*
        procedure for generating coordinates of vertices
        as specified in project description
        */

        while(i < nsides){
            for(theta; theta < 2*Math.PI; theta = (theta + 2*Math.PI/this.nsides)){
                x[i] = this.radius * Math.cos(theta) + this.center.x;
                y[i] = this.radius * Math.sin(theta) + this.center.y;
                i++;
            }
        }

        /*
        rejoins x and y coordinates back into array of corners
        */

        for(var i = 0; i < nsides; i++){
            corners[i] = {x: x[i], y: y[i]};
        }
        this._points = corners;
        //console.log(this._points);

    }
}


let s1 = new RegularPoly( {x:50, y:50}, 4, 50*Math.sqrt(2));
console.log(`Square1 area: ${s1.area}`);
let s2 = new ConvexPoly( [{x:0, y:0},{x:0, y:100},{x:100, y:100},{x:100, y:0}] );
console.log(`Square2 area: ${s2.area}`);
