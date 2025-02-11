// const friends = ["mark", "bill", "waren", "elon"];
// console.log(friends);
// // for(let friend of friends){
// //     console.log(friend)
// // }

// // for(let i = 0; i < friends.length; i++){
// //     console.log(friends[i])
// // }

// let i = 0;
// while(i < friends.length){
//     console.log(friends[i]);
//     i++;
// }

const numbers = [12, 33, 55, 33, 99];
// console.log(numbers);
// console.log(numbers.reverse())

let reversr = [];
for(let i = 0; i < numbers.length; i++){
    const num = numbers[i];
    reversr.unshift(num)
    // console.log(num)
}
console.log(reversr)
// let revers = [];
// for(let number of numbers){
//     console.log(number)
//     revers.unshift(number)
// }
// console.log(revers)