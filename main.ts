import { Plugin } from "obsidian";
import { clipboard } from "electron";

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
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    let resultText = "";
    if (selectedText) {
      resultText = selectedText.split('\n').join("\n> ");
    }
    editor.replaceSelection(`> ${resultText}`);
  }

  shortcutListItems(): void {
    let activeLeaf: any = this.app.workspace.activeLeaf;
    let editor = activeLeaf.view.sourceMode.cmEditor;
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    let resultText = "";
    if (selectedText) {
      resultText = selectedText.split('\n').join("\n- ");
    }
    editor.replaceSelection(`- ${resultText}`);
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

  shortcutCircumflex(): void {
    let activeLeaf: any = this.app.workspace.activeLeaf;
    let editor = activeLeaf.view.sourceMode.cmEditor;
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    editor.replaceSelection(`^`);
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
}
