
class Person {
  constructor(name = 'Anonimo', age = 0){
    this.name = name;
    this.age = age;
  }
  getGretting(){
    return `Hey que pasa ${ this.name } Tienes ${ this.age } años`;
  }
}

class Employee extends Person {
  constructor(name, age, salary = 0){
    super(name, age);
    this.salary = salary;
  }
  hasSalary(){
    return !!this.salary;
  }
  getGretting(){
    let gretting = super.getGretting();
    return gretting;
  }
}

const me = new Employee('Manuel', 29, 1700);
console.log(me.getGretting());

const other = new Employee();
console.log(other);
