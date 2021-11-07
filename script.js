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

