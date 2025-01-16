let expenses = []
function addExpense(){
    let expense = document.getElementById('expense').value
    let amount  = document.getElementById('amount').value
    let date = document.getElementById('date').value
    expenses.push({expense,amount,date})
    document.getElementById('expenses').innerHTML+=`
    <tr>
        <td>${expense}</td>
        <td>${amount}</td>
        <td>${date}</td>
    </tr>    
    `
    localStorage.setItem('expenses',JSON.stringify(expenses))
}

function LoadExpenses(){
    let expenses = JSON.parse(localStorage.getItem('expenses'))
    expenses.array.forEach(element => {
        document.getElementById('expenses').innerHTML+=`
        <tr>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td>${element[2]}</td>
        </tr>    
        `  
    });
}