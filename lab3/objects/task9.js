let name = prompt("Введите имя сотрудника: ");
let department = prompt("Введите отдел: ");
let phone = prompt("Введите номер телефона: ");
let salary = prompt("Введите зарплату: ");

function Employee(name, department, phone, salary) {
    this.name = name;
    this.department = department;
    this.phone = phone;
    this.salary = salary;

    this.aboutEmployee = function() {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(key, this[key]);
            }
        }
    };
}

let employee = new Employee(name, department, phone, salary);
employee.aboutEmployee();