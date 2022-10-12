var	accordeon = document.getElementById('accordeon');
//открыть\закрыть элемент списка
function openClose(e){

  let _target = e.target.closest("li")
   //есть ли активный элемент
  if (_target.classList.contains("active")) {
    //убрать активный класс
    _target.classList.remove("active")
   } else {
     let _active = document.querySelector(".active")
       if (_active) {
          //удалим класс
          _active.classList.remove("active")
           //при клике на пункт меню открыть его спиcок
          _target.classList.add("active")
      }
       _target.classList.add("active")
  }
}
accordeon.addEventListener('click', openClose);