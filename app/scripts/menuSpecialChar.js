const insertCharacter = function(e) {
  const { editor } = window.App;
  const elem = e.target;

  editor.insert(elem.textContent);
  editor.focus();
}

Array.from(document.querySelectorAll('.menu-special-char .nav-item'))
  .forEach(item => item.addEventListener('click', insertCharacter));
