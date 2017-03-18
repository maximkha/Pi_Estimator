var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var RandomPair = function(){
  this.x = getRandomInt(1,120);
  this.y = getRandomInt(1,120);
  this.g = gcd(this.x,this.y);
}

var SampleSize = 1000000;
var gcd1 = 0;
var t0 = performance.now();

//var SetOfGcd = new Array();

for (i = 0; i < SampleSize; i++) {
  var O = new RandomPair();
  if(O.g==1)gcd1++;
  //SetOfGcd.push(O);
}
var PE = Math.sqrt(6/(gcd1/SampleSize));
var t1 = performance.now();

document.getElementById("Time").innerHTML="took " + (t1 - t0) + " milliseconds.";
document.getElementById("PiE").innerHTML="PI:"+PE;
