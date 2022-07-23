var btnElem = document.querySelector('.button');
var screanHeight = window.innerHeight;

var btnScroll = function btnScroll() {
  document.addEventListener('scroll', function (e) {
    if (screanHeight <= window.scrollY) {
      btnElem.classList.add('button__active');
    } else if (e.target.scrollingElement.scrollTop <= screanHeight) {
      btnElem.classList.remove('button__active');
      btnElem.style.pointerEvents = 'auto';
    }
  });
};

var btnClick = function btnClick() {
  btnElem.addEventListener('click', function () {
    var docHeight = window.scrollY;
    var progress = 0;
    var position = docHeight;
    var speed = 5; 

    btnElem.style.pointerEvents = 'none';

    var btnAnim = function btnAnim() {
      progress += 1;
      position -= progress * speed;
      window.scrollTo(0, position);

      if (position > 0) {
        requestAnimationFrame(btnAnim);
      }
    };

    requestAnimationFrame(btnAnim);
  });
};

var btnFunc = function btnFunc() {
  btnScroll();
  btnClick();
};

document.addEventListener('DOMContentLoaded', btnFunc);