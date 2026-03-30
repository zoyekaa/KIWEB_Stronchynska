// Элементы
const infoOverlay = document.getElementById('info-overlay');
const plansOverlay = document.getElementById('plans-overlay');
const btnOpenInfo = document.getElementById('open-info');
const btnOpenPlans = document.getElementById('open-plans');
const btnCloseInfo = document.getElementById('close-info');
const btnClosePlans = document.getElementById('close-plans');
const btnToPlans = document.getElementById('switch-to-plans');
const btnToInfo = document.getElementById('switch-to-info');
const mainMenu = document.getElementById('main-menu-overlay');
const btnOpenMain = document.getElementById('open-main-menu');
const btnCloseMain = document.getElementById('close-main-menu');

function safeAddEvent(el, evt, fn){
    if (!el) return;
    el.addEventListener(evt, fn);
}

function closeAll(){
    if (infoOverlay) infoOverlay.classList.remove('active');
    if (plansOverlay) plansOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

safeAddEvent(btnOpenInfo, 'click', () => {
    if (infoOverlay) infoOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

safeAddEvent(btnOpenPlans, 'click', () => {
    if (plansOverlay) plansOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

safeAddEvent(btnCloseInfo, 'click', closeAll);
safeAddEvent(btnClosePlans, 'click', closeAll);

safeAddEvent(btnToPlans, 'click', () => {
    if (infoOverlay) infoOverlay.classList.remove('active');
    if (plansOverlay) plansOverlay.classList.add('active');
});

safeAddEvent(btnToInfo, 'click', () => {
    if (plansOverlay) plansOverlay.classList.remove('active');
    if (infoOverlay) infoOverlay.classList.add('active');
});

safeAddEvent(btnOpenMain, 'click', () => {
    if (mainMenu) mainMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

safeAddEvent(btnCloseMain, 'click', () => {
    if (mainMenu) mainMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
});