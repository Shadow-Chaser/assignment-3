// https://github.com/Shadow-Chaser/assignment-3


function kilometerToMeter(kilometer) {

    if (kilometer < 0) {
      return "Distance Cannot have nagative value!";
    } 
    
    else {
      var meter = kilometer * 1000; // 1 Kilometer = 1000 Meter
      return meter;
    }
}



function budgetCalculator(numberOfWatch, numberOfMobile, numberOfLaptop){

    // Calculating individual cost of products
    var priceOfWatch = numberOfWatch * 50;
    var priceOfMobile = numberOfMobile * 100;
    var priceOfLaptop = numberOfLaptop * 500;

    var totalCost = priceOfWatch + priceOfMobile + priceOfLaptop;

    return totalCost;
}



function hotelCost(numberOfDays){

    var sum;

    if(numberOfDays < 0){
        return "Number of Days cannot be negative!";
    }

    else if(numberOfDays <= 10){
        sum = (numberOfDays * 100);
    }

    else if(numberOfDays>10 && numberOfDays <= 20)
    {
        sum = ((numberOfDays - 10)* 80) + 10*100;
    }

    else if(numberOfDays>20)
    {
        sum = ((numberOfDays - 20)* 50) + 10*100 + 10*80;
    }

    return sum;
}



function megaFriend(nameOfFriends)
{
    if(nameOfFriends == ""){
        return "Input should not be empty!";
    }

    else{
    var largeName = nameOfFriends[0];

    for(var i=0; i<nameOfFriends.length; i++){

     if(nameOfFriends[i].length>largeName.length){
        largeName = nameOfFriends[i];
     }
    }
    
    return largeName;
    }
}
