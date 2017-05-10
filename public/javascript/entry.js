require('../stylesheet/style.css');
let text= require('./module.js');
let array = [1, 2, 3, 4];

class Person{
	constructor(name){
        this.name = name;
    }
    sayHello(){
    	console.log(`hi I am ${this.name} `);
    }
}
let person=new Person('xyf')
person.sayHello();

document.write('It works.' + array[0]);
document.write(text);
