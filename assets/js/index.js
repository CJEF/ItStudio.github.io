/* мобильное меню >>>>>>>>>>>>>>>>>>>>>>*/
let burger = document.querySelector("#burger");
let navigation = document.querySelector(".navigation");

let contactBtn = document.querySelector(".hire--btn");
burger.addEventListener('click', function () {
    body.classList.toggle('overflow')
    navigation.classList.toggle('active');
    burger.classList.toggle('hamburger_active');
})

contactBtn.addEventListener('click', function () {
    navigation.classList.toggle('active');
    burger.classList.toggle('hamburger_active');
    //body.classList.toggle('overflow')
    if (body.classList.contains('overflow'))
        body.classList.remove('overflow')
})
/* мобильное меню />>>>>>>>>>>>>>>>>>>>> */