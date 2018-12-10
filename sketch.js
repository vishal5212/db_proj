
var mapimg;
var x;
var y;

var zoom=3;
var clat=39.8282;
var clon= -98.5795;

function preload(){
    mapimg=loadImage('https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/-98.5795,39.8282,3,0,0/1200x600?access_token=pk.eyJ1IjoidmlzaGFsNTIxMiIsImEiOiJjam9pdjZwdzMwYzV0M3BwZmUxNzI3dGJjIn0.8IukJAakE-2N7vrlqTkPiQ');

}

function mercX(lon) {
    lon = radians(lon);
    var a = (256 / PI) * pow(2, zoom);
    var b = lon + PI;
    return a * b;
  }
  
  function mercY(lat) {
    lat = radians(lat);
    var a = (256 / PI) * pow(2, zoom);
    var b = tan(PI / 4 + lat / 2);
    var c = PI - log(b);
    return a * c;
  }

function setup(){
    createCanvas(1200,600);
    translate(width / 2, height / 2);
    imageMode(CENTER);
    image(mapimg,0,0);

    var cx = mercX(clon);
  var cy = mercY(clat);

    var lon= -118.4085;
    var lat=33.9416;
   var d=10;
   
   var x = mercX(lon) - cx;
   var y = mercY(lat) - cy;
  

    stroke(255, 0, 255);
    fill(255, 0, 255, 200);
    ellipse(x, y, d, d);

    

}

