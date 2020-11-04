import { Plugin } from "obsidian";
import { clipboard } from "electron";

export default class shortcutsExtender extends Plugin {
  async onload() {
    console.log(this.app);

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
      id: "shortcut-less-than",
      name: "Shortcut for < symbol",
      callback: () => this.shortcutLessThan(),
      hotkeys: [
        {
          modifiers: ["Alt", "Shift"],
          key: "б",
        },
      ],
    });

    this.addCommand({
      id: "shortcut-greater-than",
      name: "Shortcut for > symbol",
      callback: () => this.shortcutGreaterThan(),
      hotkeys: [
        {
          modifiers: ["Alt", "Shift"],
          key: "ю",
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
      ],
    });

    this.addCommand({
      id: "shortcut-code",
      name: "Shortcut for code fences",
      callback: () => this.shortcutCodeFences(),
      hotkeys: [
        {
          modifiers: ["Alt"],
          key: "ё",
        },
      ],
    });

  }

  shortcutHash(): void {
    let activeLeaf: any = this.app.workspace.activeLeaf;
    let editor = activeLeaf.view.sourceMode.cmEditor;
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    editor.replaceSelection(`#`);
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
    editor.replaceSelection(`>`);
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

}