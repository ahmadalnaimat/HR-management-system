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
        employeeImage.alt = this.fullName;

        const employeeinfo = document.createElement('p')
        employeeinfo.textContent = `Name: ${this.fullname}-ID: ${this.ID}`;
        employeeinfo.textContent += `\nDepartment: ${this.department}-Level: ${this.level}`;
        employeeinfo.textContent += `\n${this.salary}`;

        const employeeSalary = document.createElement('p');
        employeeSalary.textContent = `Salary: ${this.salary}`;

        employeeContainer.appendChild(employeeImage);
        employeeContainer.appendChild(employeeinfo);
        document.getElementById('main').appendChild(employeeContainer);
    };

    const form= document.getElementById('addnew')
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const fullname=document.getElementById("fullname").value;
        const department=document.getElementById("department").value;
        const level=document.getElementById("level").value;
        const img=document.getElementById("img").value;
        const ID= Math.floor(Math.random()*(9999-1000+1)+1000)    

        const employee= new Employee(ID,fullname,department,level,img)

        employee.render();
        form.reset();
    });
});