const $btnFileOpen = document.getElementById('btnFileOpen');
const $inputFilename = document.getElementById('filename');
const $btnFileSave = document.getElementById('btnFileSave');
const $btnFileExport = document.getElementById('btnFileExport');
const $menuItems = document.querySelector('.menu .menu__items');

const handleFileSelect = function(e) {
  const { editor } = window.App;
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    editor.setValue(reader.result);
    Editor.setMode(editor, file.name);
    $inputFilename.value = file.name;
  }

  if (file) {
    reader.readAsText(file, 'utf-8');
  }
}

const handleFilename = function(e) {
  const { editor } = window.App;

  Editor.setMode(editor, $inputFilename.value);
}

const handleFileExport = function(e) {
  const { editor } = window.App;
  const blob = new Blob([editor.getValue()], {type: "text/plain;charset=utf-8"});

  saveAs(blob, $inputFilename.value);
}

const handleFileSave = function(e) {
  const { editor } = window.App;
  const filename = $inputFilename.value;
  const isNew = Local.saveFile(filename, editor.getValue());

  if (isNew) $menuItems.appendChild(renderFileItem(filename));
}

const handleFileDelete = function(elem, filename) {
  const { editor } = window.App;
  const $parent = elem.parentNode.parentNode;

  Local.deleteFile(filename);
  $parent.parentNode.removeChild($parent);
}

const handleFileOpen = function(filename) {
  const { editor } = window.App;
  const fileContent = Local.getFile(filename);

  editor.setValue(fileContent);
  Editor.setMode(editor, filename);
  $inputFilename.value = filename;
  Menu.close();
}

const renderFileItem = function(filename) {
  const $li = document.createElement('li');
  const $btnOpen = document.createElement('a');
  const $btnRemove = document.createElement('button');

  $li.classList.add('menu__item');
  $btnOpen.classList.add('menu__link');
  $btnRemove.classList.add('menu__remove');
  $btnOpen.textContent = filename;
  $btnRemove.textContent = 'x';
  $btnOpen.appendChild($btnRemove);
  $li.appendChild($btnOpen);

  $btnRemove.addEventListener('click', (e) => {
    e.stopPropagation();
    handleFileDelete(e.target, filename)
  });
  $btnOpen.addEventListener('click', () => handleFileOpen(filename));

  return $li;
}

const renderFileList = function() {
  const files = Local.listFiles();

  $menuItems.innerHTML = '';
  files.forEach(file => $menuItems.appendChild(renderFileItem(file)))
}

document.addEventListener('DOMContentLoaded', renderFileList);
$btnFileOpen.addEventListener('change', handleFileSelect);
$inputFilename.addEventListener('change', handleFilename);
$btnFileSave.addEventListener('click', handleFileSave);
$btnFileExport.addEventListener('click', handleFileExport);
