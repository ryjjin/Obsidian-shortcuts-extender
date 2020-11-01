import {
  App,
  Modal,
  Notice,
  Plugin,
  PluginSettingTab,
  Setting,
} from "obsidian";

export default class shortcutsExtender extends Plugin {
  onInit() {}

  onload() {
    console.log("Loading Hotkeys++ plugin");

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


  shortcutHash(): void {
      let activeLeaf: any = this.app.workspace.activeLeaf;
      let editor = activeLeaf.view.sourceMode.cmEditor;
      let selectedText = editor.somethingSelected()
        ? editor.getSelection()
        : false;
      if (selectedText) {
        editor.replaceSelection(`## ${selectedText}`);
      }; editor.replaceSelection(`#`);
    }

  shortcutLessThan(): void {
      let activeLeaf: any = this.app.workspace.activeLeaf;
      let editor = activeLeaf.view.sourceMode.cmEditor;
      let selectedText = editor.somethingSelected()
        ? editor.getSelection()
        : false;
      if (selectedText) {
        editor.replaceSelection(`<${selectedText}>`);
      }; editor.replaceSelection(`<`);
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
      }; else editor.replaceSelection(`[`);
    }

  shortcutRightSquareBracket(): void {
    let activeLeaf: any = this.app.workspace.activeLeaf;
    let editor = activeLeaf.view.sourceMode.cmEditor;
    let selectedText = editor.somethingSelected()
      ? editor.getSelection()
      : false;
    editor.replaceSelection(`]`);
    }

  }
}