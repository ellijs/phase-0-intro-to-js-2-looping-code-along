// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }


// const gifts = ["Teddy bear", "drone", "doll"];
const array = ["Ada", "Brendan", "Ali"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++ ) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`)
//     
//     }
//     return gifts;
// }

function writeCards(array) {
    let newArray = [];
    for (let j = 0; j < array.length; j++) {
        newArray.push(`Thank you, ${array[j]}, for the wonderful surprise gift!`);
    }
    return newArray;  
}

// wrapGifts(gifts);
writeCards(array);



function countDown(int) {
    while ( int >= 0 ) {
        console.log(int--);
    }
}

console.log(countDown(10));