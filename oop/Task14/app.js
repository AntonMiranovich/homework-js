// 7. Создайте класс Person с атрибутом name. Наследуйте от него класс Employee, добавив атрибуты
//  position и monthly_salary. Реализуйте метод getAnnualSalary(), возвращающий годовую зарплату.
//  Входные: Employee("Alice", "Developer", 5000) → Результат: 60000
//  Входные: Employee("Bob", "Manager", 7000) → Результат: 84000
//  Входные: Employee("Charlie", "Designer", 4000) → Результат: 48000


class Person {
    constructor(name) {
        this.name = name;
    }
}

class Employee extends Person {
    constructor(name, position, monthly_salary) {
        super(name);
        this.position = position;
        this.monthly_salary = monthly_salary;
    }

    getAnnualSalary() {
        return `${this.name} => ${this.monthly_salary * 12}`
    }
}


const employee1 = new Employee("Alice", "Developer", 5000);
const employee2 = new Employee("Bob", "Manager", 7000);
const employee3 = new Employee("Charlie", "Designer", 4000);

console.log(employee1.getAnnualSalary()); 
console.log(employee2.getAnnualSalary()); 
console.log(employee3.getAnnualSalary()); 