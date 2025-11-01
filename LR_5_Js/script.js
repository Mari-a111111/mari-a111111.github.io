
const fInput = document.getElementById('fahrenheit');
const cInput = document.getElementById('celsius');

fInput.addEventListener('input', () => {
  if (fInput.value !== '') {
    const f = parseFloat(fInput.value);
    const c = (5 / 9) * (f - 32);
    cInput.value = isNaN(c) ? '' : c.toFixed(2);
  }
});

cInput.addEventListener('input', () => {
  if (cInput.value !== '') {
    const c = parseFloat(cInput.value);
    const f = (9 / 5) * c + 32;
    fInput.value = isNaN(f) ? '' : f.toFixed(2);
  }
});

let currentA, currentB;

function generateQuestion() {
  currentA = Math.floor(Math.random() * 9) + 1;
  currentB = Math.floor(Math.random() * 9) + 1;
  document.getElementById('question').textContent = `${currentA} × ${currentB} = ?`;
  document.getElementById('answer').value = '';
  document.getElementById('feedback').textContent = '';
}

document.getElementById('checkBtn').addEventListener('click', () => {
  const userAnswer = parseInt(document.getElementById('answer').value);
  const correctAnswer = currentA * currentB;
  const feedback = document.getElementById('feedback');

  if (userAnswer === correctAnswer) {
    score++;
    feedback.textContent = 'Правильно!';
    feedback.className = 'result correct';
  } else {
    feedback.textContent = `Неправильно. Правильно: ${correctAnswer}`;
    feedback.className = 'result wrong';
  }
  document.getElementById('score').textContent = score;
});

document.getElementById('nextBtn').addEventListener('click', generateQuestion);
generateQuestion();

let scoreRadio = 0;
let currentARadio, currentBRadio;
let answered = false;

function generateRadioQuestion() {
  currentARadio = Math.floor(Math.random() * 9) + 1;
  currentBRadio = Math.floor(Math.random() * 9) + 1;
  const correct = currentARadio * currentBRadio;
  document.getElementById('questionRadio').textContent = `${currentARadio} × ${currentBRadio} = ?`;

  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = '';
  answered = false;

  const answers = [correct];
  while (answers.length < 4) {
    const wrong = Math.floor(Math.random() * 81) + 1;
    if (!answers.includes(wrong)) answers.push(wrong);
  }
  answers.sort(() => Math.random() - 0.5);

  answers.forEach(ans => {
    const label = document.createElement('label');
    label.style.display = 'block';
    label.style.margin = '8px 0';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'radioAnswer';
    radio.value = ans;

    radio.addEventListener('change', () => {
      if (answered) return;
      answered = true;
      const feedback = document.getElementById('feedbackRadio');
      if (ans === correct) {
        scoreRadio++;
        feedback.textContent = 'Правильно!';
        feedback.className = 'result correct';
      } else {
        feedback.textContent = `Неправильно. Правильно: ${correct}`;
        feedback.className = 'result wrong';
      }
      document.getElementById('scoreRadio').textContent = scoreRadio;
      document.querySelectorAll('input[name="radioAnswer"]').forEach(r => r.disabled = true);
    });

    label.appendChild(radio);
    label.appendChild(document.createTextNode(` ${ans}`));
    optionsContainer.appendChild(label);
  });
}

document.getElementById('nextBtnRadio').addEventListener('click', generateRadioQuestion);
generateRadioQuestion();

const imagesArray = [
  { path: 'data:image/jpeg;base64,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', title: 'Морква', description: 'Корисний коренеплід, багатий на вітамін A' },
  { path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4UTVHQ0imEzLtJp7jxRiDrbvZdENUXUi6rntcljyHoscfqNUs7AxRMc31JNh4MHJ5KTxS6uSvkd7G5H33X76BNGVTju1VsmpfSQqBlsjmUw&s=10', title: 'Картопля', description: 'Універсальний овоч, основа багатьох страв' },
  { path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU8W89aGsK2QYB_hVblPGlFpLVbRtb79TtrWQ9DqVUPaKJIEB2hf5o7OiSz1GpvpzEEsJgyn6wf63ISgsLCq26Y88kt-HwKXo49UtU7UiXYA&s=10', title: 'Помідор', description: 'Соковитий овоч, джерело лікопену'
   },
];

function initPhotoRotator(containerId, images) {
  const container = document.getElementById(containerId);
  let currentIndex = 0;

  const img = document.createElement('img');
  const counter = document.createElement('div');
  const title = document.createElement('h3');
  const desc = document.createElement('p');
  const prevLink = document.createElement('a');
  const nextLink = document.createElement('a');

  prevLink.href = '#'; nextLink.href = '#';
  prevLink.textContent = 'Назад';
  nextLink.textContent = 'Вперед';
  prevLink.className = 'nav'; nextLink.className = 'nav';

  const nav = document.createElement('div');
  nav.className = 'nav';
  nav.appendChild(prevLink);
  nav.appendChild(document.createTextNode(' | '));
  nav.appendChild(nextLink);

  container.appendChild(counter);
  container.appendChild(img);
  container.appendChild(title);
  container.appendChild(desc);
  container.appendChild(nav);

  function updateImage() {
    const imgData = images[currentIndex];
    img.src = imgData.path;
    img.alt = imgData.title;
    counter.textContent = `${currentIndex + 1} / ${images.length}`;
    title.textContent = imgData.title;
    desc.textContent = imgData.description;

    prevLink.className = currentIndex === 0 ? 'nav hidden' : 'nav';
    nextLink.className = currentIndex === images.length - 1 ? 'nav hidden' : 'nav';
  }

  prevLink.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentIndex > 0) {
      currentIndex--;
      updateImage();
    }
  });

  nextLink.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentIndex < images.length - 1) {
      currentIndex++;
      updateImage();
    }
  });

  updateImage();
}

initPhotoRotator('rotator', imagesArray);