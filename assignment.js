function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}

function woodCalculator(Chair, Table, Bed){
    var woodForChair = Chair * 1;
    var woodForTable = Table * 3;
    var woodForBed = Bed * 5;
    var totalWood = woodForChair + woodForTable + woodForBed;
    return totalWood;
}

var friends = ["sagar","bivash","pallab","joy"]
function tinyFriend(friends){
    var smallestFriend = friends[0].length;
    for(var i = 0; i < friends.length; i++){
        var nextFriend = friends[i].length;
        if(friends[i].length < smallestFriend){
            smallestFriend = nextFriend; 
        }
    }
    return smallestFriend;
}