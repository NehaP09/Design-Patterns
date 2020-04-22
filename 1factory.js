function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
        break;
      case 2:
        return new Tester(name);
        break;
    }
  };
}

function say() {
  console.log(`Hi, I am ${this.name} and I am a ${this.type}`);
}
const employeeFactory = new EmployeeFactory();
let employees = [];

employees.push(employeeFactory.create("Jack", 1));
employees.push(employeeFactory.create("Gill", 2));
employees.push(employeeFactory.create("Patrick", 1));
employees.push(employeeFactory.create("Richard", 2));
employees.push(employeeFactory.create("Susie", 1));
employees.push(employeeFactory.create("Chiru", 2));

employees.forEach(employee => say.call(employee));
