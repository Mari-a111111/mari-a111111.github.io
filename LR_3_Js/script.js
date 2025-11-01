
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function showGreeting(fullName, age) {
  alert(`Hello, ${fullName}! You are ${age} years old.`);
}

let firstName = prompt("Введіть ваше ім'я:");
let lastName = prompt("Введіть ваше прізвище:");
let age = prompt("Введіть ваш вік:");

let fullName = getFullName(firstName, lastName);
showGreeting(fullName, age);

console.log(`Привітання: Hello, ${fullName}! You are ${age} years old.`);



function getStudentInfo() {
  let name = prompt("Введіть ім'я студента:");
  let score = Number(prompt("Введіть бал студента (0–12):"));
  return { name, score };
}

function checkGrade(score) {
  if (score >= 10 && score <= 12) return "Excellent";
  if (score >= 7 && score <= 9) return "Good";
  if (score >= 4 && score <= 6) return "Satisfactory";
  return "Fail";
}

function showResult(name, grade) {
  alert(`Student: ${name}\nGrade: ${grade}`);
  console.log(`Student: ${name}\nGrade: ${grade}`);
}

// Запуск
let student = getStudentInfo();
let grade = checkGrade(student.score);
showResult(student.name, grade);



function calculateTip(amount, percent = 10) {
  return (amount * percent) / 100;
}

function showBillResult(amount, tip) {
  let total = amount + tip;
  let tipPercent = (tip * 100 / amount).toFixed(0);
  alert(
    `Bill: ${amount} грн\n` +
    `Tip (${tipPercent}%): ${tip} грн\n` +
    `Total: ${total} грн`
  );
  console.log(`Bill: ${amount} грн`);
  console.log(`Tip (${tipPercent}%): ${tip} грн`);
  console.log(`Total: ${total} грн`);
}


let billAmount = Number(prompt("Введіть суму рахунку (грн):"));
let tipPercentInput = prompt("Введіть відсоток чайових (за замовчуванням 10):");
let tipPercent = tipPercentInput ? Number(tipPercentInput) : 10;

let tip = calculateTip(billAmount, tipPercent);
showBillResult(billAmount, tip);
