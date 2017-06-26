const _get = function(key) {
  return localStorage.getItem(key);
}

const _set = function(key, value) {
  return localStorage.setItem(key, value);
};

const _del = function(key) {
  return localStorage.removeItem(key);
}

const getFile = function(filename) {
  return _get(filename);
}

const saveFile = function(filename, content) {
  let newDoc = false;
  const files = listFiles();

  if (!_get(filename) && _get(filename) !== '') {
    newDoc = true;
    files.push(filename);
    _set('files', JSON.stringify(files))
  }
  _set(filename, content);

  return newDoc;
}

const deleteFile = function(filename) {
  const files = listFiles();
  const indexFile = files.indexOf(filename);

  files.splice(indexFile, 1);
  _set('files', JSON.stringify(files));
  return _del(filename);
}

const listFiles = function() {
  return JSON.parse(_get('files')) || [];
}

const getSettings = function() {
  return JSON.parse(_get('settings')) || {};
}

const saveSettings = function(params) {
  return _set('settings', JSON.stringify(params))
}

window.Local = {
  getFile,
  saveFile,
  deleteFile,
  listFiles,
  getSettings,
  saveSettings
}
