# Obsidian-shortcuts-extender

The three key features of the plugin so far are:
- the ability to change the heading level of the text by pressing the shortcut
- the ability to clearing the markup of the selected text
- the ability to assign shortcuts to enter special characters - so that you can fully use the markdown markup if you write notes in a language other than English

## Сhanging the heading level

To change the heading level of the text, just place the cursor on the line whose heading level we want to change.
Use keyboard shortcuts to specify the heading level:
- <`Ctrl` + `1`> for heading1
- <`Ctrl` + `2`> for heading2
- <...>
- <`Ctrl` + `6`> for heading6

## Clearing the markup of the selected text

Use `Ctrl` + `0` for clearing the markup of the selected text: only the initial characters of lines are cleared, such as markup characters for headings, numbered and unnumbered lists, quotes.

You can in this way both clear the markup in the drain, where the pointer is at the current moment, and clear the markup of lines from all the selected text.

## Toggling code blocks

Use ``Ctrl + ` (Backtick)`` to toggle code blocks. If you select a code block, you can replace the block with just the inner code. If you select code and press ``Ctrl + ` (Backtick)``, then you can create a code block.

## Assigning shortcuts to enter special characters

If you are writing notes in a language other than English, you may need to switch layouts frequently to enter special markdown markup characters. This plugin lets you assign you keyboard shortcuts for the most commonly used special characters.

So far, the following keyboard shortcuts have been assigned:
- `Alt` + `1` - `7` for input `!`, `@`, `#`, `$`, `%`, `^`, `&` symbols
- `Alt` + cyrillic `х` or `ъ` (or EN `[` and `]`) for input `[``]`
- `Alt` + `Shift` + cyrillic `х` or `ъ` (or EN `{` and `}`) for input `{``}`
- `Alt` + cyrillic `б` or `ю` (or EN `,` and `.`) for input `<``>`
- `Alt` + cyrillic `ё` for input code fences
- `Alt` + `Shift` + cyrillic `ё` (or EN `~`) for input code fences for python code
- `Alt` + `Shift` + `\` for input `|` symbol

If you enter brackets or comparison signs or code fences, having previously selected the text, then the text will be enclosed in brackets (in the case of square brackets, a pair will be put at once)

> Notification for mac users:
>
> Due to mac keyboard have a lot of build-in shortcuts with `Alt` symbol, many shortcuts need to be rechanged. But also mac users don't need part of shortcuts of this plugin for effective work.

## Additional features

If you enter code fences for python code via <`Alt` + `Shift` + `~`> - new strings will added and result will look as:

```py
<your selected python code>
```

Also, you can use <`Alt` + `-`> for creating list from selected text.

If the selected text was already a list, the list level will increase by 1, as if you had entered a tab in front of each list item.


## Install notes

You can install the plugin via the Community Plugins tab within Obsidian.
For manual installation place the files `manifest.json` and `main.js` in your `<vault>/.obsidian/plugins/` folder.

## Suggestions for improvement

You can open the [Issue on GitHub page](https://github.com/ryjjin/Obsidian-shortcuts-extender/issues) or contact me on [Obsidian Discord Server](https://discord.com/?utm_source=Discord%20Widget&utm_medium=Logo) via @kitchenrunner
