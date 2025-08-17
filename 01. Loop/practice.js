//01

// let count = 1
// while(count <= 15){
//     console.log("Ajke amr mon valo nai");
//     count+=1
// }


//02

// for(let i=58; i<99; i++){
//     console.log(i)
// }


//03

// let number = 412;
// while(number <= 456){
//     console.log(number);
//     number = number + 2;
// }

//04

// for(let i=581; i<624; i+=2){
//     console.log(i)
// }


// First of all, in the while loop, we need to declare a loop variable, then specify the loop condition, and finally define how the while loop will react to that condition.

// And in the for loop we do have all condtion into one line inside the for();


//06

// const alreadyLearned = ['HTML', "CSS", "Tailwindcss", "JS", "React.js", "Next.js", "MongoDB"];
// for(let i=0; i< alreadyLearned.length; i++){
//     const element = alreadyLearned[i];
//     console.log(element)
// }



//07

// const phones = ['iPhone', 'Samsung', 'Xiaomi', 'Oppo', 'Vivo'];
// let count = 0;
// while(count < phones.length){
//     const element = phones[count];
//     console.log(element);
//     count++;
// }


//08

// for(let i=30; i<=86; i++){
//     if(i >= 44){
//         break;
//     };

//     console.log(i)
// }


//09

const prices = [120, 400, 457, 210, 140, 180, 200, 146];
let count = 0;
while (count < prices.length) {
    let element = prices[count];

    count = count + 1;

    if(element > 200){
        continue;
    };

    console.log(element)

}