const attendants= ['John','Marry','Ali','Peter'];
const event='Birthday'
function writeCards(attendants,event){
    for(i=0;i<attendants.length;i++){
        console.log(`Thank you,${attendants[i]}, for the wonderful ${event} gift`);
    }

    return(attendants);
    
}
console.log(writeCards(attendants))

function countDown(){
    let countup = 15;
    while (countup > 0) {
      console.log(countup--);
    }

    return countDown;
}
console.log(countDown());
