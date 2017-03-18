var SampleSize = 100000;
var RandMax=1000000000;//120

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
  this.x = getRandomInt(1,RandMax);
  this.y = getRandomInt(1,RandMax);
  this.g = gcd(this.x,this.y);
}

var t0 = performance.now();
var gcd1 = 0;

for (i = 0; i < SampleSize; i++) {
  console.log((i/SampleSize)*100);
  var O = new RandomPair();
  if(O.g==1)gcd1++;
}

var PE = Math.sqrt(6/(gcd1/SampleSize));
var t1 = performance.now();

document.getElementById("Time").innerHTML="took " + (t1 - t0) + " milliseconds.";
document.getElementById("PiE").innerHTML="PI:"+PE;
