// HomeWork 1 

let name = prompt("What is your name?", );


console.log(`Привет ${name}`);

let age = prompt("How old are you?", );

if( age < 18) {
    alert("Разрешили ли родители пользоваться компьютером?");
} else {
    alert("Долго не засиживайся");
};

let animal = confirm("Do you have animal at home?", );

if(animal === true) {
    let nameAnimal = prompt("Как зовут питомца?", );
        if(nameAnimal != null && typeof nameAnimal !== "undefined") {
            alert(`Как поживает ${nameAnimal}?`);
        }
} else {
    alert("Не грустно ли жить без питомца?");
};

// HomeWork 2

let a = +prompt("Введите число a", '');
let b = +prompt("Введите число b", '');
let c = +prompt("Введите число c", '');

console.log(`${a}x2 + ${b}x + ${c} = 0`);

let D = b * b - 4 * a * c;
console.log("D = " + D);

if(D < 0) {
    console.log("Корней нет");
}else if (D == 0) {
    let x = (-b + Math.sqrt(D)) / (2 * a);
    console.log(x);
}else{
    let firstX = (-b + Math.sqrt(D)) / (2 * a);
    let secondX = (-b - Math.sqrt(D)) / (2 * a);
    console.log(`Первый корень : ${firstX}`);
    console.log(`Второй корень : ${secondX}`);
};
