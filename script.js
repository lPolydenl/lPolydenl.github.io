var offer = new Date("Sep 5, 2021 12:00:00").getTime(); // Впишите дату и время окончании акции
/* var result = 5 % 2;
alert(result); */

var x = setInterval(function() {

    // Создадим переменную now и поместим в нее текущие время и дату
    var now = new Date().getTime();
    
    // Узнаем, сколько осталось миллисекунд до конца акции

    var distance = offer - now;
    
    // Переведем миллисекунды в дни
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    // Выводим результат в элементе с id "Timer"
    document.querySelector(".Timer").innerHTML = "До конца акции " + days + " дней";
    // если дата уже наступила, выводим текст "Акциия закончилась"
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".Timer").innerHTML = "Акция закончилась";
    }
}, 1000);