const $body = document.body;
const $btnMenu = document.getElementById('btnMenuOpen');
const $main = document.querySelector('main');
const $menu = document.querySelector('.menu');
const $mask = document.querySelector('.mask');
const $btnClose = document.querySelector('.menu .menu__close');

const _addClass = function(elem, className) {
  return elem.classList.add(className);
}

const _removeClass = function(elem, className) {
  return elem.classList.remove(className);
}

const open = function() {
  _addClass($body, 'has-active-menu');
  _addClass($main, 'has-push-left');
  _addClass($menu, 'is-active');
  _addClass($mask, 'is-active');
}

const close = function() {
  _removeClass($body, 'has-active-menu');
  _removeClass($main, 'has-push-left');
  _removeClass($menu, 'is-active');
  _removeClass($mask, 'is-active');
}

$btnMenu.addEventListener('click', open);
$btnClose.addEventListener('click', close);
$mask.addEventListener('click', close);

window.Menu = {
  open,
  close
}
