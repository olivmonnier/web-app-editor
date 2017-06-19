const handleFileSelect = function(e) {
  const { editor } = window.App;
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    editor.setValue(reader.result);
    Editor.setMode(editor, file.name);
    App.filename = file.name;
  }

  if (file) {
    reader.readAsText(file, 'utf-8');
  }
}

const handleFileSave = function(e) {
  const { editor, filename } = window.App;
  const blob = new Blob([editor.getValue()], {type: "text/plain;charset=utf-8"});

  if(filename) {
    saveAs(blob, filename);
  }
}

document.getElementById('openFile').addEventListener('change', handleFileSelect);
document.getElementById('saveFile').addEventListener('click', handleFileSave);
