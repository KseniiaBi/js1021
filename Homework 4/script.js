// HW 1) написать отдельные функции или методы для калькулятора вычитания, умножения и деления, при которых используется только оператор сложения целых положительных чисел
      const calc = {	
        a: +prompt('Введите первое число'),
        b: +prompt('Введите второе число'),
         	extr(){
         		return this.a - this.b;
         	},
         	mul(){
         		return this.a * this.b;
         	},
         	div(){
         		return this.a / this.b;
         	}
         }
         console.log(calc.extr());
         console.log(calc.mul());
         console.log(calc.div());
      function sumPlus (arr) {
        return arr.filter(i => i > 0).map(i => x += i, x=0).reverse()[0]
      }
      var massiv = [-8, -9, -3, -7, 0, 1, 7, 3, 5]
      sumPlus (massiv);
      console.log(massiv);

// 2) Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num. Решить с рекурсией и без
      for (let n = 1000, num = 0; n > 50; num++) 
      {      
        n /=2;
        num ++;
        console.log("Результат деления: " + n);
        console.log("Количество итераций: " + num);
      }
// 3) У скольких целых чисел, лежащих в диапазоне от 1 до 1000, есть цифра 3? PS: 33 - одно число
  function countThrees(num){
  let count = 0;
  for(let i = 0; i < num; i++){
  if(hasThree(i.toString())){
    count++;
    }
  }
    console.log(count);
  }
  function hasThree(num){
  let hasThree = false;
  for(let char of num){
    if(char == 3){
      hasThree = true;
    }
  }
  return hasThree;
  }
  countThrees(1000);