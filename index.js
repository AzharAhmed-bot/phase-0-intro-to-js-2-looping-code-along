
function writeCards(name, reaction){
    const newName = []
    for(let i = 0 ; i < name.length; i++){
    newName.push(`Thank you, ${name[i]}, for the wonderful ${reaction} gift!`);
    }
    return newName;
}

function countDown(number){
    for(let i=number;i>=0;i--){
        console.log(i)
    }
    }
countDown(11)