const maxrating = 10
let ratings = 0
let rating = Number

const readline = require('readline');
const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
)

/*const ratingfunction = function(){
    rl.question('Rating (0 - 10):', function (rat){
        if(rat <= 10 && rat>0) {
            console.log(`Answer: ${rat}`);
        } else if(rat != Number) {
            console.log('rating must be a number')
        } else {
            console.log('invalid answer')
        }
        rl.close
    });
}*/

const ratingfunction = function(ratingnum){

    for(let n = 0; n<ratingnum; n++){
        let x = Math.floor(Math.random() * Math.floor(max))
        let sum =+ x
        ratings++
        let middle = sum/ratings
        console.log('Current Rating:' + x)
        console.log('Ratings:' + ratings)
        console.log('Middle:' + middle)
    }
}

let sum = 0

rl.question('command?', function (ratingnum) {
    for(let n = 0; n<ratingnum; n++){
        let x = Math.floor(Math.random() * Math.floor(10))
        sum = sum + x
        ratings++
        let middle = sum/ratings
        console.log('Current Rating:' + x)
        console.log('Ratings:' + ratings)
        console.log('Middle:' + middle)
    }
})