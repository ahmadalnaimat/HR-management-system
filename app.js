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

        const employeeImage = document.createElement('img');
        employeeImage.src = this.img;
        employeeImage.alt = this.fullname;

        const employeeinfo = document.createElement('p')
        employeeinfo.textContent = `Name: ${this.fullname} - ID: ${this.ID}`;
        employeeinfo.textContent += `\nDepartment: ${this.department} - Level: ${this.level}`;
        employeeinfo.textContent += `\nSalary: ${this.salary}`;

        employeeContainer.appendChild(employeeImage);
        employeeContainer.appendChild(employeeinfo);
        document.getElementById('main').appendChild(employeeContainer);
    };

    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];

    if (storedEmployees.length === 0) {
        const hardcodedEmployees = [
            new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior', './assets/Ghazi.jpg'),
            new Employee(1001, 'Lana Ali', 'Finance', 'Senior', './assets/Lana.jpg'),
            new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior', './assets/Tamara.jpg'),
            new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior', './assets/Safi.jpg'),
            new Employee(1004, 'Omar Zaid', 'Development', 'Senior', './assets/Omar.jpg'),
            new Employee(1005, 'Rana Saleh', 'Development', 'Junior', './assets/Rana.jpg'),
            new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior', './assets/Hadi.jpg')
        ];
        
        localStorage.setItem("employees", JSON.stringify(hardcodedEmployees));

        hardcodedEmployees.forEach(employee => {
            employee.render();
        });
    }

    storedEmployees.forEach(employee => {
        const emp = new Employee(employee.ID, employee.fullname, employee.department, employee.level, employee.img);
        emp.render();
    });

    const form = document.getElementById('addnew');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const fullname = document.getElementById("fullname").value;
        const department = document.getElementById("department").value;
        const level = document.getElementById("level").value;
        const img = document.getElementById("img").value;
        const ID = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);

        const newEmployee = new Employee(ID, fullname, department, level, img);
        storedEmployees.push(newEmployee); 
        localStorage.setItem("employees", JSON.stringify(storedEmployees));

        newEmployee.render(); 
        form.reset();
    });
});
