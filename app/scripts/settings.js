const $btnSaveSettings = document.getElementById('btnSaveSettings');
const $inputFontSize = document.getElementById('inputFontSize');
const $inputTabSize = document.getElementById('inputTabSize');

const handleSaveSettings = function(e) {
  e.preventDefault();

  const settings = Local.getSettings();
  const fontSize = $inputFontSize.value;
  const tabSize = $inputTabSize.value;

  settings['fontSize'] = fontSize;
  settings['tabSize'] = tabSize;

  applySettings(settings);
  Local.saveSettings(settings);
}

const applySettings = function(settings) {
  const { editor } = window.App;

  for(let setting in settings) {
    if (setting === 'fontSize') {
      document.getElementById('editor').style.fontSize = settings[setting] + 'px';
    }
    else if (setting === 'tabSize') {
      editor.getSession().setTabSize(settings[setting]);
    }
  }
}

const initSettings = function() {
  const settings = Local.getSettings();

  applySettings(settings);
  $inputFontSize.value = settings['fontSize'] || '';
  $inputTabSize.value = settings['tabSize'] || '';
}

document.addEventListener('DOMContentLoaded', initSettings);
$btnSaveSettings.addEventListener('click', handleSaveSettings);
