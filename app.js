// console.log("hello urban ");
  
// const tutorial = require('./tutorial');
// console.log(tutorial.sum(20, 30));
// console.log(tutorial.PI);
// console.log(new tutorial.SomeMathObject());

// console.log(tutorial(10, 20));

const Result = require ('events');
const result = new Result();

result.on('tutorial', (num1, num2 ) => {
  // console.log('tutorial event has occurred');
  console.log(num1 + num2)
});

result.emit('tutorial',  20, 40);

class Person extends Result{
  constructor(name){
    super();
    this._name = name;
  }
  get name (){
    return this._name
  }
}

let urban = new Person('urban pac');
urban.on('name', () =>{
  console.log('my name is '  + urban.name);
});
urban.emit('name');
