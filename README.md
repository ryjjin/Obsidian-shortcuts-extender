# Shortcuts extender

Version 3.0.0 modernizes the plugin structure and keeps the plugin focused on editor commands that are still useful in current Obsidian versions. Hotkeys are no longer forced by default for most commands, because Obsidian already lets users assign them in Settings -> Hotkeys.

## What the plugin does

This plugin adds editor commands for:
- inserting special symbols without switching keyboard layout;
- wrapping selections with common markdown pairs;
- toggling blockquotes, bullet lists, and code blocks;
- changing heading depth for the current line or selected lines;
- toggling selection case;
- inserting French quotes `«»` or wrapping selected text with them.

## Heading commands

The heading commands use the current 3.0.0 logic:
- `Increase heading level` reduces the number of `#`, so `######` -> `#####` -> ... -> `#` -> plain text;
- `Decrease heading level` increases the number of `#`, so `#` -> `##` -> ... -> `######` -> plain text;
- plain text becomes `######` for Increase and `#` for Decrease;
- lines that start with markdown list markers, checkbox markers, ordered-list markers such as `1.` or `2)`, or other special symbols are left unchanged.

## Typographic commands

The plugin includes commands for:
- `–` and `—`;
- `«»` with pair insertion when nothing is selected;
- square, curly, and angle bracket helpers;
- inline code and fenced code block helpers.

## Hotkeys

This release intentionally avoids shipping most default hotkeys. Assign the commands you want in Obsidian under `Settings -> Hotkeys`.

If you want the hotkeys that version 2.x assigned by default, open `Settings -> Shortcuts extender` and click `Assign default hotkeys`. It assigns:
- `Alt+1` ... `Alt+7` to `Insert !`, `Insert @`, `Insert #`, `Insert $`, `Insert %`, `Insert ^`, `Insert &`;
- `Alt+,` / `Alt+б` to `Wrap selection with <>` and `Alt+.` / `Alt+ю` to `Insert >`;
- `Alt+[` / `Alt+х` to `Insert [ or wrap selection with [[ ]]` and `Alt+]` / `Alt+ъ` to `Insert ]`;
- `Alt+Shift+{` / `Alt+Shift+х` to `Insert { or wrap selection with {}` and `Alt+Shift+}` / `Alt+Shift+ъ` to `Insert }`;
- `Alt+Shift+|` / `Alt+Shift+/` to `Insert |`;
- `` Alt+` `` / `Alt+ё` to the inline code command, `Alt+Shift+~` / `Alt+Shift+ё` to `Insert Python code block`, and ``Ctrl+` `` to `Toggle code block`;
- `Alt+-` to `Toggle bullet list for selected lines`;
- `Ctrl+1` ... `Ctrl+6` to Obsidian's own `Set as heading 1` ... `Set as heading 6`, and `Ctrl+0` to `Remove heading`. Version 3.0.0 dropped the plugin's heading commands, because Obsidian has them built in.

Nothing is overwritten. A command that already has a hotkey is skipped, and so is a key combination that another command already uses. On Windows and Linux, Obsidian uses `Ctrl+1` ... `Ctrl+7` for `Go to tab #1` ... `#7` by default, so the heading hotkeys are skipped there until you remove those in `Settings -> Hotkeys` and click the button again. A notice lists what was assigned and what was skipped, and why.

## Manual installation

1. Open your vault folder.
2. Go to `.obsidian/plugins/shortcuts-extender/`.
3. Put `manifest.json` and `main.js` there.
4. Reload Obsidian and enable the plugin.

## Development

```bash
npm install
npm run check
npm run build
```

## Notes for release

For Community Plugins releases, the release asset should contain only `manifest.json`, `main.js`, and `styles.css` if the plugin uses styles. This plugin currently does not require `styles.css`.
