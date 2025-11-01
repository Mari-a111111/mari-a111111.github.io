
const library = [
  { title: "1984", author: "George Orwell", year: 1949, isRead: false },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isRead: true },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isRead: false }
];


library.forEach(book => {
  book.markAsRead = function() {
    this.isRead = true;
    console.log(`Книга "${this.title}" позначена як прочитана.`);
  };
});


function calculateAverageYear(books) {
  if (books.length === 0) return 0;
  const sum = books.reduce((acc, book) => acc + book.year, 0);
  return Math.round(sum / books.length);
}


console.log("=== Аналіз бібліотеки ===");
library.forEach((book, i) => {
  console.log(`${i + 1}. "${book.title}" — ${book.year} рік, прочитано: ${book.isRead}`);
});

console.log(`Середній рік видання: ${calculateAverageYear(library)}`);

library[0].markAsRead(); // Приклад: позначаємо першу книгу
console.log("Після markAsRead:", library[0]);

let pets = [
  { name: "Рекс", species: "Собака", age: 3, favoriteFood: "Кістки", isVaccinated: true },
  { name: "Мурка", species: "Кіт", age: 2, favoriteFood: "Риба", isVaccinated: true },
  { name: "Кеша", species: "Папуга", age: 1, favoriteFood: "Насіння", isVaccinated: false }
];

pets.forEach(pet => {
  pet.vaccinate = function() {
    this.isVaccinated = true;
    console.log(`${this.name} тепер вакцинований!`);
    renderPets();
  };
});


document.addEventListener("DOMContentLoaded", () => {
 
  document.body.innerHTML = `
    <style>
      body { font-family: Arial, sans-serif; margin: 20px; background: #f9f9f9; }
      h1, h2 { color: #333; }
      .pet { border: 1px solid #ccc; padding: 12px; margin: 10px 0; border-radius: 8px; }
      .vaccinated { background-color: #d4edda; border-color: #c3e6cb; }
      .not-vaccinated { background-color: #f8d7da; border-color: #f5c6cb; }
      button { margin: 5px; padding: 6px 12px; cursor: pointer; }
      input, select { margin: 5px; padding: 6px; }
      .form { background: #fff; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); margin-top: 20px; }
      .stats { font-weight: bold; margin-top: 15px; color: #555; }
    </style>

    <h1>Мої домашні улюбленці</h1>
    <div id="pets-container"></div>

    <div class="form">
      <h2>Додати тварину</h2>
      <input type="text" id="name" placeholder="Ім'я">
      <select id="species">
        <option value="Собака">Собака</option>
        <option value="Кіт">Кіт</option>
        <option value="Папуга">Папуга</option>
        <option value="Хом'як">Хом'як</option>
      </select>
      <input type="number" id="age" placeholder="Вік" min="0">
      <input type="text" id="food" placeholder="Улюблений корм">
      <label><input type="checkbox" id="vaccinated"> Вакцинований</label>
      <button onclick="addPet()">Додати</button>
    </div>
  `;


  renderPets();
});


function renderPets() {
  const container = document.getElementById("pets-container");
  if (!container) return;

  container.innerHTML = "";

  pets.forEach((pet, index) => {
    const div = document.createElement("div");
    div.className = `pet ${pet.isVaccinated ? 'vaccinated' : 'not-vaccinated'}`;
    
    div.innerHTML = `
      <strong>${pet.name}</strong> (${pet.species})<br>
      Вік: ${pet.age} років | Корм: ${pet.favoriteFood}<br>
      Вакцинація: ${pet.isVaccinated ? 'Так' : 'Ні'}
      ${!pet.isVaccinated ? `<button onclick="pets[${index}].vaccinate()">Вакцинувати</button>` : ''}
    `;
    container.appendChild(div);
  });

  const stats = document.createElement("div");
  stats.className = "stats";
  stats.innerHTML = `
    <strong>Статистика:</strong> 
    Всього: ${pets.length}, 
    Вакциновані: ${pets.filter(p => p.isVaccinated).length}, 
    Середній вік: ${calculateAverageAge().toFixed(1)} років
  `;
  container.appendChild(stats);
}

function addPet() {
  const name = document.getElementById("name").value.trim();
  const species = document.getElementById("species").value;
  const age = Number(document.getElementById("age").value);
  const food = document.getElementById("food").value.trim();
  const isVaccinated = document.getElementById("vaccinated").checked;

  if (!name || !food || isNaN(age) || age < 0) {
    alert("Будь ласка, заповніть усі поля коректно!");
    return;
  }

  const newPet = { name, species, age, favoriteFood: food, isVaccinated };
  newPet.vaccinate = function() {
    this.isVaccinated = true;
    console.log(`${this.name} вакцинований!`);
    renderPets();
  };

  pets.push(newPet);
  renderPets();

  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("food").value = "";
  document.getElementById("vaccinated").checked = false;
}

function calculateAverageAge() {
  if (pets.length === 0) return 0;
  const sum = pets.reduce((acc, pet) => acc + pet.age, 0);
  return sum / pets.length;
}
