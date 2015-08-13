// ! ! !
// Three Bugs
//Only runs through the first array FIXED
//Output pulling intial arrays FIXED
//numbers aren't rounded FIXED

var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');
var calcArray = [];
//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
	//var employee = array[i]  ;// Something about this line breaks it? used "array" too much
 	calculateSTI(array[i]);
  newEl = document.createElement('li');
  newText = document.createTextNode(calcArray[i]); // this line controls the output on the screen and is currently taking the starting info instead of the final calculated info
	newEl.appendChild(newText);
	position.appendChild(newEl);
  
  
}
  
function calculateSTI(employee){
  var newArray = [];
  newArray[0] = employee[0];
  

  var employeeNumber = employee[1];
  var baseSalary = employee[2];
  var reviewScore = employee[3];

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newArray[1] = (bonus * 100) + "%";
  newArray[2] = Math.round(baseSalary * (1.0 + bonus)); // round the # FIXED
  newArray[3] = Math.round(baseSalary * bonus); //round the # FIXED
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  calcArray.push(newArray);
  console.log(calcArray);
  return newArray;
  
}
console.log(calcArray);


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
  return basePercent ;
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
