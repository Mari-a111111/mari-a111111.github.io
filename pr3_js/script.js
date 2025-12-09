const myDate = new Date(2021, 1, 20, 3, 12); 


document.getElementById("task1").textContent = 
  `20 лютого 2021, 3:12 ранку → ${myDate.toLocaleString('uk-UA')}`;


function getWeekDay(date) {
  const days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  return days[date.getDay()];
}

document.getElementById("task2").textContent = 
  `20 лютого 2021 — це ${getWeekDay(myDate)}`;


const testDates = [
  new Date(2025, 11, 9),  
  new Date(2024, 0, 1),   
  new Date(2023, 4, 13),  
  new Date(),
  new Date(2030, 11, 25)  
];

const testList = document.getElementById("tests");

testDates.forEach(d => {
  const li = document.createElement("li");
  li.textContent = `${d.toLocaleDateString('uk-UA')} → ${getWeekDay(d)}`;
  testList.appendChild(li);
});