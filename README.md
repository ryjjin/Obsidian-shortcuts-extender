# Obsidian-shortcuts-extender

A small plugin that allows you to assign shortcuts to enter special characters - so that you can fully use the markdown markup if you write notes in a language other than English.
So far, the following keyboard shortcuts have been assigned:
- Alt + 3 for input #
- Alt + cyrillic "х" or "ъ" for input []
- Alt + Shift + cyrillic "б" or "ю" for input <>
- Alt + cyrillic "ё" for input code fences
- Alt + Shift + cyrillic "ё" for input code fences for python code

If you enter square brackets or comparison signs or code fences, having previously selected the text, then the text will be enclosed in brackets (in the case of square brackets, a pair will be put at once)
If you enter code fences for python code via Alt + Shift + cyrillic "ё" - new strings will added and result will look as:

```py
<your selected python code>
```

## Install notes

You can install the plugin via the Community Plugins tab within Obsidian.
For manual installation place the files `manifest.json` and `main.js` in your `<vault>/.obsidian/plugins/` folder.
