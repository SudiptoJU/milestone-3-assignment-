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
