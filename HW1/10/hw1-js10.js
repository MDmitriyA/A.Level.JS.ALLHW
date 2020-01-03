var currency = 'грн' // валюта в которой считаем

// затраты для запуска продукта
var office = 10000 // офис
var production = 15000 // производство
var costPrice = 134120 // себестоимость материалов
var salaryForWork = 50000 // оплата рабочим за работу

var investmentAmount = office + production + costPrice + salaryForWork // просчёт суммы вложений

var salesPerMonth = 50000 // ориентировочный доход в месяц

// затраты в месяц
var employeeSalary = 10000 // зарплата Менеджера
var officeRental = 7000 // аренда офиса
var productionRental = 5000 // аренда производства
var taxes = 1650 // налоги

var monthlyExpenses = employeeSalary + officeRental + productionRental + taxes // просчёт расходов в месяц
var margin = salesPerMonth - monthlyExpenses // просчёт маржи в месяц

var payback = investmentAmount/margin // количество месяцев для окупаемости продукта

// результат
console.log('В случае вложения' + ' ' + investmentAmount + currency + ' ' + 'и затратах' + ' ' + monthlyExpenses + currency + '/месяц.' + ' ' + 'Ориентировочная окупаемость данного продукта, составляет' + ' ' + payback.toFixed(0) + ' ' + 'месяцев.')