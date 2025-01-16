total = 0
function addExpense(){
    let expenses = JSON.parse(localStorage.getItem('expenses'))
    let expense = document.getElementById('expense').value
    let amount  = document.getElementById('amount').value
    let date = document.getElementById('date').value
    expenses.push({expense,amount,date})
    total += parseInt(amount)
    document.getElementById('expenses').innerHTML+=`
    <tr>
        <td>${expense}</td>
        <td>${amount}</td>
        <td>${date}</td>
    </tr>    
    `
    document.getElementById('total').innerHTML = `Total: ${total}`
    localStorage.setItem('expenses',JSON.stringify(expenses))
}

function LoadExpenses(){
    let expenses = JSON.parse(localStorage.getItem('expenses'))
    expenses.forEach(element => {
        total+=parseInt(element.amount)
        document.getElementById('expenses').innerHTML+=`
        <tr>
            <td>${element.expense}</td>
            <td>${element.amount}</td>
            <td>${element.date}</td>
        </tr>    
        `  
    });
    document.getElementById('total').innerHTML = `Total: ${total}`
}