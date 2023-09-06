const nameQuest = "Гости"; 
const meData = document.querySelector(".header__today");

// имя квеста
document.querySelector(".popup__title").textContent = ` Как пройти на квест ${nameQuest}`;
document.querySelector(".footer_quest").textContent =` Забронировать квест ${nameQuest}`;
document.querySelector(".impoten-main").textContent =` Открытие квеста ${nameQuest}`;
// ДАТА
let date = new Date;
meData.innerHTML = date.toLocaleString();


//open popup
document.querySelector(".open-info").addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.popup').classList.toggle("popup_open")
})

document.querySelector(".popup__close").addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.popup').classList.remove("popup_open")
})


//.textContent =` Открытие квеста ${nameQuest}`;




