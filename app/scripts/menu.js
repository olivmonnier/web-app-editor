const open = function() {
  document.body.classList.add('has-active-menu');
  document.querySelector('main').classList.add('has-push-left');
  document.querySelector('.menu').classList.add('is-active');
  document.querySelector('.mask').classList.add('is-active');
}

const close = function() {
  document.body.classList.remove('has-active-menu');
  document.querySelector('main').classList.remove('has-push-left');
  document.querySelector('.menu').classList.remove('is-active');
  document.querySelector('.mask').classList.remove('is-active');
}

window.Menu = {
  open,
  close
}
