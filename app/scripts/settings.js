const $btnSaveSettings = document.getElementById('btnSaveSettings');
const $inputFontSize = document.getElementById('inputFontSize');

const handleSaveSettings = function(e) {
  e.preventDefault();

  const settings = Local.getSettings();
  const fontSize = $inputFontSize.value;

  settings['fontSize'] = fontSize;

  applySettings(settings);
  Local.saveSettings(settings);
}

const applySettings = function(settings) {
  const { editor } = window.App;

  for(let setting in settings) {
    if (setting === 'fontSize') {
      document.getElementById('editor').style.fontSize = settings[setting] + 'px';
    }
  }
}

const initSettings = function() {
  const settings = Local.getSettings();

  applySettings(settings);
  $inputFontSize.value = settings['fontSize'] || '';
}

document.addEventListener('DOMContentLoaded', initSettings);
$btnSaveSettings.addEventListener('click', handleSaveSettings);
