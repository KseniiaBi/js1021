let message = "Привет!";
console.log(message);
let name = prompt("Как тебя зовут?")
console.log(name);
let age = prompt("Сколь тебе лет")
if(age > 18) {
	alert("Хорошего дня!");
}else {
	prompt("Вам точно родители разрешают пользоваться компьютером?")
}
console.log(age);
let pet = confirm("У Вас есть домашний питомец?")
if(pet == true) {
	prompt("Как его зовут?");
	prompt("Как он поживает?");
}else {
	prompt("Не грустно ли жить без домашнего питомца?");
}
console.log(pet);




