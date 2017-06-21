const handleFileSelect = function(e) {
  const { editor } = window.App;
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    editor.setValue(reader.result);
    Editor.setMode(editor, file.name);
    document.getElementById('filename').value = file.name;
  }

  if (file) {
    reader.readAsText(file, 'utf-8');
  }
}

const handleFilename = function(e) {
  const { editor } = window.App;

  Editor.setMode(editor, document.getElementById('filename').value);
}

const handleFileExport = function(e) {
  const { editor } = window.App;
  const blob = new Blob([editor.getValue()], {type: "text/plain;charset=utf-8"});

  saveAs(blob, document.getElementById('filename').value);
}

document.getElementById('openFile').addEventListener('change', handleFileSelect);
document.getElementById('filename').addEventListener('change', handleFilename);
document.getElementById('exportFile').addEventListener('click', handleFileExport);
