// let number = 0;
// while(number < 20){
//     console.log(number);
//     number++;

//     if(number >= 10){
//         break;
//     }
// }


// for(let i=0; i<=20; i++){
//     console.log(i);

//     if(i>=10){
//         break;
//     }
// }


// let numbers = [12, 45, 42, 35, 62, 51];
// for(let i=0; i<numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);

//     if(number === 42){
//         break;
//     }
// }


let numbers = [12, 12, 50, 45, 50, 42, 52, 35, 62, 25, 51];

for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];

    if (number >= 50) {
        continue;
    }

    console.log(number)
}