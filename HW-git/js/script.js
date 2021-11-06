"use strict"

let userName = prompt('What is your name?');
console.log(`Hello ${userName}`);
let userAge = prompt('What is your age?');
console.log(userAge);

if (userAge >= 18){
    alert('It is so cool to be an adult!!!!')
} else{
    confirm('Did you get a permission from your parents to use PC?')
};

let userPetQuestion = confirm('Do you have a pet?');
if (userPetQuestion == true){
    let petName = prompt('What is his name?');
    alert(`It is such a lovely name - ${petName}!`);
} else{
    confirm('Are you not lonely without a pet?')
}

let total = alert(`Hello ${userName}! Just to confirm you are ${userAge} years old.`);
