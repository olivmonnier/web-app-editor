const init = function() {
  const editor = ace.edit("editor");

  editor.setTheme("ace/theme/monokai");
  editor.session.setMode("ace/mode/text");
  editor.setAutoScrollEditorIntoView(true);

  return editor;
}

const setMode = function(editor, filePath) {
  const modelist = ace.require("ace/ext/modelist");
  const mode = modelist.getModeForPath(filePath).mode;

  editor.session.setMode(mode);
}

window.Editor = {
  init,
  setMode
}
