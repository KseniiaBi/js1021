// 'use strict'


// задача 1


let a,b,c;{
    while (isNaN(a,b,c)>0) {
        a = +prompt("set value for 'A'"),
        b = +prompt("set value for 'B'"),
        c = +prompt("set value for 'C'");
    }
    console.log(`${a}x^2+${b}x+${c}=0`);

    let D = b**2 - (4*a*c); 
        if (D < 0) {
        console.log("has no roots");
    }
        if (D == 0) {
            let x = -b / (2*a);
            console.log(x);
        }
        if (D > 0) {
            let xOne = -b + Math.sqrt(D) / (2*a);
            console.log(+xOne.toFixed(2));
            let xTwo = -b - Math.sqrt(D) / (2*a);
            console.log(+xTwo.toFixed(2));
        }
    console.log (D);
}


// задача 2


let f1 = 1;
let f2 = 1;

for(let i = 1; i <= 9; i++){
    Fsum = f1 + f2;
    f1 = f2;
    f2 = Fsum;
}
console.log(Fsum);


// задача 3


let cell = 1n,
    seedSum=1n;
for(let i = 2n; i <= 64n; i++){
        seedN = cell * 2n,
        seedSum = seedN + seedSum,
        cell = seedN;
}
console.log(seedSum);

let seed = 0.019,
    thousandSeed = seed * 1000;
    weight = (seedSum * BigInt(thousandSeed)) / 1000n;
    console.log(weight);