import { MarkdownView, Plugin, EditorSelection, Editor } from "obsidian";

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
      id: "shortcut-code-block",
      name: "Shortcut for toggling a code block",
      callback: () => this.shortcutToggleCodeBlock(),
      hotkeys: [
        {
          modifiers: ["Ctrl"],
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
      callback: () => this.shortcutHeaderN(1),
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
      callback: () => this.shortcutHeaderN(2),
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
      callback: () => this.shortcutHeaderN(3),
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
      callback: () => this.shortcutHeaderN(4),
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
      callback: () => this.shortcutHeaderN(5),
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
      callback: () => this.shortcutHeaderN(6),
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
      callback: () => this.shortcutHeaderN(0),
      hotkeys: [
        {
          modifiers: ["Ctrl"],
          key: "0",
        },
      ],
    });
  }

  getSelectedText(editor: Editor) {
  //thanks to user "Argentina Ortega Sáinz" from the Obsidian community for this feature
  //For a long time I tried to do without such an approach, which resulted in several bugs and the impossibility of fixing them with non-crutches
    if (editor.somethingSelected()) {
      let cursorStart = editor.getCursor('from');
      let cursorEnd = editor.getCursor('to');
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
    let editor = this.app.workspace.getActiveViewOfType(MarkdownView)?.editor;
    if (editor == null) {
      return;
    }
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    editor.replaceSelection(`\!`);
  }

  shortcutAt(): void {
    let editor = this.app.workspace.getActiveViewOfType(MarkdownView)?.editor;
    if (editor == null) {
      return;
    }
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    editor.replaceSelection(`@`);
  }

  shortcutHash(): void {
    let editor = this.app.workspace.getActiveViewOfType(MarkdownView)?.editor;
    if (editor == null) {
      return;
    }
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    editor.replaceSelection(`#`);
  }

  shortcutDollar(): void {
    let editor = this.app.workspace.getActiveViewOfType(MarkdownView)?.editor;
    if (editor == null) {
      return;
    }
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    editor.replaceSelection(`$`);
  }

  shortcutPercent(): void {
    let editor = this.app.workspace.getActiveViewOfType(MarkdownView)?.editor;
    if (editor == null) {
      return;
    }
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    editor.replaceSelection(`\%`);
  }

  shortcutCircumflex(): void {
    let editor = this.app.workspace.getActiveViewOfType(MarkdownView)?.editor;
    if (editor == null) {
      return;
    }
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    editor.replaceSelection(`\^`);
  }

  shortcutAmpersand(): void {
    let editor = this.app.workspace.getActiveViewOfType(MarkdownView)?.editor;
    if (editor == null) {
      return;
    }
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    editor.replaceSelection(`\&`);
  }

  shortcutLessThan(): void {
    let editor = this.app.workspace.getActiveViewOfType(MarkdownView)?.editor;
    if (editor == null) {
      return;
    }
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
    let editor = this.app.workspace.getActiveViewOfType(MarkdownView)?.editor;
    if (editor == null) {
      return;
    }
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    if (selectedText) {
      editor.replaceSelection(`[[${selectedText}]]`);
    } else editor.replaceSelection(`[`);
  }

  shortcutRightSquareBracket(): void {
    let editor = this.app.workspace.getActiveViewOfType(MarkdownView)?.editor;
    if (editor == null) {
      return;
    }
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    editor.replaceSelection(`]`);
  }

  shortcutPyCode(): void {
    let editor = this.app.workspace.getActiveViewOfType(MarkdownView)?.editor;
    if (editor == null) {
      return;
    }
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    if (selectedText) {
      editor.replaceSelection(`\`\`\`py\n${selectedText}\n\`\`\``);
    } else editor.replaceSelection(`\``);
  }

  shortcutCodeFences(): void {
    let editor = this.app.workspace.getActiveViewOfType(MarkdownView)?.editor;
    if (editor == null) {
      return;
    }
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    if (selectedText) {
      editor.replaceSelection(`\`${selectedText}\``);
    } else editor.replaceSelection(`\``);
  }

  shortcutToggleCodeBlock(): void {
    let editor = this.app.workspace.getActiveViewOfType(MarkdownView)?.editor;
    if (editor == null) {
      return;
    }
    let selectedText = editor.somethingSelected() ? editor.getSelection() : "";
    let startCursor = editor.getCursor('from');
    let firstLine = editor.getLine(startCursor.line);
    let endCursor = editor.getCursor('to');
    let lastLine = editor.getLine(endCursor.line);

    // If the selections starts with ```, then we should remove the code block.
    let isCodeBlock = firstLine.startsWith("```") && lastLine.endsWith("```") 
                        && selectedText.length >= 6;
    if (isCodeBlock) {
      // Position of first non-whitespace
      let textStartPos = selectedText.search("\\s\\S") + 1;
      if (textStartPos < 0) {
        textStartPos = 3;
      }

      // Remove the code block formatting.
      let endPos = selectedText.length - 3;
      let innerText = selectedText.substring(textStartPos, endPos)
      editor.replaceSelection(innerText)
    } else {
      editor.replaceSelection(`\`\`\`\n${selectedText}\n\`\`\``);
      startCursor.ch = 3; // Move cursor after ```
      editor.setCursor(startCursor);
    }
  }

  shortcutRightCurlyBracket(): void {
    let editor = this.app.workspace.getActiveViewOfType(MarkdownView)?.editor;
    if (editor == null) {
      return;
    }
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    editor.replaceSelection(`}`);
  }

  shortcutLeftCurlyBracket(): void {
    let editor = this.app.workspace.getActiveViewOfType(MarkdownView)?.editor;
    if (editor == null) {
      return;
    }
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    if (selectedText) {
      editor.replaceSelection(`\{${selectedText}\}`);
    } else editor.replaceSelection(`\{`);
  }

  shortcutVerticalLine(): void {
    let editor = this.app.workspace.getActiveViewOfType(MarkdownView)?.editor;
    if (editor == null) {
      return;
    }
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    editor.replaceSelection(`|`);
  }

  shortcutListItems(): void {
    let editor = this.app.workspace.getActiveViewOfType(MarkdownView)?.editor;
    if (editor == null) {
      return;
    }
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

  removeFormatSymbolsFromStr(line: string): string {
    let editor = this.app.workspace.getActiveViewOfType(MarkdownView)?.editor;
    if (editor == null) {
      return;
    }

    // Remove symbols we don't want at the beginning of the line.
    while (line.substring(0,2) == "##") {
      line = line.replace("##", "#");
    }
    while (line.substring(0,2) == "# ") {
      line = line.substr(2);
    }
    while (line.substring(0,2) == "> ") {
      line = line.substr(2);
    }
    while (line.substring(0,2) == "		") {
      line = line.replace("		", "	");
    }
    while (line.substring(0,3) == "	- ") {
      line = line.substr(3);
    }
    while (line.substring(0,2) == "- ") {
      line = line.substr(2);
    }
    var re_digits = /^\d\.\s/;
    line = line.replace(re_digits, "");

    return line;
  }

  addHeadingToStr(line: string, headingLevel: number): string {
    let space = " ";
    if (headingLevel == 0) {
      space = "";
    }

    return "#".repeat(headingLevel) + space + line;
  }

  shortcutHeaderN(headingLevel: number): void {
    let editor = this.app.workspace.getActiveViewOfType(MarkdownView)?.editor;
    if (editor == null) {
      return;
    }

    // Apply heading level to each line.
    let selections = editor.listSelections();
    for (let i = 0; i < selections.length; i++) {
      this.shortcutHeaderNSingleSelection(headingLevel, selections[i])
    }

    // setSelections is called to preserve the location of each cursor relative
    // to the end of the line.
    editor.setSelections(selections);
  }

  // shortcutHeaderNSingleSelection sets all lines in the selection to the 
  // desired heading level. selection is also updated to maintain the cursor
  // position relative to the end of the line.
  shortcutHeaderNSingleSelection(headingLevel: number, selection: EditorSelection) {
    let editor = this.app.workspace.getActiveViewOfType(MarkdownView)?.editor;
    if (editor == null) {
      return;
    }

    // Save anchor/head distance from end.
    let anchorDistFromEnd = editor.getLine(selection.anchor.line).length - selection.anchor.ch
    let headDistFromEnd = editor.getLine(selection.head.line).length - selection.head.ch

    // Get from and to line numbers.
    let fromLine = selection.anchor.line;
    let toLine = selection.head.line;
    let increment = fromLine <= toLine ? 1 : -1;
    // For each line in the selection, set the heading level.
    let lineNum = fromLine;
    while (true) {
      // Update the current line.
      let line = editor.getLine(lineNum);
      line = this.removeFormatSymbolsFromStr(line);
      line = this.addHeadingToStr(line, headingLevel);
      editor.setLine(lineNum, line);
      
      // Move to next line if not done.
      if (lineNum == toLine) {
        break;
      }
      lineNum += increment;
    }

    // Preserve anchor/head locations relative to line end.
    selection.anchor.ch = editor.getLine(selection.anchor.line).length - anchorDistFromEnd;
    selection.head.ch = editor.getLine(selection.head.line).length - headDistFromEnd;
  }
}
