function Employee(name, position){
    this.name = name;
    this.position = position;
}

function Junior(name, position, salary){
    Employee.call(this, name, position)
    let _salary = salary;

    this.getSalary = function () {
        return `O salário de ${this.name} é de: R$: ${_salary}`;
    }

    this.setSalary = function (value) {
        _salary = value;
    }
}

function Mid(name, position, salary){
    Employee.call(this, name, position)
    let _salary = salary;

    this.getSalary = function () {
        return `O salário de ${this.name} é de: R$: ${_salary}`;
    }

    this.setSalary = function (value) {
        _salary = value;
    }
}

function Senior(name, position, salary){
    Employee.call(this, name, position)
    let _salary = salary;

    this.getSalary = function () {
        return `O salário de ${this.name} é de: R$: ${_salary}`;
    }

    this.setSalary = function (value) {
        _salary = value;
    }
}