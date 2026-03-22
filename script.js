// Элементы
const infoOverlay = document.getElementById('info-overlay');
const plansOverlay = document.getElementById('plans-overlay');

// Кнопки открытия из футера
const btnOpenInfo = document.getElementById('open-info');
const btnOpenPlans = document.getElementById('open-plans');

// Кнопки закрытия
const btnCloseInfo = document.getElementById('close-info');
const btnClosePlans = document.getElementById('close-plans');

// Кнопки переключения внутри окон
const btnToPlans = document.getElementById('switch-to-plans');
const btnToInfo = document.getElementById('switch-to-info');

// Функция закрытия всего
function closeAll() {
    infoOverlay.classList.remove('active');
    plansOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Открытие из футера
btnOpenInfo.addEventListener('click', () => {
    infoOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

btnOpenPlans.addEventListener('click', () => {
    plansOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Закрытие
btnCloseInfo.addEventListener('click', closeAll);
btnClosePlans.addEventListener('click', closeAll);

// ПЕРЕКЛЮЧЕНИЕ (Самое важное)
btnToPlans.addEventListener('click', () => {
    infoOverlay.classList.remove('active'); // Убираем инфо
    plansOverlay.classList.add('active');    // Показываем планы
});

btnToInfo.addEventListener('click', () => {
    plansOverlay.classList.remove('active'); // Убираем планы
    infoOverlay.classList.add('active');     // Показываем инфо
});

const mainMenu = document.getElementById('main-menu-overlay');
const btnOpenMain = document.getElementById('open-main-menu');
const btnCloseMain = document.getElementById('close-main-menu');

// Открыть главное меню
btnOpenMain.addEventListener('click', () => {
    mainMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Закрыть главное меню
btnCloseMain.addEventListener('click', () => {
    mainMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
});