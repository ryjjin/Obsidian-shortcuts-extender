# Obsidian-shortcuts-extender

A small plugin that allows you to assign shortcuts to enter special characters - so that you can fully use the markdown markup if you write notes in a language other than English.
So far, the following keyboard shortcuts have been assigned:
- `Alt` + `3` for input #
- `Alt` + `6` for input ^
- `Alt` + cyrillic `х` or `ъ` (or EN `[` and `]`) for input []
- `Alt` + `Shift` + cyrillic `х` or `ъ` (or EN `{` and `}`) for input {}
- `Alt` + cyrillic `б` or `ю` (or EN `,` and `.`) for input <> 
- `Alt` + cyrillic `ё` for input code fences
- `Alt` + `Shift` + cyrillic `ё` (or EN "~") for input code fences for python code
- `Alt` + `Shift` + \ for input '|' symbol

Changed behavior when entering a character through a shortcut ">":
- now if a shortcut is entered, a space after the character is immediately printed,
- if one or more lines are selected, then all lines will be commented out

If you enter brackets or comparison signs or code fences, having previously selected the text, then the text will be enclosed in brackets (in the case of square brackets, a pair will be put at once)

If you enter code fences for python code via Alt + Shift + cyrillic "ё" - new strings will added and result will look as:

```py
<your selected python code>
```

## Notification for mac users

Due to mac keyboard have a lot of build-in shortcuts with `Alt` symbol, many shortcuts need to be rechanged. But also mac users don't need part of shortcuts of this plugin for effective work.

## Install notes

You can install the plugin via the Community Plugins tab within Obsidian.
For manual installation place the files `manifest.json` and `main.js` in your `<vault>/.obsidian/plugins/` folder.

## Suggestions for improvement

You can open the [Issue on GitHub page](https://github.com/ryjjin/Obsidian-shortcuts-extender/issues) or contact me on [Obsidian Discord Server](https://discord.com/?utm_source=Discord%20Widget&utm_medium=Logo) via @kitchenrunner