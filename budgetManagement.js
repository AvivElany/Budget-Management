document.addEventListener("DOMContentLoaded", function() {
    let totalIncome = 0;
    let totalExpenses = 0;
    const incomeForm = document.getElementById("income-form");
    const expenseForm = document.getElementById("expense-form");
    const incomeDisplay = document.getElementById("total-income");
    const expenseDisplay = document.getElementById("total-expenses");
    const balanceDisplay = document.getElementById("balance");
    const expenseList = document.getElementById("expense-list");

    // הוספת משכורת
    incomeForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let incomeValue = parseFloat(document.getElementById("income").value);
        if (incomeValue > 0) {
            totalIncome += incomeValue;
            updateDisplay();
        }
        document.getElementById("income").value = "";
    });

    // הוספת הוצאה
    expenseForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let expenseName = document.getElementById("expense-name").value;
        let expenseAmount = parseFloat(document.getElementById("expense-amount").value);

        if (expenseAmount > 0 && expenseName.trim() !== "") {
            totalExpenses += expenseAmount;
            addExpenseToList(expenseName, expenseAmount);
            updateDisplay();
        }

        document.getElementById("expense-name").value = "";
        document.getElementById("expense-amount").value = "";
    });

    // עדכון התצוגה של היתרה
    function updateDisplay() {
        incomeDisplay.textContent = totalIncome.toFixed(2);
        expenseDisplay.textContent = totalExpenses.toFixed(2);
        balanceDisplay.textContent = (totalIncome - totalExpenses).toFixed(2);
    }

    // הוספת הוצאה לרשימה
    function addExpenseToList(name, amount) {
        let li = document.createElement("li");
        li.innerHTML = `${name} - ${amount} ₪ <button onclick="removeExpense(this, ${amount})">❌</button>`;
        expenseList.appendChild(li);
    }

    // מחיקת הוצאה
    window.removeExpense = function(button, amount) {
        button.parentElement.remove();
        totalExpenses -= amount;
        updateDisplay();
    };
});
