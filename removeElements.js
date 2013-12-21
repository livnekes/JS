function getRandFive() {
    return jQuery( ":visible" ).get().sort(function(){ 
      return Math.round(Math.random())-0.5;
    }).slice(0,5);
}

function startLoop() {

    randomElements = getRandFive();
    $(randomElements).toggle();
    setTimeout(toggleElements ,5000, randomElements);
 
}

function toggleElements(randomElements){
    $(randomElements).toggle(); 
    console.log('hey'); 
    console.log(randomElements);
    startLoop();
}

startLoop();
