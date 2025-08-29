// 01.
function add(num1, num2) {
    const sum = num1 + num2;

    console.log(sum);
};

// const total = add(2, 5);
// console.log(total) // undefined



// 02:
function sum(one, two, three) {
    const totalAmount = (one + two + three) * 2;

    return totalAmount;
};

// const total = sum(2, 4, 4);
// console.log(total) // 20


// 03:
function sumMore(a, b) {
    return a + b;
    console.log("I'm alright");
    return b * a;
};


// 04:
const total = sumMore(5, 3);
// console.log(total) // only 8 will be return


function buyCoffe(money) {
    const eachPrice = 10;
    const quantity = money / eachPrice;

    return quantity;
};

const totalAmount = 100;
const result = buyCoffe(totalAmount);
console.log(result) // 10