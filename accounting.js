document.addEventListener('DOMContentLoaded', function() {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    var Administrationcount = 0;
    var AdministrationTotalSal = 0;
    var Marketingcount=0;
    var MarketingTotalSal=0;
    var Developmentcount=0;
    var DevelopmentTotalSal=0;
    var Financecount=0;
    var FinanceTotalSal=0;

    storedEmployees.forEach(employee => {
        switch (employee.department) {
            case "Administration":
                Administrationcount++;
                AdministrationTotalSal += parseFloat(employee.salary);
                break;
            case "Marketing":
                Marketingcount++;
                MarketingTotalSal += parseFloat(employee.salary);
                break;
            case "Development":
                Developmentcount++;
                DevelopmentTotalSal+=parseFloat(employee.salary);
                break;
            case "Finance":
                Financecount++;
                FinanceTotalSal+=parseFloat(employee.salary);
                break;
        }
        var totalemp=0;
        totalemp++;
    });
    var AdministrationAvg = 0;
    AdministrationAvg= AdministrationTotalSal / Administrationcount;
    var MarketingAvg = 0;
    MarketingAvg= MarketingTotalSal / Marketingcount;
    var DevelopmentAvg = 0;
    DevelopmentAvg= DevelopmentTotalSal / Developmentcount;
    var FinanceAvg = 0;
    FinanceAvg= FinanceTotalSal / Financecount;

    var totalAllSal= FinanceTotalSal + MarketingTotalSal + DevelopmentTotalSal + AdministrationTotalSal;

    var totalAvg= AdministrationAvg + MarketingAvg + DevelopmentAvg + FinanceAvg;

    function Render() {
        const tableContainer=document.getElementById('table')

        const tr1=document.createElement('tr')
        tableContainer.appendChild(tr1)

        const td1=document.createElement('td')
        td1.textContent = "Administration";
        tr1.appendChild(td1)

        const td2=document.createElement('td')
        td2.textContent = Administrationcount;
        tr1.appendChild(td2)

        const td3=document.createElement('td')
        td3.textContent = AdministrationAvg.toFixed(0);
        tr1.appendChild(td3)

        const td4=document.createElement('td')
        td4.textContent = AdministrationTotalSal.toFixed(0);
        tr1.appendChild(td4)

        const tr2=document.createElement('tr')
        tableContainer.appendChild(tr2)

        const td5=document.createElement('td')
        td5.textContent = "Marketing";
        tr2.appendChild(td5)

        const td6=document.createElement('td')
        td6.textContent = Marketingcount;
        tr2.appendChild(td6)

        const td7=document.createElement('td')
        td7.textContent = MarketingAvg.toFixed(0);
        tr2.appendChild(td7)

        const td8=document.createElement('td')
        td8.textContent = MarketingTotalSal.toFixed(0);
        tr2.appendChild(td8)

        const tr3=document.createElement('tr')
        tableContainer.appendChild(tr3)

        const td9=document.createElement('td')
        td9.textContent = "Development";
        tr3.appendChild(td9)

        const td10=document.createElement('td')
        td10.textContent = Developmentcount;
        tr3.appendChild(td10)

        const td11=document.createElement('td')
        td11.textContent = DevelopmentAvg.toFixed(0);
        tr3.appendChild(td11)

        const td12=document.createElement('td')
        td12.textContent = DevelopmentTotalSal.toFixed(0);
        tr3.appendChild(td12)

        const tr4=document.createElement('tr')
        tableContainer.appendChild(tr4)

        const td13=document.createElement('td')
        td13.textContent = "Finance";
        tr4.appendChild(td13)

        const td14=document.createElement('td')
        td14.textContent = Financecount;
        tr4.appendChild(td14)

        const td15=document.createElement('td')
        td15.textContent = FinanceAvg.toFixed(0);
        tr4.appendChild(td15)

        const td16=document.createElement('td')
        td16.textContent = FinanceTotalSal.toFixed(0);
        tr4.appendChild(td16)

        const tr5=document.createElement('tr')
        tableContainer.appendChild(tr5)

        const td17=document.createElement('td')
        td17.setAttribute('colspan', '2');
        td17.textContent = "Total Salary: "+totalAllSal.toFixed(0);
        tr5.appendChild(td17)

        const td18=document.createElement('td')
        td18.setAttribute('colspan', '2');
        td18.textContent = "Total Avrage Salary: "+totalAvg.toFixed(0);
        tr5.appendChild(td18)
    }
    Render();
});