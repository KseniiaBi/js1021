const os = require("os");
// получим имя текущего пользователя

class User{
	constructor(age){
		this.name = os.userInfo().username;
		this.age = age;
	}
	sayHi(){
		console.log(`Hi, my name is ${this.name}`);
	}
}


module.exports = User;