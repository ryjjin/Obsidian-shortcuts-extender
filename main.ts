import { Plugin } from "obsidian";

export default class shortcutsExtender extends Plugin {
  async onload() {
    console.log(this.app);

    this.addCommand({
      id: "shortcut-exclamation-mark",
      name: "Shortcut for ! symbol",
      callback: () => this.shortcutExclamationMark(),
      hotkeys: [
        {
          modifiers: ["Alt"],
          key: "1",
        },
      ],
    });

    this.addCommand({
      id: "shortcut-At",
      name: "Shortcut for @ symbol",
      callback: () => this.shortcutAt(),
      hotkeys: [
        {
          modifiers: ["Alt"],
          key: "2",
        },
      ],
    });

    this.addCommand({
      id: "shortcut-hash",
      name: "Shortcut for # symbol",
      callback: () => this.shortcutHash(),
      hotkeys: [
        {
          modifiers: ["Alt"],
          key: "3",
        },
      ],
    });

    this.addCommand({
      id: "shortcut-dollar",
      name: "Shortcut for $ symbol",
      callback: () => this.shortcutDollar(),
      hotkeys: [
        {
          modifiers: ["Alt"],
          key: "4",
        },
      ],
    });

    this.addCommand({
      id: "shortcut-percent",
      name: "Shortcut for % symbol",
      callback: () => this.shortcutPercent(),
      hotkeys: [
        {
          modifiers: ["Alt"],
          key: "5",
        },
      ],
    });

    this.addCommand({
      id: "shortcut-circumflex",
      name: "Shortcut for ^ symbol",
      callback: () => this.shortcutCircumflex(),
      hotkeys: [
        {
          modifiers: ["Alt"],
          key: "6",
        },
      ],
    });

    this.addCommand({
      id: "shortcut-ampersand",
      name: "Shortcut for & symbol",
      callback: () => this.shortcutAmpersand(),
      hotkeys: [
        {
          modifiers: ["Alt"],
          key: "7",
        },
      ],
    });

    this.addCommand({
      id: "shortcut-less-than",
      name: "Shortcut for < symbol",
      callback: () => this.shortcutLessThan(),
      hotkeys: [
        {
          modifiers: ["Alt"],
          key: "б",
        },
        {
          modifiers: ["Alt"],
          key: ",",
        },
      ],
    });

    this.addCommand({
      id: "shortcut-greater-than",
      name: "Shortcut for > symbol",
      callback: () => this.shortcutGreaterThan(),
      hotkeys: [
        {
          modifiers: ["Alt"],
          key: "ю",
        },
        {
          modifiers: ["Alt"],
          key: ".",
        },
      ],
    });

    this.addCommand({
      id: "shortcut-left-square-bracket",
      name: "Shortcut for [ symbol",
      callback: () => this.shortcutLeftSquareBracket(),
      hotkeys: [
        {
          modifiers: ["Alt"],
          key: "х",
        },
        {
          modifiers: ["Alt"],
          key: "[",
        },
      ],
    });

    this.addCommand({
      id: "shortcut-right-square-bracket",
      name: "Shortcut for ] symbol",
      callback: () => this.shortcutRightSquareBracket(),
      hotkeys: [
        {
          modifiers: ["Alt"],
          key: "ъ",
        },
        {
          modifiers: ["Alt"],
          key: "]",
        },
      ],
    });

    this.addCommand({
      id: "shortcut-python-code",
      name: "Shortcut for .py code fences",
      callback: () => this.shortcutPyCode(),
      hotkeys: [
        {
          modifiers: ["Alt", "Shift"],
          key: "ё",
        },
        {
          modifiers: ["Alt", "Shift"],
          key: "~",
        },
      ],
    });

    this.addCommand({
      id: "shortcut-code",
      name: "Shortcut for code fences (`)",
      callback: () => this.shortcutCodeFences(),
      hotkeys: [
        {
          modifiers: ["Alt"],
          key: "ё",
        },
        {
          modifiers: ["Alt"],
          key: "`",
        },
      ],
    });

    this.addCommand({
      id: "shortcut-left-curly-bracket",
      name: "Shortcut for { symbol",
      callback: () => this.shortcutLeftCurlyBracket(),
      hotkeys: [
        {
          modifiers: ["Alt", "Shift"],
          key: "х",
        },
        {
          modifiers: ["Alt", "Shift"],
          key: "{",
        },
      ],
    });

    this.addCommand({
      id: "shortcut-right-curly-bracket",
      name: "Shortcut for } symbol",
      callback: () => this.shortcutRightCurlyBracket(),
      hotkeys: [
        {
          modifiers: ["Alt", "Shift"],
          key: "ъ",
        },
        {
          modifiers: ["Alt", "Shift"],
          key: "}",
        },
      ],
    });

    this.addCommand({
      id: "shortcut-Vertical-Line",
      name: "Shortcut for | symbol",
      callback: () => this.shortcutVerticalLine(),
      hotkeys: [
        {
          modifiers: ["Alt", "Shift"],
          key: "|",
        },
        {
          modifiers: ["Alt", "Shift"],
          key: "\/",
        },
      ],
    });

  this.addCommand({
      id: "shortcut-list-items",
      name: "Creating list item from text",
      callback: () => this.shortcutListItems(),
      hotkeys: [
        {
          modifiers: ["Alt"],
          key: "-",
        },
      ],
    });

  this.addCommand({
      id: "heading-1",
      name: "line into level 1 heading",
      callback: () => this.shortcutHeader1(),
      hotkeys: [
        {
          modifiers: ["Ctrl"],
          key: "1",
        },
      ],
    });

  this.addCommand({
      id: "heading-2",
      name: "line into level 2 heading",
      callback: () => this.shortcutHeader2(),
      hotkeys: [
        {
          modifiers: ["Ctrl"],
          key: "2",
        },
      ],
    });

  this.addCommand({
      id: "heading-3",
      name: "line into level 3 heading",
      callback: () => this.shortcutHeader3(),
      hotkeys: [
        {
          modifiers: ["Ctrl"],
          key: "3",
        },
      ],
    });

  this.addCommand({
      id: "heading-4",
      name: "line into level 4 heading",
      callback: () => this.shortcutHeader4(),
      hotkeys: [
        {
          modifiers: ["Ctrl"],
          key: "4",
        },
      ],
    });

  this.addCommand({
      id: "heading-5",
      name: "line into level 5 heading",
      callback: () => this.shortcutHeader5(),
      hotkeys: [
        {
          modifiers: ["Ctrl"],
          key: "5",
        },
      ],
    });

  this.addCommand({
      id: "heading-6",
      name: "line into level 6 heading",
      callback: () => this.shortcutHeader6(),
      hotkeys: [
        {
          modifiers: ["Ctrl"],
          key: "6",
        },
      ],
    });

  this.addCommand({
      id: "heading-0",
      name: "clearing of text formatting",
      callback: () => this.shortcutHeader0(),
      hotkeys: [
        {
          modifiers: ["Ctrl"],
          key: "0",
        },
      ],
    });
  }

  getSelectedText(editor: any) {
  //thanks to user "Argentina Ortega Sáinz" from the Obsidian community for this feature
  //For a long time I tried to do without such an approach, which resulted in several bugs and the impossibility of fixing them with non-crutches
    if (editor.somethingSelected()) {
      let cursorStart = editor.getCursor(true);
      let cursorEnd = editor.getCursor(false);
      let content = editor.getRange(
        { line: cursorStart.line, ch: 0 },
        { line: cursorEnd.line, ch: editor.getLine(cursorEnd.line).length }
      );
      return {
        start: { line: cursorStart.line, ch: 0 },
        end: {
          line: cursorEnd.line,
          ch: editor.getLine(cursorEnd.line).length,
        },
        content: content,
      };
    } else {
      // Toggle the todo in the line
      var lineNr = editor.getCursor().line;
      var contents = editor.getDoc().getLine(lineNr);
      let cursorStart = {
        line: lineNr,
        ch: 0,
      };
      let cursorEnd = {
        line: lineNr,
        ch: contents.length,
      };
      let content = editor.getRange(cursorStart, cursorEnd);
      return { start: cursorStart, end: cursorEnd, content: content };
    }
  }

  shortcutExclamationMark(): void {
    let activeLeaf: any = this.app.workspace.activeLeaf;
    let editor = activeLeaf.view.sourceMode.cmEditor;
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    editor.replaceSelection(`\!`);
  }

  shortcutAt(): void {
    let activeLeaf: any = this.app.workspace.activeLeaf;
    let editor = activeLeaf.view.sourceMode.cmEditor;
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    editor.replaceSelection(`@`);
  }

  shortcutHash(): void {
    let activeLeaf: any = this.app.workspace.activeLeaf;
    let editor = activeLeaf.view.sourceMode.cmEditor;
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    editor.replaceSelection(`#`);
  }

  shortcutDollar(): void {
    let activeLeaf: any = this.app.workspace.activeLeaf;
    let editor = activeLeaf.view.sourceMode.cmEditor;
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    editor.replaceSelection(`$`);
  }

  shortcutPercent(): void {
    let activeLeaf: any = this.app.workspace.activeLeaf;
    let editor = activeLeaf.view.sourceMode.cmEditor;
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    editor.replaceSelection(`\%`);
  }

  shortcutCircumflex(): void {
    let activeLeaf: any = this.app.workspace.activeLeaf;
    let editor = activeLeaf.view.sourceMode.cmEditor;
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    editor.replaceSelection(`\^`);
  }

  shortcutAmpersand(): void {
    let activeLeaf: any = this.app.workspace.activeLeaf;
    let editor = activeLeaf.view.sourceMode.cmEditor;
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    editor.replaceSelection(`\&`);
  }

  shortcutLessThan(): void {
    let activeLeaf: any = this.app.workspace.activeLeaf;
    let editor = activeLeaf.view.sourceMode.cmEditor;
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    if (selectedText) {
      editor.replaceSelection(`<${selectedText}>`);
    } else editor.replaceSelection(`<`);
  }

  shortcutGreaterThan(): void {
		let activeLeaf: any = this.app.workspace.activeLeaf;
    let editor = activeLeaf.view.sourceMode.cmEditor;
    let selectedText = this.getSelectedText(editor);

    let resultText = "> " + selectedText.content.split('\n').join("\n> ");
		editor.replaceRange(resultText, selectedText.start, selectedText.end);
  }

  shortcutLeftSquareBracket(): void {
    let activeLeaf: any = this.app.workspace.activeLeaf;
    let editor = activeLeaf.view.sourceMode.cmEditor;
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    if (selectedText) {
      editor.replaceSelection(`[[${selectedText}]]`);
    } else editor.replaceSelection(`[`);
  }

  shortcutRightSquareBracket(): void {
    let activeLeaf: any = this.app.workspace.activeLeaf;
    let editor = activeLeaf.view.sourceMode.cmEditor;
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    editor.replaceSelection(`]`);
  }

  shortcutPyCode(): void {
    let activeLeaf: any = this.app.workspace.activeLeaf;
    let editor = activeLeaf.view.sourceMode.cmEditor;
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    if (selectedText) {
      editor.replaceSelection(`\`\`\`py\n${selectedText}\n\`\`\``);
    } else editor.replaceSelection(`\``);
  }

  shortcutCodeFences(): void {
    let activeLeaf: any = this.app.workspace.activeLeaf;
    let editor = activeLeaf.view.sourceMode.cmEditor;
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    if (selectedText) {
      editor.replaceSelection(`\`${selectedText}\``);
    } else editor.replaceSelection(`\``);
  }

  shortcutRightCurlyBracket(): void {
    let activeLeaf: any = this.app.workspace.activeLeaf;
    let editor = activeLeaf.view.sourceMode.cmEditor;
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    editor.replaceSelection(`}`);
  }

  shortcutLeftCurlyBracket(): void {
    let activeLeaf: any = this.app.workspace.activeLeaf;
    let editor = activeLeaf.view.sourceMode.cmEditor;
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    if (selectedText) {
      editor.replaceSelection(`\{${selectedText}\}`);
    } else editor.replaceSelection(`\{`);
  }

  shortcutVerticalLine(): void {
    let activeLeaf: any = this.app.workspace.activeLeaf;
    let editor = activeLeaf.view.sourceMode.cmEditor;
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    editor.replaceSelection(`|`);
  }

  shortcutListItems(): void {
    let activeLeaf: any = this.app.workspace.activeLeaf;
    let editor = activeLeaf.view.sourceMode.cmEditor;
    let selectedText = this.getSelectedText(editor);

    let resultText = "- " + selectedText.content.split('\n').join("\n- ");

    let resultTextCheck = resultText;
    while (resultTextCheck.search("- - ") >= 0) {
      resultTextCheck = resultTextCheck.replace("- - ", "	- ");
    }
    while (resultTextCheck.search("- 		") >= 0) {
      resultTextCheck = resultTextCheck.replace("- 		", "	- 	");
    }
    while (resultTextCheck.search("- 	- ") >= 0) {
      resultTextCheck = resultTextCheck.replace("- 	- ", "		- ");
    }
    editor.replaceRange(resultTextCheck, selectedText.start, selectedText.end);
  }

  shortcutHeader0(): void {
    let activeLeaf: any = this.app.workspace.activeLeaf;
    let editor = activeLeaf.view.sourceMode.cmEditor;
    let selectedText = this.getSelectedText(editor);

    var j;
    let splittedSelectedText = selectedText.content.split(`\n`);
    for (j in splittedSelectedText) {
      while (splittedSelectedText[j].substring(0,2) == "##") {
        splittedSelectedText[j] = splittedSelectedText[j].replace("##", "#");
      }
      while (splittedSelectedText[j].substring(0,2) == "# ") {
        splittedSelectedText[j] = splittedSelectedText[j].substr(2);
      }
      while (splittedSelectedText[j].substring(0,2) == "> ") {
        splittedSelectedText[j] = splittedSelectedText[j].substr(2);
      }
      while (splittedSelectedText[j].substring(0,2) == "		") {
        splittedSelectedText[j] = splittedSelectedText[j].replace("		", "	");
      }
      while (splittedSelectedText[j].substring(0,3) == "	- ") {
        splittedSelectedText[j] = splittedSelectedText[j].substr(3);
      }
      while (splittedSelectedText[j].substring(0,2) == "- ") {
        splittedSelectedText[j] = splittedSelectedText[j].substr(2);
      }
      var re_digits = /^\d\.\s/;
      splittedSelectedText[j] = splittedSelectedText[j].replace(re_digits, "");
    }

    editor.replaceRange(splittedSelectedText, selectedText.start, selectedText.end);
  }

  shortcutHeader1(): void {
    this.shortcutHeader0();
    let activeLeaf: any = this.app.workspace.activeLeaf;
    let editor = activeLeaf.view.sourceMode.cmEditor;
    let selectedText = this.getSelectedText(editor);

    //var clearText = selectedText.content.shortcutHeader0()
    var resultText = "# " + selectedText.content;
    editor.replaceRange(resultText, selectedText.start, selectedText.end);
  }

  shortcutHeader2(): void {
    this.shortcutHeader0();
    let activeLeaf: any = this.app.workspace.activeLeaf;
    let editor = activeLeaf.view.sourceMode.cmEditor;
    let selectedText = this.getSelectedText(editor);

    var resultText = "## " + selectedText.content;
    editor.replaceRange(resultText, selectedText.start, selectedText.end);
  }

  shortcutHeader3(): void {
    this.shortcutHeader0();
    let activeLeaf: any = this.app.workspace.activeLeaf;
    let editor = activeLeaf.view.sourceMode.cmEditor;
    let selectedText = this.getSelectedText(editor);

    var resultText = "### " + selectedText.content;
    editor.replaceRange(resultText, selectedText.start, selectedText.end);
  }

  shortcutHeader4(): void {
    this.shortcutHeader0();
    let activeLeaf: any = this.app.workspace.activeLeaf;
    let editor = activeLeaf.view.sourceMode.cmEditor;
    let selectedText = this.getSelectedText(editor);

    var resultText = "#### " + selectedText.content;
    editor.replaceRange(resultText, selectedText.start, selectedText.end);
  }

  shortcutHeader5(): void {
    this.shortcutHeader0();
    let activeLeaf: any = this.app.workspace.activeLeaf;
    let editor = activeLeaf.view.sourceMode.cmEditor;
    let selectedText = this.getSelectedText(editor);

    var resultText = "##### " + selectedText.content;
    editor.replaceRange(resultText, selectedText.start, selectedText.end);
  }

  shortcutHeader6(): void {
    this.shortcutHeader0();
    let activeLeaf: any = this.app.workspace.activeLeaf;
    let editor = activeLeaf.view.sourceMode.cmEditor;
    let selectedText = this.getSelectedText(editor);

    var resultText = "###### " + selectedText.content;
    editor.replaceRange(resultText, selectedText.start, selectedText.end);
  }



}
