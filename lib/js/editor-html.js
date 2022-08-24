// Retrieve Elements
// const consoleLogList = document.querySelector(".editor-console-logs");
// const executeCodeBtn = document.querySelector(".editor-run");
// const resetCodeBtn = document.querySelector(".editor-reset");

// Setup Ace
let codeEditor = ace.edit("editor-code");
const defaultCode = "";
let consoleMessages = [];

let consoleLib = {
  init() {
    // configure ace settings

    // Theme
    codeEditor.setTheme("ace/theme/dreamweaver");

    // Set the language
    codeEditor.session.setMode("ace/mode/html");

    // Set Options
    codeEditor.setOptions({
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
    });

    // Set default Code
    codeEditor.setValue(defaultCode);
  },
};

consoleLib.init();
