 function Employee(name, num, salary, rating) {
  this.firstName = name;
  this.employeeNum = num;
  this.salary = salary;
  this.rating = rating; };

var objAtticus = new Employee("Atticus", 2405, 47000, 3);
var objJem = new Employee("Jem",  62347, 63500,  4);
var objBoo = new Employee("Boo",  11435,  4000,  3);
var objScout = new Employee("Scout", 6243,  74750,  50);
console.log(objAtticus, objScout, objJem, objBoo);

var array = [objAtticus, objJem, objBoo, objScout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

console.log(array);
for(var i = 0; i < array.length; i++){
  array[i] = calculateSTI(array[i]);
  newEl = document.createElement('li');
  newText = document.createTextNode(array[i]);
  newEl.appendChild(newText);
  position.appendChild(newEl);
  console.log (array[i]);
}

function calculateSTI(obj){
  
  function employeeTotal(name, bonusPerc, bonus, newSalary){
    this.name = name;
    this.bonusPerc = bonusPerc;
    this.bonus = bonus;
    this.newSalary = newSalary
  }
  var calc = new employeeTotal();
  console.log(obj);

  employeeTotal.name = this.firstName;

  var employeeNumber = this.employeeNum;
  var baseSalary = this.salary;
  var reviewScore = this.rating;

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
    console.log(employeeTotal);
  }

  employeeTotal.bonusPerc = " " + bonus + "%";
  employeeTotal.newSalary = " " + Math.round(baseSalary * (1.0 + bonus)).toString();
  employeeTotal.bonus = " " + Math.round((baseSalary) * bonus).toString();
  console.log(employeeTotal);
  return employeeTotal;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent;
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}