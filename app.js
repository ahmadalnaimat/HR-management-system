document.addEventListener('DOMContentLoaded', function() {
    function Employee(ID, fullname, department, level, img) {
        this.ID = ID;
        this.fullname = fullname;
        this.department = department;
        this.level = level;
        this.img = img;
        this.salary = this.calculateSalary();
    }

    Employee.prototype.calculateSalary = function() {
        let salary;
        if (this.level === "Senior") {
            salary = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
        } else if (this.level === "Mid-Senior") {
            salary = Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
        } else if (this.level === "Junior") {
            salary = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
        }
        let netSalary = salary * (1 - 0.075);
        return netSalary.toFixed();
    }

    Employee.prototype.render = function() {
        const employeeContainer = document.createElement('div');
        employeeContainer.classList.add('container');

        const employeeName = document.createElement('h2');
        employeeName.textContent = this.fullname;

        const employeeSalary = document.createElement('p');
        employeeSalary.textContent = `Salary: ${this.salary}`;

        employeeContainer.appendChild(employeeName);
        employeeContainer.appendChild(employeeSalary);

        document.getElementById('main').appendChild(employeeContainer);
    };

    const employees = [
        new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior'),
        new Employee(1001, 'Lana Ali', 'Finance', 'Senior'),
        new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior'),
        new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior'),
        new Employee(1004, 'Omar Zaid', 'Development', 'Senior'),
        new Employee(1005, 'Rana Saleh', 'Development', 'Junior'),
        new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior')
    ];

    employees.forEach(employee => {
        employee.render();
    });
});