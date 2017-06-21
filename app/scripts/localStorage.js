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
  const files = JSON.parse(_get('files')) || [];

  if (!_get(filename)) {
    _set('files', JSON.stringify(files.push(filename)))
  }
  return _set(filename, content);
}

const deleteFile = function(filename) {
  const files = JSON.parse(_get('files'));
  const indexFile = files.indexOf(filename);

  files.splice(indexFile, 1);
  _set('files', JSON.stringify(files));
  return _del(filename);
}

const listFiles = function() {
  return JSON.parse(_get('files'));
}

window.Local = {
  getFile,
  saveFile,
  deleteFile,
  listFiles
}
