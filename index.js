const attendants= ['John','Marry','Ali','Peter'];
const event='Birthday'
function writeCards(attendants,event){
    for(i=0;i<attendants.length;i++){
        console.log(`Thank you,${attendants[i]}, for the wonderful ${event} gift`);
    }

    return(attendants);
    
}
console.log(writeCards(attendants))


function countDown(n){
    let arr=[];
    let i=10;
    while (i >n) {
        i--;
     arr.unshift(i);
    }

    return arr;
}
console.log(countDown(0));