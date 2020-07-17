//feetToMile
function feetToMile(feet){
  const mile = feet/5280;

  return mile;
}

const result = feetToMile(100000);
console.log(result.toFixed(2), "miles"); 



//woodCalculator
function woodCalculator(chair, table, bed){
  var chairVolume = chair * 1;
  var tableVolume = table * 3;
  var bedVolume = bed * 5;
  var totalVolume = chairVolume + tableVolume + bedVolume;

  return totalVolume;
}

const totalWood = woodCalculator(1, 1, 1);
console.log(totalWood, "Cubic Foot");



//brickCalculator
function brickCalculator(stories){
  if(stories <= 10){
    var numberOfBricks = stories * 15 * 1000;
  }
  else if(11 <= stories && stories <= 20){
    var numberOfBricks = 150000 + ((stories-10) * 12 * 1000);
  }
  else if(stories > 20){
    var numberOfBricks = 270000 + ((stories-20) * 10 * 1000);
  }
  else{
    console.log("invalid Input");
  }
  return numberOfBricks;
}

const total = brickCalculator(12);
console.log(total, 'bricks');



//tinyFriend
function tinyFriend(names){
    var tiny =names[0];
      
    for(var i=0; i<names.length; i++){
      var friendNames = names[i];
        
      if(friendNames.length < tiny.length){
        tiny = friendNames;
      }
    }
    return tiny;
    
  }
    const friendsList = ['a', 'Abid', 'Rishu', 'abc', 'Abdullah'];
    console.log(tinyFriend(friendsList));

