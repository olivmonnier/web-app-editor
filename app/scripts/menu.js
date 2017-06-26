const $body = document.body;
const $btnMenu = document.getElementById('btnMenuOpen');
const $btnSettings = document.getElementById('btnSettings');
const $main = document.querySelector('main');
const $menuLeft = document.querySelector('.menu--push-left');
const $menuRight = document.querySelector('.menu--slide-right');
const $mask = document.querySelector('.mask');
const $btnClose = document.querySelectorAll('.menu .menu__close');

const _addClass = function(elem, className) {
  return elem.classList.add(className);
}

const _removeClass = function(elem, className) {
  return elem.classList.remove(className);
}

const open = function(side) {
  _addClass($body, 'has-active-menu');
  _addClass($mask, 'is-active');

  if (side === 'left') {
    _addClass($main, 'has-push-left');
    _addClass($menuLeft, 'is-active');
  } else {
    _addClass($menuRight, 'is-active');
  }
}

const close = function() {
  const $menuActive = document.querySelector('.menu.is-active');

  _removeClass($body, 'has-active-menu');
  _removeClass($mask, 'is-active');

  if ($menuActive.classList.contains('menu--push-left')) {
    _removeClass($main, 'has-push-left');
    _removeClass($menuLeft, 'is-active');
  } else {
    _removeClass($menuRight, 'is-active');
  }
}

$btnMenu.addEventListener('click', (e) => open('left'));
$btnSettings.addEventListener('click', (e) => open('right'));
Array.from($btnClose).forEach(btn => btn.addEventListener('click', close));
$mask.addEventListener('click', close);

window.Menu = {
  open,
  close
}
