import './first.html';
import './first.scss';

const btnRu = document.querySelector('.ru');
const btnEn = document.querySelector('.en');
const language = document.querySelector('.dropbtn');
const text = document.querySelector('.main__text');
const btn = document.querySelector('.btn');
const navLink = document.querySelectorAll('.nav__link');
const navItem = document.querySelectorAll('.nav__item');

let lang = 'ru';

if (localStorage.getItem('languageQuiz')) {
  lang = localStorage.getItem('languageQuiz');
}

const changeLanguage = (lang) => {
  if (lang === 'ru') {
    navItem[0].textContent = 'Главная';
    navLink[0].textContent = 'Викторина';
    navLink[1].textContent = 'Галерея';
    text.textContent = 'Пройдите данный тест и одновременно насладитесь прекрасными звуками пения птиц! Уже давно человечество наслаждалось сладкозвучными голосами птиц. В наши дни, в эпоху городской суеты, сможете ли вы определить вид птицы по её пению?'
    btn.textContent = 'Перейти к викторине'
    language.classList.add('ru');
    language.classList.remove('en');
    language.textContent = 'RU';
  } else {
    navItem[0].textContent = 'Main';
    navLink[0].textContent = 'Quiz';
    navLink[1].textContent = 'Gallery';
    text.textContent = 'Take this test and enjoy the beautiful sounds of birds singing at the same time! For a long time, mankind has enjoyed the sweet-sounding voices of birds. In our days, in the era of the bustle of the city, can you determine the type of bird by its song?'
    btn.textContent = 'Go to quiz'
    language.classList.remove('ru');
    language.classList.add('en');
    language.textContent = 'EN';
  }
}

changeLanguage(lang);

btnEn.addEventListener('click', () => {
  lang = 'eng'
  changeLanguage(lang);
  localStorage.setItem('languageQuiz', 'eng');
})

btnRu.addEventListener('click', () => {
  lang = 'ru'
  changeLanguage(lang);
  localStorage.setItem('languageQuiz', 'ru');
})