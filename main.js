'use strict';

var obsidian = require('obsidian');

const SIMPLE_TEXT_COMMANDS = [
    { id: "insert-exclamation-mark", name: "Insert !", insert: "!" },
    { id: "insert-at-sign", name: "Insert @", insert: "@" },
    { id: "insert-hash-sign", name: "Insert #", insert: "#" },
    { id: "insert-dollar-sign", name: "Insert $", insert: "$" },
    { id: "insert-percent-sign", name: "Insert %", insert: "%" },
    { id: "insert-caret-sign", name: "Insert ^", insert: "^" },
    { id: "insert-ampersand", name: "Insert &", insert: "&" },
    { id: "insert-right-angle-bracket", name: "Insert >", insert: ">" },
    { id: "insert-right-square-bracket", name: "Insert ]", insert: "]" },
    { id: "insert-right-curly-bracket", name: "Insert }", insert: "}" },
    { id: "insert-vertical-line", name: "Insert |", insert: "|" },
    { id: "insert-left-angle-bracket", name: "Insert <", insert: "<" },
    { id: "insert-en-dash", name: "Insert –", insert: "–" },
    { id: "insert-em-dash", name: "Insert —", insert: "—" },
    {
        id: "wrap-selection-with-angle-brackets",
        name: "Wrap selection with <>",
        insert: "<",
        wrapWith: { opening: "<", closing: ">" },
    },
    {
        id: "insert-or-wrap-double-brackets",
        name: "Insert [ or wrap selection with [[ ]]",
        insert: "[",
        wrapWith: { opening: "[[", closing: "]]" },
    },
    {
        id: "insert-or-wrap-curly-braces",
        name: "Insert { or wrap selection with {}",
        insert: "{",
        wrapWith: { opening: "{", closing: "}" },
    },
];
// Hotkeys, которые были назначены по умолчанию в версии 2.x.
//
// В 3.0.0 default hotkeys больше не назначаются автоматически, а id команд
// поменялись. Кнопка в настройках плагина назначает эти сочетания по запросу
// пользователя. Ключ — id команды плагина (без префикса), либо полный id
// команды ядра, если 3.0.0 убрал свою команду в пользу встроенной
// (например, заголовки 1-6 и удаление заголовка).
const LEGACY_DEFAULT_HOTKEYS = [
    { commandId: "insert-exclamation-mark", hotkeys: [{ modifiers: ["Alt"], key: "1" }] },
    { commandId: "insert-at-sign", hotkeys: [{ modifiers: ["Alt"], key: "2" }] },
    { commandId: "insert-hash-sign", hotkeys: [{ modifiers: ["Alt"], key: "3" }] },
    { commandId: "insert-dollar-sign", hotkeys: [{ modifiers: ["Alt"], key: "4" }] },
    { commandId: "insert-percent-sign", hotkeys: [{ modifiers: ["Alt"], key: "5" }] },
    { commandId: "insert-caret-sign", hotkeys: [{ modifiers: ["Alt"], key: "6" }] },
    { commandId: "insert-ampersand", hotkeys: [{ modifiers: ["Alt"], key: "7" }] },
    {
        commandId: "wrap-selection-with-angle-brackets",
        hotkeys: [
            { modifiers: ["Alt"], key: "б" },
            { modifiers: ["Alt"], key: "," },
        ],
    },
    {
        commandId: "insert-right-angle-bracket",
        hotkeys: [
            { modifiers: ["Alt"], key: "ю" },
            { modifiers: ["Alt"], key: "." },
        ],
    },
    {
        commandId: "insert-or-wrap-double-brackets",
        hotkeys: [
            { modifiers: ["Alt"], key: "х" },
            { modifiers: ["Alt"], key: "[" },
        ],
    },
    {
        commandId: "insert-right-square-bracket",
        hotkeys: [
            { modifiers: ["Alt"], key: "ъ" },
            { modifiers: ["Alt"], key: "]" },
        ],
    },
    {
        commandId: "insert-python-code-block",
        hotkeys: [
            { modifiers: ["Alt", "Shift"], key: "ё" },
            { modifiers: ["Alt", "Shift"], key: "~" },
        ],
    },
    {
        commandId: "insert-inline-code-or-wrap-selection",
        hotkeys: [
            { modifiers: ["Alt"], key: "ё" },
            { modifiers: ["Alt"], key: "`" },
        ],
    },
    { commandId: "toggle-code-block", hotkeys: [{ modifiers: ["Ctrl"], key: "`" }] },
    {
        commandId: "insert-or-wrap-curly-braces",
        hotkeys: [
            { modifiers: ["Alt", "Shift"], key: "х" },
            { modifiers: ["Alt", "Shift"], key: "{" },
        ],
    },
    {
        commandId: "insert-right-curly-bracket",
        hotkeys: [
            { modifiers: ["Alt", "Shift"], key: "ъ" },
            { modifiers: ["Alt", "Shift"], key: "}" },
        ],
    },
    {
        commandId: "insert-vertical-line",
        hotkeys: [
            { modifiers: ["Alt", "Shift"], key: "|" },
            { modifiers: ["Alt", "Shift"], key: "/" },
        ],
    },
    { commandId: "toggle-bullet-list-for-lines", hotkeys: [{ modifiers: ["Alt"], key: "-" }] },
    { commandId: "editor:set-heading-1", isCoreCommand: true, hotkeys: [{ modifiers: ["Ctrl"], key: "1" }] },
    { commandId: "editor:set-heading-2", isCoreCommand: true, hotkeys: [{ modifiers: ["Ctrl"], key: "2" }] },
    { commandId: "editor:set-heading-3", isCoreCommand: true, hotkeys: [{ modifiers: ["Ctrl"], key: "3" }] },
    { commandId: "editor:set-heading-4", isCoreCommand: true, hotkeys: [{ modifiers: ["Ctrl"], key: "4" }] },
    { commandId: "editor:set-heading-5", isCoreCommand: true, hotkeys: [{ modifiers: ["Ctrl"], key: "5" }] },
    { commandId: "editor:set-heading-6", isCoreCommand: true, hotkeys: [{ modifiers: ["Ctrl"], key: "6" }] },
    { commandId: "editor:set-heading-0", isCoreCommand: true, hotkeys: [{ modifiers: ["Ctrl"], key: "0" }] },
];
class ShortcutsExtenderPlugin extends obsidian.Plugin {
    onload() {
        this.registerSimpleTextCommands();
        this.registerAdvancedCommands();
        this.addSettingTab(new ShortcutsExtenderSettingTab(this.app, this));
    }
    // Назначает default hotkeys версии 2.x, ничего не перезаписывая:
    // - команда, у которой уже есть hotkey (свой или по умолчанию), пропускается;
    // - сочетание, которое уже занято другой командой, пропускается.
    // В конце показывает Notice со списком назначенного и пропущенного.
    async assignLegacyDefaultHotkeys() {
        var _a, _b;
        const { hotkeyManager, commands } = this.app;
        const getEffectiveHotkeys = (commandId) => { var _a, _b; return (_b = (_a = hotkeyManager.customKeys[commandId]) !== null && _a !== void 0 ? _a : hotkeyManager.defaultKeys[commandId]) !== null && _b !== void 0 ? _b : []; };
        // Какая команда сейчас занимает каждое сочетание клавиш.
        const commandIdByHotkey = new Map();
        const boundCommandIds = new Set([
            ...Object.keys(hotkeyManager.defaultKeys),
            ...Object.keys(hotkeyManager.customKeys),
        ]);
        for (const commandId of boundCommandIds) {
            for (const hotkey of getEffectiveHotkeys(commandId)) {
                commandIdByHotkey.set(this.getHotkeyKey(hotkey), commandId);
            }
        }
        const assigned = [];
        const skipped = [];
        for (const definition of LEGACY_DEFAULT_HOTKEYS) {
            const commandId = definition.isCoreCommand
                ? definition.commandId
                : `${this.manifest.id}:${definition.commandId}`;
            const command = commands.commands[commandId];
            if (!command) {
                skipped.push(`${commandId}: command not found`);
                continue;
            }
            if (getEffectiveHotkeys(commandId).length > 0) {
                skipped.push(`${command.name}: already has a hotkey`);
                continue;
            }
            const hotkeysToAssign = [];
            for (const hotkey of definition.hotkeys) {
                const conflictingCommandId = commandIdByHotkey.get(this.getHotkeyKey(hotkey));
                if (conflictingCommandId) {
                    const conflictingName = (_b = (_a = commands.commands[conflictingCommandId]) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : conflictingCommandId;
                    skipped.push(`${command.name}: ${this.formatHotkey(hotkey)} is used by "${conflictingName}"`);
                    continue;
                }
                hotkeysToAssign.push(hotkey);
                commandIdByHotkey.set(this.getHotkeyKey(hotkey), commandId);
            }
            if (hotkeysToAssign.length > 0) {
                hotkeyManager.setHotkeys(commandId, hotkeysToAssign);
                assigned.push(`${command.name}: ${hotkeysToAssign.map((hotkey) => this.formatHotkey(hotkey)).join(", ")}`);
            }
        }
        if (assigned.length > 0) {
            await hotkeyManager.save();
        }
        new obsidian.Notice(createFragment((fragment) => {
            fragment.createDiv({ text: `Assigned ${assigned.length} hotkey(s), skipped ${skipped.length}.` });
            for (const line of assigned) {
                fragment.createDiv({ text: `+ ${line}` });
            }
            for (const line of skipped) {
                fragment.createDiv({ text: `- ${line}` });
            }
        }), 0);
    }
    // Нормализованная строка сочетания для сравнения: "Mod" означает Cmd на macOS
    // и Ctrl на остальных платформах, порядок модификаторов и регистр клавиши не важны.
    getHotkeyKey(hotkey) {
        const modifiers = hotkey.modifiers
            .map((modifier) => (modifier === "Mod" ? (obsidian.Platform.isMacOS ? "Meta" : "Ctrl") : modifier))
            .sort();
        return [...modifiers, hotkey.key.toLowerCase()].join("+");
    }
    formatHotkey(hotkey) {
        return [...hotkey.modifiers, hotkey.key].join("+");
    }
    registerSimpleTextCommands() {
        for (const command of SIMPLE_TEXT_COMMANDS) {
            this.addCommand({
                id: command.id,
                name: command.name,
                hotkeys: command.hotkeys,
                editorCallback: (editor) => {
                    if (command.wrapWith && editor.somethingSelected()) {
                        this.wrapSelection(editor, command.wrapWith.opening, command.wrapWith.closing);
                        return;
                    }
                    editor.replaceSelection(command.insert);
                },
            });
        }
    }
    registerAdvancedCommands() {
        this.addCommand({
            id: "insert-inline-code-or-wrap-selection",
            name: "Insert ` or wrap selection with inline code",
            editorCallback: (editor) => {
                if (editor.somethingSelected()) {
                    this.wrapSelection(editor, "`", "`");
                }
                else {
                    editor.replaceSelection("`");
                }
            },
        });
        this.addCommand({
            id: "insert-python-code-block",
            name: "Insert Python code block",
            editorCallback: (editor) => {
                const selectedText = editor.getSelection();
                if (selectedText) {
                    editor.replaceSelection(["```py", selectedText, "```"].join("\n"));
                }
                else {
                    editor.replaceSelection("```py\n\n```");
                    const cursor = editor.getCursor();
                    editor.setCursor({ line: cursor.line - 1, ch: 0 });
                }
            },
        });
        this.addCommand({
            id: "toggle-code-block",
            name: "Toggle code block",
            editorCallback: (editor) => this.toggleCodeBlock(editor),
        });
        this.addCommand({
            id: "toggle-blockquote-for-lines",
            name: "Toggle blockquote for selected lines or insert > on empty line",
            editorCallback: (editor) => this.toggleBlockquoteOrInsert(editor),
        });
        this.addCommand({
            id: "toggle-bullet-list-for-lines",
            name: "Toggle bullet list for selected lines",
            editorCallback: (editor) => this.togglePrefixForLines(editor, /^-\s+/, "- "),
        });
        this.addCommand({
            id: "toggle-selection-case",
            name: "Toggle selection case",
            editorCallback: (editor) => this.toggleSelectionCase(editor),
        });
        this.addCommand({
            id: "increase-heading-level",
            name: "Increase heading level",
            editorCallback: (editor) => this.changeHeadingLevel(editor, 1),
        });
        this.addCommand({
            id: "decrease-heading-level",
            name: "Decrease heading level",
            editorCallback: (editor) => this.changeHeadingLevel(editor, -1),
        });
        this.addCommand({
            id: "insert-or-wrap-french-quotes",
            name: "Insert «» or wrap selection with «»",
            editorCallback: (editor) => this.insertOrWrapFrenchQuotes(editor),
        });
    }
    wrapSelection(editor, opening, closing) {
        const selectedText = editor.getSelection();
        editor.replaceSelection(`${opening}${selectedText}${closing}`);
    }
    getLineRange(editor) {
        if (editor.somethingSelected()) {
            const from = editor.getCursor("from");
            const to = editor.getCursor("to");
            return {
                start: { line: from.line, ch: 0 },
                end: { line: to.line, ch: editor.getLine(to.line).length },
                content: editor.getRange({ line: from.line, ch: 0 }, { line: to.line, ch: editor.getLine(to.line).length }),
            };
        }
        const line = editor.getCursor().line;
        const content = editor.getLine(line);
        return {
            start: { line, ch: 0 },
            end: { line, ch: content.length },
            content,
        };
    }
    toggleBlockquoteOrInsert(editor) {
        if (!editor.somethingSelected()) {
            const cursor = editor.getCursor();
            const currentLine = editor.getLine(cursor.line);
            if (currentLine.trim().length === 0) {
                editor.replaceSelection("> ");
                return;
            }
        }
        this.togglePrefixForLines(editor, /^>\s?/, "> ");
    }
    togglePrefixForLines(editor, prefixPattern, prefixToAdd) {
        const range = this.getLineRange(editor);
        const lines = range.content.split("\n");
        const nonEmptyLines = lines.filter((line) => line.trim().length > 0);
        const shouldRemove = nonEmptyLines.length > 0 && nonEmptyLines.every((line) => prefixPattern.test(line));
        const nextLines = lines.map((line) => {
            if (line.trim().length === 0) {
                return line;
            }
            if (shouldRemove) {
                return line.replace(prefixPattern, "");
            }
            return `${prefixToAdd}${line}`;
        });
        editor.replaceRange(nextLines.join("\n"), range.start, range.end);
    }
    toggleCodeBlock(editor) {
        const selectedText = editor.getSelection();
        if (!selectedText) {
            const cursor = editor.getCursor();
            editor.replaceSelection("```\n\n```");
            editor.setCursor({ line: cursor.line + 1, ch: 0 });
            return;
        }
        const trimmed = selectedText.trim();
        const isWrapped = trimmed.startsWith("```") && trimmed.endsWith("```");
        if (isWrapped) {
            const withoutStartFence = trimmed.replace(/^```[a-zA-Z0-9_-]*\n?/, "");
            const unwrapped = withoutStartFence.replace(/\n?```$/, "");
            editor.replaceSelection(unwrapped);
            return;
        }
        editor.replaceSelection(["```", selectedText, "```"].join("\n"));
    }
    toggleSelectionCase(editor) {
        const selectedText = editor.getSelection();
        if (!selectedText) {
            return;
        }
        const hasLowercase = selectedText !== selectedText.toUpperCase();
        const nextText = hasLowercase ? selectedText.toUpperCase() : selectedText.toLowerCase();
        editor.replaceSelection(nextText);
    }
    // Меняет уровень markdown-heading в текущей строке или во всём выделенном блоке.
    //
    // Актуальная логика такая:
    // - если строка начинается со спецсимвола, markdown-маркера списка/чекбокса
    //   или с номера списка (например `1. ` / `1) `), она не меняется;
    // - если строка пустая или начинается с обычного текста,
    //   Increase heading level делает heading 6 уровня,
    //   а Decrease heading level делает heading 1 уровня;
    // - если строка уже является heading, то Increase heading level
    //   уменьшает количество # (###### -> ##### -> ... -> # -> обычный текст);
    // - Decrease heading level работает наоборот и увеличивает количество #
    //   (# -> ## -> ... -> ###### -> обычный текст).
    changeHeadingLevel(editor, delta) {
        const range = this.getLineRange(editor);
        const lines = range.content.split("\n");
        const nextLines = lines.map((line) => this.changeHeadingLevelForLine(line, delta));
        editor.replaceRange(nextLines.join("\n"), range.start, range.end);
    }
    changeHeadingLevelForLine(line, delta) {
        const headingMatch = line.match(/^(\s*)(#{1,6})\s+(.*)$/);
        if (headingMatch) {
            const [, indent, hashes, content] = headingMatch;
            const currentLevel = hashes.length;
            // Increase heading level = визуально сделать заголовок более "крупным",
            // то есть уменьшить глубину и УМЕНЬШИТЬ количество #.
            if (delta === 1) {
                if (currentLevel === 1) {
                    return `${indent}${content}`;
                }
                return `${indent}${"#".repeat(currentLevel - 1)} ${content}`;
            }
            // Decrease heading level = сделать заголовок более "глубоким",
            // то есть увеличить глубину и ДОБАВИТЬ #.
            // Особый случай: H6 по следующему нажатию превращается в обычный текст.
            if (currentLevel === 6) {
                return `${indent}${content}`;
            }
            return `${indent}${"#".repeat(currentLevel + 1)} ${content}`;
        }
        const blankOrPlainTextMatch = line.match(/^(\s*)(.*)$/);
        if (!blankOrPlainTextMatch) {
            return line;
        }
        const [, indent, content] = blankOrPlainTextMatch;
        const trimmed = content.trim();
        if (trimmed.length === 0) {
            return delta === 1 ? `${indent}###### ` : `${indent}# `;
        }
        // Не создаём heading поверх markdown-списков и checkbox-строк.
        // Сюда же относим строки, начинающиеся с других спецсимволов.
        if (this.isProtectedNonHeadingLine(trimmed)) {
            return line;
        }
        return delta === 1 ? `${indent}###### ${trimmed}` : `${indent}# ${trimmed}`;
    }
    // Возвращает true для строк, которые нельзя автоматически превращать в heading.
    //
    // Защищаем:
    // - bullet list: `- item`, `* item`, `+ item`;
    // - checkbox: `- [ ] task`, `- [x] task`;
    // - ordered list: `1. item`, `2) item`;
    // - строки, начинающиеся с других спецсимволов.
    //
    // Но обычные строки, начинающиеся с цифр ВНУТРИ текста, не блокируем.
    // Например `2025 report` можно превратить в heading, а `1. report` — нет.
    isProtectedNonHeadingLine(trimmedLine) {
        if (/^[-*+]\s+\[[ xX]\]\s+/.test(trimmedLine)) {
            return true;
        }
        if (/^[-*+]\s+/.test(trimmedLine)) {
            return true;
        }
        if (/^\d+[.)]\s+/.test(trimmedLine)) {
            return true;
        }
        return /^[^\p{L}\p{N}]/u.test(trimmedLine);
    }
    insertOrWrapFrenchQuotes(editor) {
        if (editor.somethingSelected()) {
            this.wrapSelection(editor, "«", "»");
            return;
        }
        const cursor = editor.getCursor();
        editor.replaceSelection("«»");
        editor.setCursor({ line: cursor.line, ch: cursor.ch + 1 });
    }
}
const ASSIGN_DEFAULT_HOTKEYS_NAME = "Assign default hotkeys";
const ASSIGN_DEFAULT_HOTKEYS_DESC = "Assigns the hotkeys that version 2.x set by default, such as Alt+1..7 for symbols and Ctrl+0..6 for headings. " +
    "Commands that already have a hotkey and key combinations already used by another command are skipped.";
class ShortcutsExtenderSettingTab extends obsidian.PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }
    // Obsidian 1.13+ строит вкладку по этим определениям (и индексирует их для поиска
    // в настройках), а display() при непустом массиве не вызывает.
    getSettingDefinitions() {
        return [
            {
                name: ASSIGN_DEFAULT_HOTKEYS_NAME,
                desc: ASSIGN_DEFAULT_HOTKEYS_DESC,
                render: (setting) => this.addAssignDefaultHotkeysButton(setting),
            },
        ];
    }
    // Начиная с 1.13.0 display() deprecated.
    display() {
        if (obsidian.requireApiVersion("1.13.0")) {
            // 1.13+ строит вкладку по getSettingDefinitions().
            super.display();
            return;
        }
        // Запасной вариант для Obsidian ниже 1.13.0 (minAppVersion плагина — 1.5.0).
        const { containerEl } = this;
        containerEl.empty();
        this.addAssignDefaultHotkeysButton(new obsidian.Setting(containerEl).setName(ASSIGN_DEFAULT_HOTKEYS_NAME).setDesc(ASSIGN_DEFAULT_HOTKEYS_DESC));
    }
    addAssignDefaultHotkeysButton(setting) {
        setting.addButton((button) => button
            .setButtonText(ASSIGN_DEFAULT_HOTKEYS_NAME)
            .setCta()
            .onClick(() => this.plugin.assignLegacyDefaultHotkeys()));
    }
}

module.exports = ShortcutsExtenderPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG5cdEFwcCxcclxuXHRDb21tYW5kLFxyXG5cdEVkaXRvcixcclxuXHRIb3RrZXksXHJcblx0Tm90aWNlLFxyXG5cdFBsYXRmb3JtLFxyXG5cdFBsdWdpbixcclxuXHRQbHVnaW5TZXR0aW5nVGFiLFxyXG5cdHJlcXVpcmVBcGlWZXJzaW9uLFxyXG5cdFNldHRpbmcsXHJcblx0U2V0dGluZ0RlZmluaXRpb25JdGVtLFxyXG59IGZyb20gXCJvYnNpZGlhblwiO1xyXG5cclxuLy8g0J/QvtC70L3Ri9C5INC00LjQsNC/0LDQt9C+0L0g0YHRgtGA0L7Quiwg0YEg0LrQvtGC0L7RgNGL0Lwg0YDQsNCx0L7RgtCw0Y7RgiDQvNC90L7Qs9C+0YHRgtGA0L7Rh9C90YvQtSDQutC+0LzQsNC90LTRiy5cclxuLy9cclxuLy8g0JfQsNGH0LXQvCDRjdGC0L4g0L3Rg9C20L3QvjpcclxuLy8gLSDQvNC90L7Qs9C40LUgbWFya2Rvd24t0LrQvtC80LDQvdC00Ysg0LvQvtCz0LjRh9C90LXQtSDQv9GA0LjQvNC10L3Rj9GC0Ywg0L3QtSDQuiDQvtGC0LTQtdC70YzQvdGL0Lwg0YHQuNC80LLQvtC70LDQvCxcclxuLy8gICDQsCDQuiDRgdGC0YDQvtC60LDQvCDRhtC10LvQuNC60L7QvDtcclxuLy8gLSDQtdGB0LvQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0LLRi9C00LXQu9C40Lsg0L3QtdGB0LrQvtC70YzQutC+INGB0YLRgNC+0LosINC90LDQvCDRg9C00L7QsdC90L4g0L7QtNC40L0g0YDQsNC3INC/0L7Qu9GD0YfQuNGC0YxcclxuLy8gICDQtNC40LDQv9Cw0LfQvtC9IFwi0L7RgiDQvdCw0YfQsNC70LAg0L/QtdGA0LLQvtC5INGB0YLRgNC+0LrQuCDQtNC+INC60L7QvdGG0LAg0L/QvtGB0LvQtdC00L3QtdC5XCIsINCwINC00LDQu9GM0YjQtSDRg9C20LVcclxuLy8gICDRgNCw0LHQvtGC0LDRgtGMINGBINGN0YLQuNC8INC00LjQsNC/0LDQt9C+0L3QvtC8INC60LDQuiDRgSDQtdC00LjQvdGL0Lwg0LHQu9C+0LrQvtC8INGC0LXQutGB0YLQsC5cclxudHlwZSBMaW5lUmFuZ2UgPSB7XHJcblx0c3RhcnQ6IHsgbGluZTogbnVtYmVyOyBjaDogbnVtYmVyIH07XHJcblx0ZW5kOiB7IGxpbmU6IG51bWJlcjsgY2g6IG51bWJlciB9O1xyXG5cdGNvbnRlbnQ6IHN0cmluZztcclxufTtcclxuXHJcbi8vINCe0L/QuNGB0LDQvdC40LUg0L/RgNC+0YHRgtC+0Lkg0YLQtdC60YHRgtC+0LLQvtC5INC60L7QvNCw0L3QtNGLLlxyXG4vL1xyXG4vLyBpbnNlcnQ6XHJcbi8vICAg0YLQtdC60YHRgiwg0LrQvtGC0L7RgNGL0Lkg0LLRgdGC0LDQstC70Y/QtdGC0YHRjywg0LXRgdC70Lgg0L3QuNGH0LXQs9C+INC90LUg0LLRi9C00LXQu9C10L3Qvi5cclxuLy9cclxuLy8gd3JhcFdpdGg6XHJcbi8vICAg0L/QsNGA0LAgb3BlbmluZy9jbG9zaW5nLCDQutC+0YLQvtGA0LDRjyDQuNGB0L/QvtC70YzQt9GD0LXRgtGB0Y8sINC10YHQu9C4INGC0LXQutGB0YIg0LLRi9C00LXQu9C10L0uXHJcbi8vXHJcbi8vIGhvdGtleXM6XHJcbi8vICAg0L3QtdC+0LHRj9C30LDRgtC10LvRjNC90YvQtSBkZWZhdWx0IGhvdGtleXMg0LTQu9GPINC60L7QvNCw0L3QtNGLLlxyXG50eXBlIFRleHRDb21tYW5kRGVmaW5pdGlvbiA9IHtcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRpbnNlcnQ6IHN0cmluZztcclxuXHR3cmFwV2l0aD86IHsgb3BlbmluZzogc3RyaW5nOyBjbG9zaW5nOiBzdHJpbmcgfTtcclxuXHRob3RrZXlzPzogSG90a2V5W107XHJcbn07XHJcblxyXG5jb25zdCBTSU1QTEVfVEVYVF9DT01NQU5EUzogVGV4dENvbW1hbmREZWZpbml0aW9uW10gPSBbXHJcblx0eyBpZDogXCJpbnNlcnQtZXhjbGFtYXRpb24tbWFya1wiLCBuYW1lOiBcIkluc2VydCAhXCIsIGluc2VydDogXCIhXCIgfSxcclxuXHR7IGlkOiBcImluc2VydC1hdC1zaWduXCIsIG5hbWU6IFwiSW5zZXJ0IEBcIiwgaW5zZXJ0OiBcIkBcIiB9LFxyXG5cdHsgaWQ6IFwiaW5zZXJ0LWhhc2gtc2lnblwiLCBuYW1lOiBcIkluc2VydCAjXCIsIGluc2VydDogXCIjXCIgfSxcclxuXHR7IGlkOiBcImluc2VydC1kb2xsYXItc2lnblwiLCBuYW1lOiBcIkluc2VydCAkXCIsIGluc2VydDogXCIkXCIgfSxcclxuXHR7IGlkOiBcImluc2VydC1wZXJjZW50LXNpZ25cIiwgbmFtZTogXCJJbnNlcnQgJVwiLCBpbnNlcnQ6IFwiJVwiIH0sXHJcblx0eyBpZDogXCJpbnNlcnQtY2FyZXQtc2lnblwiLCBuYW1lOiBcIkluc2VydCBeXCIsIGluc2VydDogXCJeXCIgfSxcclxuXHR7IGlkOiBcImluc2VydC1hbXBlcnNhbmRcIiwgbmFtZTogXCJJbnNlcnQgJlwiLCBpbnNlcnQ6IFwiJlwiIH0sXHJcblx0eyBpZDogXCJpbnNlcnQtcmlnaHQtYW5nbGUtYnJhY2tldFwiLCBuYW1lOiBcIkluc2VydCA+XCIsIGluc2VydDogXCI+XCIgfSxcclxuXHR7IGlkOiBcImluc2VydC1yaWdodC1zcXVhcmUtYnJhY2tldFwiLCBuYW1lOiBcIkluc2VydCBdXCIsIGluc2VydDogXCJdXCIgfSxcclxuXHR7IGlkOiBcImluc2VydC1yaWdodC1jdXJseS1icmFja2V0XCIsIG5hbWU6IFwiSW5zZXJ0IH1cIiwgaW5zZXJ0OiBcIn1cIiB9LFxyXG5cdHsgaWQ6IFwiaW5zZXJ0LXZlcnRpY2FsLWxpbmVcIiwgbmFtZTogXCJJbnNlcnQgfFwiLCBpbnNlcnQ6IFwifFwiIH0sXHJcblx0eyBpZDogXCJpbnNlcnQtbGVmdC1hbmdsZS1icmFja2V0XCIsIG5hbWU6IFwiSW5zZXJ0IDxcIiwgaW5zZXJ0OiBcIjxcIiB9LFxyXG5cdHsgaWQ6IFwiaW5zZXJ0LWVuLWRhc2hcIiwgbmFtZTogXCJJbnNlcnQg4oCTXCIsIGluc2VydDogXCLigJNcIiB9LFxyXG5cdHsgaWQ6IFwiaW5zZXJ0LWVtLWRhc2hcIiwgbmFtZTogXCJJbnNlcnQg4oCUXCIsIGluc2VydDogXCLigJRcIiB9LFxyXG5cdHtcclxuXHRcdGlkOiBcIndyYXAtc2VsZWN0aW9uLXdpdGgtYW5nbGUtYnJhY2tldHNcIixcclxuXHRcdG5hbWU6IFwiV3JhcCBzZWxlY3Rpb24gd2l0aCA8PlwiLFxyXG5cdFx0aW5zZXJ0OiBcIjxcIixcclxuXHRcdHdyYXBXaXRoOiB7IG9wZW5pbmc6IFwiPFwiLCBjbG9zaW5nOiBcIj5cIiB9LFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6IFwiaW5zZXJ0LW9yLXdyYXAtZG91YmxlLWJyYWNrZXRzXCIsXHJcblx0XHRuYW1lOiBcIkluc2VydCBbIG9yIHdyYXAgc2VsZWN0aW9uIHdpdGggW1sgXV1cIixcclxuXHRcdGluc2VydDogXCJbXCIsXHJcblx0XHR3cmFwV2l0aDogeyBvcGVuaW5nOiBcIltbXCIsIGNsb3Npbmc6IFwiXV1cIiB9LFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6IFwiaW5zZXJ0LW9yLXdyYXAtY3VybHktYnJhY2VzXCIsXHJcblx0XHRuYW1lOiBcIkluc2VydCB7IG9yIHdyYXAgc2VsZWN0aW9uIHdpdGgge31cIixcclxuXHRcdGluc2VydDogXCJ7XCIsXHJcblx0XHR3cmFwV2l0aDogeyBvcGVuaW5nOiBcIntcIiwgY2xvc2luZzogXCJ9XCIgfSxcclxuXHR9LFxyXG5dO1xyXG5cclxuLy8gSG90a2V5cywg0LrQvtGC0L7RgNGL0LUg0LHRi9C70Lgg0L3QsNC30L3QsNGH0LXQvdGLINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOINCyINCy0LXRgNGB0LjQuCAyLnguXHJcbi8vXHJcbi8vINCSIDMuMC4wIGRlZmF1bHQgaG90a2V5cyDQsdC+0LvRjNGI0LUg0L3QtSDQvdCw0LfQvdCw0YfQsNGO0YLRgdGPINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4LCDQsCBpZCDQutC+0LzQsNC90LRcclxuLy8g0L/QvtC80LXQvdGP0LvQuNGB0YwuINCa0L3QvtC/0LrQsCDQsiDQvdCw0YHRgtGA0L7QudC60LDRhSDQv9C70LDQs9C40L3QsCDQvdCw0LfQvdCw0YfQsNC10YIg0Y3RgtC4INGB0L7Rh9C10YLQsNC90LjRjyDQv9C+INC30LDQv9GA0L7RgdGDXHJcbi8vINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjy4g0JrQu9GO0Ycg4oCUIGlkINC60L7QvNCw0L3QtNGLINC/0LvQsNCz0LjQvdCwICjQsdC10Lcg0L/RgNC10YTQuNC60YHQsCksINC70LjQsdC+INC/0L7Qu9C90YvQuSBpZFxyXG4vLyDQutC+0LzQsNC90LTRiyDRj9C00YDQsCwg0LXRgdC70LggMy4wLjAg0YPQsdGA0LDQuyDRgdCy0L7RjiDQutC+0LzQsNC90LTRgyDQsiDQv9C+0LvRjNC30YMg0LLRgdGC0YDQvtC10L3QvdC+0LlcclxuLy8gKNC90LDQv9GA0LjQvNC10YAsINC30LDQs9C+0LvQvtCy0LrQuCAxLTYg0Lgg0YPQtNCw0LvQtdC90LjQtSDQt9Cw0LPQvtC70L7QstC60LApLlxyXG5jb25zdCBMRUdBQ1lfREVGQVVMVF9IT1RLRVlTOiB7IGNvbW1hbmRJZDogc3RyaW5nOyBpc0NvcmVDb21tYW5kPzogYm9vbGVhbjsgaG90a2V5czogSG90a2V5W10gfVtdID0gW1xyXG5cdHsgY29tbWFuZElkOiBcImluc2VydC1leGNsYW1hdGlvbi1tYXJrXCIsIGhvdGtleXM6IFt7IG1vZGlmaWVyczogW1wiQWx0XCJdLCBrZXk6IFwiMVwiIH1dIH0sXHJcblx0eyBjb21tYW5kSWQ6IFwiaW5zZXJ0LWF0LXNpZ25cIiwgaG90a2V5czogW3sgbW9kaWZpZXJzOiBbXCJBbHRcIl0sIGtleTogXCIyXCIgfV0gfSxcclxuXHR7IGNvbW1hbmRJZDogXCJpbnNlcnQtaGFzaC1zaWduXCIsIGhvdGtleXM6IFt7IG1vZGlmaWVyczogW1wiQWx0XCJdLCBrZXk6IFwiM1wiIH1dIH0sXHJcblx0eyBjb21tYW5kSWQ6IFwiaW5zZXJ0LWRvbGxhci1zaWduXCIsIGhvdGtleXM6IFt7IG1vZGlmaWVyczogW1wiQWx0XCJdLCBrZXk6IFwiNFwiIH1dIH0sXHJcblx0eyBjb21tYW5kSWQ6IFwiaW5zZXJ0LXBlcmNlbnQtc2lnblwiLCBob3RrZXlzOiBbeyBtb2RpZmllcnM6IFtcIkFsdFwiXSwga2V5OiBcIjVcIiB9XSB9LFxyXG5cdHsgY29tbWFuZElkOiBcImluc2VydC1jYXJldC1zaWduXCIsIGhvdGtleXM6IFt7IG1vZGlmaWVyczogW1wiQWx0XCJdLCBrZXk6IFwiNlwiIH1dIH0sXHJcblx0eyBjb21tYW5kSWQ6IFwiaW5zZXJ0LWFtcGVyc2FuZFwiLCBob3RrZXlzOiBbeyBtb2RpZmllcnM6IFtcIkFsdFwiXSwga2V5OiBcIjdcIiB9XSB9LFxyXG5cdHtcclxuXHRcdGNvbW1hbmRJZDogXCJ3cmFwLXNlbGVjdGlvbi13aXRoLWFuZ2xlLWJyYWNrZXRzXCIsXHJcblx0XHRob3RrZXlzOiBbXHJcblx0XHRcdHsgbW9kaWZpZXJzOiBbXCJBbHRcIl0sIGtleTogXCLQsVwiIH0sXHJcblx0XHRcdHsgbW9kaWZpZXJzOiBbXCJBbHRcIl0sIGtleTogXCIsXCIgfSxcclxuXHRcdF0sXHJcblx0fSxcclxuXHR7XHJcblx0XHRjb21tYW5kSWQ6IFwiaW5zZXJ0LXJpZ2h0LWFuZ2xlLWJyYWNrZXRcIixcclxuXHRcdGhvdGtleXM6IFtcclxuXHRcdFx0eyBtb2RpZmllcnM6IFtcIkFsdFwiXSwga2V5OiBcItGOXCIgfSxcclxuXHRcdFx0eyBtb2RpZmllcnM6IFtcIkFsdFwiXSwga2V5OiBcIi5cIiB9LFxyXG5cdFx0XSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGNvbW1hbmRJZDogXCJpbnNlcnQtb3Itd3JhcC1kb3VibGUtYnJhY2tldHNcIixcclxuXHRcdGhvdGtleXM6IFtcclxuXHRcdFx0eyBtb2RpZmllcnM6IFtcIkFsdFwiXSwga2V5OiBcItGFXCIgfSxcclxuXHRcdFx0eyBtb2RpZmllcnM6IFtcIkFsdFwiXSwga2V5OiBcIltcIiB9LFxyXG5cdFx0XSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGNvbW1hbmRJZDogXCJpbnNlcnQtcmlnaHQtc3F1YXJlLWJyYWNrZXRcIixcclxuXHRcdGhvdGtleXM6IFtcclxuXHRcdFx0eyBtb2RpZmllcnM6IFtcIkFsdFwiXSwga2V5OiBcItGKXCIgfSxcclxuXHRcdFx0eyBtb2RpZmllcnM6IFtcIkFsdFwiXSwga2V5OiBcIl1cIiB9LFxyXG5cdFx0XSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGNvbW1hbmRJZDogXCJpbnNlcnQtcHl0aG9uLWNvZGUtYmxvY2tcIixcclxuXHRcdGhvdGtleXM6IFtcclxuXHRcdFx0eyBtb2RpZmllcnM6IFtcIkFsdFwiLCBcIlNoaWZ0XCJdLCBrZXk6IFwi0ZFcIiB9LFxyXG5cdFx0XHR7IG1vZGlmaWVyczogW1wiQWx0XCIsIFwiU2hpZnRcIl0sIGtleTogXCJ+XCIgfSxcclxuXHRcdF0sXHJcblx0fSxcclxuXHR7XHJcblx0XHRjb21tYW5kSWQ6IFwiaW5zZXJ0LWlubGluZS1jb2RlLW9yLXdyYXAtc2VsZWN0aW9uXCIsXHJcblx0XHRob3RrZXlzOiBbXHJcblx0XHRcdHsgbW9kaWZpZXJzOiBbXCJBbHRcIl0sIGtleTogXCLRkVwiIH0sXHJcblx0XHRcdHsgbW9kaWZpZXJzOiBbXCJBbHRcIl0sIGtleTogXCJgXCIgfSxcclxuXHRcdF0sXHJcblx0fSxcclxuXHR7IGNvbW1hbmRJZDogXCJ0b2dnbGUtY29kZS1ibG9ja1wiLCBob3RrZXlzOiBbeyBtb2RpZmllcnM6IFtcIkN0cmxcIl0sIGtleTogXCJgXCIgfV0gfSxcclxuXHR7XHJcblx0XHRjb21tYW5kSWQ6IFwiaW5zZXJ0LW9yLXdyYXAtY3VybHktYnJhY2VzXCIsXHJcblx0XHRob3RrZXlzOiBbXHJcblx0XHRcdHsgbW9kaWZpZXJzOiBbXCJBbHRcIiwgXCJTaGlmdFwiXSwga2V5OiBcItGFXCIgfSxcclxuXHRcdFx0eyBtb2RpZmllcnM6IFtcIkFsdFwiLCBcIlNoaWZ0XCJdLCBrZXk6IFwie1wiIH0sXHJcblx0XHRdLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Y29tbWFuZElkOiBcImluc2VydC1yaWdodC1jdXJseS1icmFja2V0XCIsXHJcblx0XHRob3RrZXlzOiBbXHJcblx0XHRcdHsgbW9kaWZpZXJzOiBbXCJBbHRcIiwgXCJTaGlmdFwiXSwga2V5OiBcItGKXCIgfSxcclxuXHRcdFx0eyBtb2RpZmllcnM6IFtcIkFsdFwiLCBcIlNoaWZ0XCJdLCBrZXk6IFwifVwiIH0sXHJcblx0XHRdLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Y29tbWFuZElkOiBcImluc2VydC12ZXJ0aWNhbC1saW5lXCIsXHJcblx0XHRob3RrZXlzOiBbXHJcblx0XHRcdHsgbW9kaWZpZXJzOiBbXCJBbHRcIiwgXCJTaGlmdFwiXSwga2V5OiBcInxcIiB9LFxyXG5cdFx0XHR7IG1vZGlmaWVyczogW1wiQWx0XCIsIFwiU2hpZnRcIl0sIGtleTogXCIvXCIgfSxcclxuXHRcdF0sXHJcblx0fSxcclxuXHR7IGNvbW1hbmRJZDogXCJ0b2dnbGUtYnVsbGV0LWxpc3QtZm9yLWxpbmVzXCIsIGhvdGtleXM6IFt7IG1vZGlmaWVyczogW1wiQWx0XCJdLCBrZXk6IFwiLVwiIH1dIH0sXHJcblx0eyBjb21tYW5kSWQ6IFwiZWRpdG9yOnNldC1oZWFkaW5nLTFcIiwgaXNDb3JlQ29tbWFuZDogdHJ1ZSwgaG90a2V5czogW3sgbW9kaWZpZXJzOiBbXCJDdHJsXCJdLCBrZXk6IFwiMVwiIH1dIH0sXHJcblx0eyBjb21tYW5kSWQ6IFwiZWRpdG9yOnNldC1oZWFkaW5nLTJcIiwgaXNDb3JlQ29tbWFuZDogdHJ1ZSwgaG90a2V5czogW3sgbW9kaWZpZXJzOiBbXCJDdHJsXCJdLCBrZXk6IFwiMlwiIH1dIH0sXHJcblx0eyBjb21tYW5kSWQ6IFwiZWRpdG9yOnNldC1oZWFkaW5nLTNcIiwgaXNDb3JlQ29tbWFuZDogdHJ1ZSwgaG90a2V5czogW3sgbW9kaWZpZXJzOiBbXCJDdHJsXCJdLCBrZXk6IFwiM1wiIH1dIH0sXHJcblx0eyBjb21tYW5kSWQ6IFwiZWRpdG9yOnNldC1oZWFkaW5nLTRcIiwgaXNDb3JlQ29tbWFuZDogdHJ1ZSwgaG90a2V5czogW3sgbW9kaWZpZXJzOiBbXCJDdHJsXCJdLCBrZXk6IFwiNFwiIH1dIH0sXHJcblx0eyBjb21tYW5kSWQ6IFwiZWRpdG9yOnNldC1oZWFkaW5nLTVcIiwgaXNDb3JlQ29tbWFuZDogdHJ1ZSwgaG90a2V5czogW3sgbW9kaWZpZXJzOiBbXCJDdHJsXCJdLCBrZXk6IFwiNVwiIH1dIH0sXHJcblx0eyBjb21tYW5kSWQ6IFwiZWRpdG9yOnNldC1oZWFkaW5nLTZcIiwgaXNDb3JlQ29tbWFuZDogdHJ1ZSwgaG90a2V5czogW3sgbW9kaWZpZXJzOiBbXCJDdHJsXCJdLCBrZXk6IFwiNlwiIH1dIH0sXHJcblx0eyBjb21tYW5kSWQ6IFwiZWRpdG9yOnNldC1oZWFkaW5nLTBcIiwgaXNDb3JlQ29tbWFuZDogdHJ1ZSwgaG90a2V5czogW3sgbW9kaWZpZXJzOiBbXCJDdHJsXCJdLCBrZXk6IFwiMFwiIH1dIH0sXHJcbl07XHJcblxyXG4vLyDQnNC10L3QtdC00LbQtdGAIGhvdGtleXMg0Lgg0YDQtdC10YHRgtGAINC60L7QvNCw0L3QtCDQvdC1INCy0YXQvtC00Y/RgiDQsiDQv9GD0LHQu9C40YfQvdGL0LkgQVBJIE9ic2lkaWFuLFxyXG4vLyDQv9C+0Y3RgtC+0LzRgyDQvtC/0LjRgdGL0LLQsNC10Lwg0YLQvtC70YzQutC+INGC0L4g0L3QtdC80L3QvtCz0L7QtSwg0YfRgtC+INC40YHQv9C+0LvRjNC30YPQtdGC0YHRjyDQvdC40LbQtS5cclxudHlwZSBIb3RrZXlNYW5hZ2VyID0ge1xyXG5cdGN1c3RvbUtleXM6IFJlY29yZDxzdHJpbmcsIEhvdGtleVtdPjtcclxuXHRkZWZhdWx0S2V5czogUmVjb3JkPHN0cmluZywgSG90a2V5W10+O1xyXG5cdHNldEhvdGtleXMoY29tbWFuZElkOiBzdHJpbmcsIGhvdGtleXM6IEhvdGtleVtdKTogdm9pZDtcclxuXHRzYXZlKCk6IFByb21pc2U8dm9pZD47XHJcbn07XHJcblxyXG50eXBlIEFwcFdpdGhIb3RrZXlzID0gQXBwICYge1xyXG5cdGhvdGtleU1hbmFnZXI6IEhvdGtleU1hbmFnZXI7XHJcblx0Y29tbWFuZHM6IHsgY29tbWFuZHM6IFJlY29yZDxzdHJpbmcsIENvbW1hbmQ+IH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9ydGN1dHNFeHRlbmRlclBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XHJcblx0b25sb2FkKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5yZWdpc3RlclNpbXBsZVRleHRDb21tYW5kcygpO1xyXG5cdFx0dGhpcy5yZWdpc3RlckFkdmFuY2VkQ29tbWFuZHMoKTtcclxuXHRcdHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgU2hvcnRjdXRzRXh0ZW5kZXJTZXR0aW5nVGFiKHRoaXMuYXBwLCB0aGlzKSk7XHJcblx0fVxyXG5cclxuXHQvLyDQndCw0LfQvdCw0YfQsNC10YIgZGVmYXVsdCBob3RrZXlzINCy0LXRgNGB0LjQuCAyLngsINC90LjRh9C10LPQviDQvdC1INC/0LXRgNC10LfQsNC/0LjRgdGL0LLQsNGPOlxyXG5cdC8vIC0g0LrQvtC80LDQvdC00LAsINGDINC60L7RgtC+0YDQvtC5INGD0LbQtSDQtdGB0YLRjCBob3RrZXkgKNGB0LLQvtC5INC40LvQuCDQv9C+INGD0LzQvtC70YfQsNC90LjRjiksINC/0YDQvtC/0YPRgdC60LDQtdGC0YHRjztcclxuXHQvLyAtINGB0L7Rh9C10YLQsNC90LjQtSwg0LrQvtGC0L7RgNC+0LUg0YPQttC1INC30LDQvdGP0YLQviDQtNGA0YPQs9C+0Lkg0LrQvtC80LDQvdC00L7QuSwg0L/RgNC+0L/Rg9GB0LrQsNC10YLRgdGPLlxyXG5cdC8vINCSINC60L7QvdGG0LUg0L/QvtC60LDQt9GL0LLQsNC10YIgTm90aWNlINGB0L4g0YHQv9C40YHQutC+0Lwg0L3QsNC30L3QsNGH0LXQvdC90L7Qs9C+INC4INC/0YDQvtC/0YPRidC10L3QvdC+0LPQvi5cclxuXHRhc3luYyBhc3NpZ25MZWdhY3lEZWZhdWx0SG90a2V5cygpOiBQcm9taXNlPHZvaWQ+IHtcclxuXHRcdGNvbnN0IHsgaG90a2V5TWFuYWdlciwgY29tbWFuZHMgfSA9IHRoaXMuYXBwIGFzIEFwcFdpdGhIb3RrZXlzO1xyXG5cdFx0Y29uc3QgZ2V0RWZmZWN0aXZlSG90a2V5cyA9IChjb21tYW5kSWQ6IHN0cmluZyk6IEhvdGtleVtdID0+XHJcblx0XHRcdGhvdGtleU1hbmFnZXIuY3VzdG9tS2V5c1tjb21tYW5kSWRdID8/IGhvdGtleU1hbmFnZXIuZGVmYXVsdEtleXNbY29tbWFuZElkXSA/PyBbXTtcclxuXHJcblx0XHQvLyDQmtCw0LrQsNGPINC60L7QvNCw0L3QtNCwINGB0LXQudGH0LDRgSDQt9Cw0L3QuNC80LDQtdGCINC60LDQttC00L7QtSDRgdC+0YfQtdGC0LDQvdC40LUg0LrQu9Cw0LLQuNGILlxyXG5cdFx0Y29uc3QgY29tbWFuZElkQnlIb3RrZXkgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xyXG5cdFx0Y29uc3QgYm91bmRDb21tYW5kSWRzID0gbmV3IFNldChbXHJcblx0XHRcdC4uLk9iamVjdC5rZXlzKGhvdGtleU1hbmFnZXIuZGVmYXVsdEtleXMpLFxyXG5cdFx0XHQuLi5PYmplY3Qua2V5cyhob3RrZXlNYW5hZ2VyLmN1c3RvbUtleXMpLFxyXG5cdFx0XSk7XHJcblx0XHRmb3IgKGNvbnN0IGNvbW1hbmRJZCBvZiBib3VuZENvbW1hbmRJZHMpIHtcclxuXHRcdFx0Zm9yIChjb25zdCBob3RrZXkgb2YgZ2V0RWZmZWN0aXZlSG90a2V5cyhjb21tYW5kSWQpKSB7XHJcblx0XHRcdFx0Y29tbWFuZElkQnlIb3RrZXkuc2V0KHRoaXMuZ2V0SG90a2V5S2V5KGhvdGtleSksIGNvbW1hbmRJZCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBhc3NpZ25lZDogc3RyaW5nW10gPSBbXTtcclxuXHRcdGNvbnN0IHNraXBwZWQ6IHN0cmluZ1tdID0gW107XHJcblxyXG5cdFx0Zm9yIChjb25zdCBkZWZpbml0aW9uIG9mIExFR0FDWV9ERUZBVUxUX0hPVEtFWVMpIHtcclxuXHRcdFx0Y29uc3QgY29tbWFuZElkID0gZGVmaW5pdGlvbi5pc0NvcmVDb21tYW5kXHJcblx0XHRcdFx0PyBkZWZpbml0aW9uLmNvbW1hbmRJZFxyXG5cdFx0XHRcdDogYCR7dGhpcy5tYW5pZmVzdC5pZH06JHtkZWZpbml0aW9uLmNvbW1hbmRJZH1gO1xyXG5cdFx0XHRjb25zdCBjb21tYW5kID0gY29tbWFuZHMuY29tbWFuZHNbY29tbWFuZElkXTtcclxuXHJcblx0XHRcdGlmICghY29tbWFuZCkge1xyXG5cdFx0XHRcdHNraXBwZWQucHVzaChgJHtjb21tYW5kSWR9OiBjb21tYW5kIG5vdCBmb3VuZGApO1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoZ2V0RWZmZWN0aXZlSG90a2V5cyhjb21tYW5kSWQpLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRza2lwcGVkLnB1c2goYCR7Y29tbWFuZC5uYW1lfTogYWxyZWFkeSBoYXMgYSBob3RrZXlgKTtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29uc3QgaG90a2V5c1RvQXNzaWduOiBIb3RrZXlbXSA9IFtdO1xyXG5cdFx0XHRmb3IgKGNvbnN0IGhvdGtleSBvZiBkZWZpbml0aW9uLmhvdGtleXMpIHtcclxuXHRcdFx0XHRjb25zdCBjb25mbGljdGluZ0NvbW1hbmRJZCA9IGNvbW1hbmRJZEJ5SG90a2V5LmdldCh0aGlzLmdldEhvdGtleUtleShob3RrZXkpKTtcclxuXHJcblx0XHRcdFx0aWYgKGNvbmZsaWN0aW5nQ29tbWFuZElkKSB7XHJcblx0XHRcdFx0XHRjb25zdCBjb25mbGljdGluZ05hbWUgPSBjb21tYW5kcy5jb21tYW5kc1tjb25mbGljdGluZ0NvbW1hbmRJZF0/Lm5hbWUgPz8gY29uZmxpY3RpbmdDb21tYW5kSWQ7XHJcblx0XHRcdFx0XHRza2lwcGVkLnB1c2goYCR7Y29tbWFuZC5uYW1lfTogJHt0aGlzLmZvcm1hdEhvdGtleShob3RrZXkpfSBpcyB1c2VkIGJ5IFwiJHtjb25mbGljdGluZ05hbWV9XCJgKTtcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aG90a2V5c1RvQXNzaWduLnB1c2goaG90a2V5KTtcclxuXHRcdFx0XHRjb21tYW5kSWRCeUhvdGtleS5zZXQodGhpcy5nZXRIb3RrZXlLZXkoaG90a2V5KSwgY29tbWFuZElkKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGhvdGtleXNUb0Fzc2lnbi5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0aG90a2V5TWFuYWdlci5zZXRIb3RrZXlzKGNvbW1hbmRJZCwgaG90a2V5c1RvQXNzaWduKTtcclxuXHRcdFx0XHRhc3NpZ25lZC5wdXNoKGAke2NvbW1hbmQubmFtZX06ICR7aG90a2V5c1RvQXNzaWduLm1hcCgoaG90a2V5KSA9PiB0aGlzLmZvcm1hdEhvdGtleShob3RrZXkpKS5qb2luKFwiLCBcIil9YCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoYXNzaWduZWQubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRhd2FpdCBob3RrZXlNYW5hZ2VyLnNhdmUoKTtcclxuXHRcdH1cclxuXHJcblx0XHRuZXcgTm90aWNlKFxyXG5cdFx0XHRjcmVhdGVGcmFnbWVudCgoZnJhZ21lbnQpID0+IHtcclxuXHRcdFx0XHRmcmFnbWVudC5jcmVhdGVEaXYoeyB0ZXh0OiBgQXNzaWduZWQgJHthc3NpZ25lZC5sZW5ndGh9IGhvdGtleShzKSwgc2tpcHBlZCAke3NraXBwZWQubGVuZ3RofS5gIH0pO1xyXG5cdFx0XHRcdGZvciAoY29uc3QgbGluZSBvZiBhc3NpZ25lZCkge1xyXG5cdFx0XHRcdFx0ZnJhZ21lbnQuY3JlYXRlRGl2KHsgdGV4dDogYCsgJHtsaW5lfWAgfSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGZvciAoY29uc3QgbGluZSBvZiBza2lwcGVkKSB7XHJcblx0XHRcdFx0XHRmcmFnbWVudC5jcmVhdGVEaXYoeyB0ZXh0OiBgLSAke2xpbmV9YCB9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pLFxyXG5cdFx0XHQwLFxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdC8vINCd0L7RgNC80LDQu9C40LfQvtCy0LDQvdC90LDRjyDRgdGC0YDQvtC60LAg0YHQvtGH0LXRgtCw0L3QuNGPINC00LvRjyDRgdGA0LDQstC90LXQvdC40Y86IFwiTW9kXCIg0L7Qt9C90LDRh9Cw0LXRgiBDbWQg0L3QsCBtYWNPU1xyXG5cdC8vINC4IEN0cmwg0L3QsCDQvtGB0YLQsNC70YzQvdGL0YUg0L/Qu9Cw0YLRhNC+0YDQvNCw0YUsINC/0L7RgNGP0LTQvtC6INC80L7QtNC40YTQuNC60LDRgtC+0YDQvtCyINC4INGA0LXQs9C40YHRgtGAINC60LvQsNCy0LjRiNC4INC90LUg0LLQsNC20L3Riy5cclxuXHRwcml2YXRlIGdldEhvdGtleUtleShob3RrZXk6IEhvdGtleSk6IHN0cmluZyB7XHJcblx0XHRjb25zdCBtb2RpZmllcnMgPSBob3RrZXkubW9kaWZpZXJzXHJcblx0XHRcdC5tYXAoKG1vZGlmaWVyKSA9PiAobW9kaWZpZXIgPT09IFwiTW9kXCIgPyAoUGxhdGZvcm0uaXNNYWNPUyA/IFwiTWV0YVwiIDogXCJDdHJsXCIpIDogbW9kaWZpZXIpKVxyXG5cdFx0XHQuc29ydCgpO1xyXG5cdFx0cmV0dXJuIFsuLi5tb2RpZmllcnMsIGhvdGtleS5rZXkudG9Mb3dlckNhc2UoKV0uam9pbihcIitcIik7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGZvcm1hdEhvdGtleShob3RrZXk6IEhvdGtleSk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gWy4uLmhvdGtleS5tb2RpZmllcnMsIGhvdGtleS5rZXldLmpvaW4oXCIrXCIpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZWdpc3RlclNpbXBsZVRleHRDb21tYW5kcygpOiB2b2lkIHtcclxuXHRcdGZvciAoY29uc3QgY29tbWFuZCBvZiBTSU1QTEVfVEVYVF9DT01NQU5EUykge1xyXG5cdFx0XHR0aGlzLmFkZENvbW1hbmQoe1xyXG5cdFx0XHRcdGlkOiBjb21tYW5kLmlkLFxyXG5cdFx0XHRcdG5hbWU6IGNvbW1hbmQubmFtZSxcclxuXHRcdFx0XHRob3RrZXlzOiBjb21tYW5kLmhvdGtleXMsXHJcblx0XHRcdFx0ZWRpdG9yQ2FsbGJhY2s6IChlZGl0b3IpID0+IHtcclxuXHRcdFx0XHRcdGlmIChjb21tYW5kLndyYXBXaXRoICYmIGVkaXRvci5zb21ldGhpbmdTZWxlY3RlZCgpKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMud3JhcFNlbGVjdGlvbihlZGl0b3IsIGNvbW1hbmQud3JhcFdpdGgub3BlbmluZywgY29tbWFuZC53cmFwV2l0aC5jbG9zaW5nKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKGNvbW1hbmQuaW5zZXJ0KTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVnaXN0ZXJBZHZhbmNlZENvbW1hbmRzKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcclxuXHRcdFx0aWQ6IFwiaW5zZXJ0LWlubGluZS1jb2RlLW9yLXdyYXAtc2VsZWN0aW9uXCIsXHJcblx0XHRcdG5hbWU6IFwiSW5zZXJ0IGAgb3Igd3JhcCBzZWxlY3Rpb24gd2l0aCBpbmxpbmUgY29kZVwiLFxyXG5cdFx0XHRlZGl0b3JDYWxsYmFjazogKGVkaXRvcikgPT4ge1xyXG5cdFx0XHRcdGlmIChlZGl0b3Iuc29tZXRoaW5nU2VsZWN0ZWQoKSkge1xyXG5cdFx0XHRcdFx0dGhpcy53cmFwU2VsZWN0aW9uKGVkaXRvciwgXCJgXCIsIFwiYFwiKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oXCJgXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuYWRkQ29tbWFuZCh7XHJcblx0XHRcdGlkOiBcImluc2VydC1weXRob24tY29kZS1ibG9ja1wiLFxyXG5cdFx0XHRuYW1lOiBcIkluc2VydCBQeXRob24gY29kZSBibG9ja1wiLFxyXG5cdFx0XHRlZGl0b3JDYWxsYmFjazogKGVkaXRvcikgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHNlbGVjdGVkVGV4dCA9IGVkaXRvci5nZXRTZWxlY3Rpb24oKTtcclxuXHJcblx0XHRcdFx0aWYgKHNlbGVjdGVkVGV4dCkge1xyXG5cdFx0XHRcdFx0ZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oW1wiYGBgcHlcIiwgc2VsZWN0ZWRUZXh0LCBcImBgYFwiXS5qb2luKFwiXFxuXCIpKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oXCJgYGBweVxcblxcbmBgYFwiKTtcclxuXHRcdFx0XHRcdGNvbnN0IGN1cnNvciA9IGVkaXRvci5nZXRDdXJzb3IoKTtcclxuXHRcdFx0XHRcdGVkaXRvci5zZXRDdXJzb3IoeyBsaW5lOiBjdXJzb3IubGluZSAtIDEsIGNoOiAwIH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuYWRkQ29tbWFuZCh7XHJcblx0XHRcdGlkOiBcInRvZ2dsZS1jb2RlLWJsb2NrXCIsXHJcblx0XHRcdG5hbWU6IFwiVG9nZ2xlIGNvZGUgYmxvY2tcIixcclxuXHRcdFx0ZWRpdG9yQ2FsbGJhY2s6IChlZGl0b3IpID0+IHRoaXMudG9nZ2xlQ29kZUJsb2NrKGVkaXRvciksXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmFkZENvbW1hbmQoe1xyXG5cdFx0XHRpZDogXCJ0b2dnbGUtYmxvY2txdW90ZS1mb3ItbGluZXNcIixcclxuXHRcdFx0bmFtZTogXCJUb2dnbGUgYmxvY2txdW90ZSBmb3Igc2VsZWN0ZWQgbGluZXMgb3IgaW5zZXJ0ID4gb24gZW1wdHkgbGluZVwiLFxyXG5cdFx0XHRlZGl0b3JDYWxsYmFjazogKGVkaXRvcikgPT4gdGhpcy50b2dnbGVCbG9ja3F1b3RlT3JJbnNlcnQoZWRpdG9yKSxcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuYWRkQ29tbWFuZCh7XHJcblx0XHRcdGlkOiBcInRvZ2dsZS1idWxsZXQtbGlzdC1mb3ItbGluZXNcIixcclxuXHRcdFx0bmFtZTogXCJUb2dnbGUgYnVsbGV0IGxpc3QgZm9yIHNlbGVjdGVkIGxpbmVzXCIsXHJcblx0XHRcdGVkaXRvckNhbGxiYWNrOiAoZWRpdG9yKSA9PiB0aGlzLnRvZ2dsZVByZWZpeEZvckxpbmVzKGVkaXRvciwgL14tXFxzKy8sIFwiLSBcIiksXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmFkZENvbW1hbmQoe1xyXG5cdFx0XHRpZDogXCJ0b2dnbGUtc2VsZWN0aW9uLWNhc2VcIixcclxuXHRcdFx0bmFtZTogXCJUb2dnbGUgc2VsZWN0aW9uIGNhc2VcIixcclxuXHRcdFx0ZWRpdG9yQ2FsbGJhY2s6IChlZGl0b3IpID0+IHRoaXMudG9nZ2xlU2VsZWN0aW9uQ2FzZShlZGl0b3IpLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcclxuXHRcdFx0aWQ6IFwiaW5jcmVhc2UtaGVhZGluZy1sZXZlbFwiLFxyXG5cdFx0XHRuYW1lOiBcIkluY3JlYXNlIGhlYWRpbmcgbGV2ZWxcIixcclxuXHRcdFx0ZWRpdG9yQ2FsbGJhY2s6IChlZGl0b3IpID0+IHRoaXMuY2hhbmdlSGVhZGluZ0xldmVsKGVkaXRvciwgMSksXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmFkZENvbW1hbmQoe1xyXG5cdFx0XHRpZDogXCJkZWNyZWFzZS1oZWFkaW5nLWxldmVsXCIsXHJcblx0XHRcdG5hbWU6IFwiRGVjcmVhc2UgaGVhZGluZyBsZXZlbFwiLFxyXG5cdFx0XHRlZGl0b3JDYWxsYmFjazogKGVkaXRvcikgPT4gdGhpcy5jaGFuZ2VIZWFkaW5nTGV2ZWwoZWRpdG9yLCAtMSksXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmFkZENvbW1hbmQoe1xyXG5cdFx0XHRpZDogXCJpbnNlcnQtb3Itd3JhcC1mcmVuY2gtcXVvdGVzXCIsXHJcblx0XHRcdG5hbWU6IFwiSW5zZXJ0IMKrwrsgb3Igd3JhcCBzZWxlY3Rpb24gd2l0aCDCq8K7XCIsXHJcblx0XHRcdGVkaXRvckNhbGxiYWNrOiAoZWRpdG9yKSA9PiB0aGlzLmluc2VydE9yV3JhcEZyZW5jaFF1b3RlcyhlZGl0b3IpLFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHdyYXBTZWxlY3Rpb24oZWRpdG9yOiBFZGl0b3IsIG9wZW5pbmc6IHN0cmluZywgY2xvc2luZzogc3RyaW5nKTogdm9pZCB7XHJcblx0XHRjb25zdCBzZWxlY3RlZFRleHQgPSBlZGl0b3IuZ2V0U2VsZWN0aW9uKCk7XHJcblx0XHRlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihgJHtvcGVuaW5nfSR7c2VsZWN0ZWRUZXh0fSR7Y2xvc2luZ31gKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0TGluZVJhbmdlKGVkaXRvcjogRWRpdG9yKTogTGluZVJhbmdlIHtcclxuXHRcdGlmIChlZGl0b3Iuc29tZXRoaW5nU2VsZWN0ZWQoKSkge1xyXG5cdFx0XHRjb25zdCBmcm9tID0gZWRpdG9yLmdldEN1cnNvcihcImZyb21cIik7XHJcblx0XHRcdGNvbnN0IHRvID0gZWRpdG9yLmdldEN1cnNvcihcInRvXCIpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzdGFydDogeyBsaW5lOiBmcm9tLmxpbmUsIGNoOiAwIH0sXHJcblx0XHRcdFx0ZW5kOiB7IGxpbmU6IHRvLmxpbmUsIGNoOiBlZGl0b3IuZ2V0TGluZSh0by5saW5lKS5sZW5ndGggfSxcclxuXHRcdFx0XHRjb250ZW50OiBlZGl0b3IuZ2V0UmFuZ2UoXHJcblx0XHRcdFx0XHR7IGxpbmU6IGZyb20ubGluZSwgY2g6IDAgfSxcclxuXHRcdFx0XHRcdHsgbGluZTogdG8ubGluZSwgY2g6IGVkaXRvci5nZXRMaW5lKHRvLmxpbmUpLmxlbmd0aCB9LFxyXG5cdFx0XHRcdCksXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgbGluZSA9IGVkaXRvci5nZXRDdXJzb3IoKS5saW5lO1xyXG5cdFx0Y29uc3QgY29udGVudCA9IGVkaXRvci5nZXRMaW5lKGxpbmUpO1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHN0YXJ0OiB7IGxpbmUsIGNoOiAwIH0sXHJcblx0XHRcdGVuZDogeyBsaW5lLCBjaDogY29udGVudC5sZW5ndGggfSxcclxuXHRcdFx0Y29udGVudCxcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHRvZ2dsZUJsb2NrcXVvdGVPckluc2VydChlZGl0b3I6IEVkaXRvcik6IHZvaWQge1xyXG5cdFx0aWYgKCFlZGl0b3Iuc29tZXRoaW5nU2VsZWN0ZWQoKSkge1xyXG5cdFx0XHRjb25zdCBjdXJzb3IgPSBlZGl0b3IuZ2V0Q3Vyc29yKCk7XHJcblx0XHRcdGNvbnN0IGN1cnJlbnRMaW5lID0gZWRpdG9yLmdldExpbmUoY3Vyc29yLmxpbmUpO1xyXG5cclxuXHRcdFx0aWYgKGN1cnJlbnRMaW5lLnRyaW0oKS5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHRlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihcIj4gXCIpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMudG9nZ2xlUHJlZml4Rm9yTGluZXMoZWRpdG9yLCAvXj5cXHM/LywgXCI+IFwiKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgdG9nZ2xlUHJlZml4Rm9yTGluZXMoZWRpdG9yOiBFZGl0b3IsIHByZWZpeFBhdHRlcm46IFJlZ0V4cCwgcHJlZml4VG9BZGQ6IHN0cmluZyk6IHZvaWQge1xyXG5cdFx0Y29uc3QgcmFuZ2UgPSB0aGlzLmdldExpbmVSYW5nZShlZGl0b3IpO1xyXG5cdFx0Y29uc3QgbGluZXMgPSByYW5nZS5jb250ZW50LnNwbGl0KFwiXFxuXCIpO1xyXG5cdFx0Y29uc3Qgbm9uRW1wdHlMaW5lcyA9IGxpbmVzLmZpbHRlcigobGluZSkgPT4gbGluZS50cmltKCkubGVuZ3RoID4gMCk7XHJcblx0XHRjb25zdCBzaG91bGRSZW1vdmUgPSBub25FbXB0eUxpbmVzLmxlbmd0aCA+IDAgJiYgbm9uRW1wdHlMaW5lcy5ldmVyeSgobGluZSkgPT4gcHJlZml4UGF0dGVybi50ZXN0KGxpbmUpKTtcclxuXHJcblx0XHRjb25zdCBuZXh0TGluZXMgPSBsaW5lcy5tYXAoKGxpbmUpID0+IHtcclxuXHRcdFx0aWYgKGxpbmUudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdHJldHVybiBsaW5lO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoc2hvdWxkUmVtb3ZlKSB7XHJcblx0XHRcdFx0cmV0dXJuIGxpbmUucmVwbGFjZShwcmVmaXhQYXR0ZXJuLCBcIlwiKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGAke3ByZWZpeFRvQWRkfSR7bGluZX1gO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0ZWRpdG9yLnJlcGxhY2VSYW5nZShuZXh0TGluZXMuam9pbihcIlxcblwiKSwgcmFuZ2Uuc3RhcnQsIHJhbmdlLmVuZCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHRvZ2dsZUNvZGVCbG9jayhlZGl0b3I6IEVkaXRvcik6IHZvaWQge1xyXG5cdFx0Y29uc3Qgc2VsZWN0ZWRUZXh0ID0gZWRpdG9yLmdldFNlbGVjdGlvbigpO1xyXG5cclxuXHRcdGlmICghc2VsZWN0ZWRUZXh0KSB7XHJcblx0XHRcdGNvbnN0IGN1cnNvciA9IGVkaXRvci5nZXRDdXJzb3IoKTtcclxuXHRcdFx0ZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oXCJgYGBcXG5cXG5gYGBcIik7XHJcblx0XHRcdGVkaXRvci5zZXRDdXJzb3IoeyBsaW5lOiBjdXJzb3IubGluZSArIDEsIGNoOiAwIH0pO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgdHJpbW1lZCA9IHNlbGVjdGVkVGV4dC50cmltKCk7XHJcblx0XHRjb25zdCBpc1dyYXBwZWQgPSB0cmltbWVkLnN0YXJ0c1dpdGgoXCJgYGBcIikgJiYgdHJpbW1lZC5lbmRzV2l0aChcImBgYFwiKTtcclxuXHJcblx0XHRpZiAoaXNXcmFwcGVkKSB7XHJcblx0XHRcdGNvbnN0IHdpdGhvdXRTdGFydEZlbmNlID0gdHJpbW1lZC5yZXBsYWNlKC9eYGBgW2EtekEtWjAtOV8tXSpcXG4/LywgXCJcIik7XHJcblx0XHRcdGNvbnN0IHVud3JhcHBlZCA9IHdpdGhvdXRTdGFydEZlbmNlLnJlcGxhY2UoL1xcbj9gYGAkLywgXCJcIik7XHJcblx0XHRcdGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKHVud3JhcHBlZCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihbXCJgYGBcIiwgc2VsZWN0ZWRUZXh0LCBcImBgYFwiXS5qb2luKFwiXFxuXCIpKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgdG9nZ2xlU2VsZWN0aW9uQ2FzZShlZGl0b3I6IEVkaXRvcik6IHZvaWQge1xyXG5cdFx0Y29uc3Qgc2VsZWN0ZWRUZXh0ID0gZWRpdG9yLmdldFNlbGVjdGlvbigpO1xyXG5cclxuXHRcdGlmICghc2VsZWN0ZWRUZXh0KSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBoYXNMb3dlcmNhc2UgPSBzZWxlY3RlZFRleHQgIT09IHNlbGVjdGVkVGV4dC50b1VwcGVyQ2FzZSgpO1xyXG5cdFx0Y29uc3QgbmV4dFRleHQgPSBoYXNMb3dlcmNhc2UgPyBzZWxlY3RlZFRleHQudG9VcHBlckNhc2UoKSA6IHNlbGVjdGVkVGV4dC50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0ZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24obmV4dFRleHQpO1xyXG5cdH1cclxuXHJcblx0Ly8g0JzQtdC90Y/QtdGCINGD0YDQvtCy0LXQvdGMIG1hcmtkb3duLWhlYWRpbmcg0LIg0YLQtdC60YPRidC10Lkg0YHRgtGA0L7QutC1INC40LvQuCDQstC+INCy0YHRkdC8INCy0YvQtNC10LvQtdC90L3QvtC8INCx0LvQvtC60LUuXHJcblx0Ly9cclxuXHQvLyDQkNC60YLRg9Cw0LvRjNC90LDRjyDQu9C+0LPQuNC60LAg0YLQsNC60LDRjzpcclxuXHQvLyAtINC10YHQu9C4INGB0YLRgNC+0LrQsCDQvdCw0YfQuNC90LDQtdGC0YHRjyDRgdC+INGB0L/QtdGG0YHQuNC80LLQvtC70LAsIG1hcmtkb3duLdC80LDRgNC60LXRgNCwINGB0L/QuNGB0LrQsC/Rh9C10LrQsdC+0LrRgdCwXHJcblx0Ly8gICDQuNC70Lgg0YEg0L3QvtC80LXRgNCwINGB0L/QuNGB0LrQsCAo0L3QsNC/0YDQuNC80LXRgCBgMS4gYCAvIGAxKSBgKSwg0L7QvdCwINC90LUg0LzQtdC90Y/QtdGC0YHRjztcclxuXHQvLyAtINC10YHQu9C4INGB0YLRgNC+0LrQsCDQv9GD0YHRgtCw0Y8g0LjQu9C4INC90LDRh9C40L3QsNC10YLRgdGPINGBINC+0LHRi9GH0L3QvtCz0L4g0YLQtdC60YHRgtCwLFxyXG5cdC8vICAgSW5jcmVhc2UgaGVhZGluZyBsZXZlbCDQtNC10LvQsNC10YIgaGVhZGluZyA2INGD0YDQvtCy0L3RjyxcclxuXHQvLyAgINCwIERlY3JlYXNlIGhlYWRpbmcgbGV2ZWwg0LTQtdC70LDQtdGCIGhlYWRpbmcgMSDRg9GA0L7QstC90Y87XHJcblx0Ly8gLSDQtdGB0LvQuCDRgdGC0YDQvtC60LAg0YPQttC1INGP0LLQu9GP0LXRgtGB0Y8gaGVhZGluZywg0YLQviBJbmNyZWFzZSBoZWFkaW5nIGxldmVsXHJcblx0Ly8gICDRg9C80LXQvdGM0YjQsNC10YIg0LrQvtC70LjRh9C10YHRgtCy0L4gIyAoIyMjIyMjIC0+ICMjIyMjIC0+IC4uLiAtPiAjIC0+INC+0LHRi9GH0L3Ri9C5INGC0LXQutGB0YIpO1xyXG5cdC8vIC0gRGVjcmVhc2UgaGVhZGluZyBsZXZlbCDRgNCw0LHQvtGC0LDQtdGCINC90LDQvtCx0L7RgNC+0YIg0Lgg0YPQstC10LvQuNGH0LjQstCw0LXRgiDQutC+0LvQuNGH0LXRgdGC0LLQviAjXHJcblx0Ly8gICAoIyAtPiAjIyAtPiAuLi4gLT4gIyMjIyMjIC0+INC+0LHRi9GH0L3Ri9C5INGC0LXQutGB0YIpLlxyXG5cdHByaXZhdGUgY2hhbmdlSGVhZGluZ0xldmVsKGVkaXRvcjogRWRpdG9yLCBkZWx0YTogMSB8IC0xKTogdm9pZCB7XHJcblx0XHRjb25zdCByYW5nZSA9IHRoaXMuZ2V0TGluZVJhbmdlKGVkaXRvcik7XHJcblx0XHRjb25zdCBsaW5lcyA9IHJhbmdlLmNvbnRlbnQuc3BsaXQoXCJcXG5cIik7XHJcblx0XHRjb25zdCBuZXh0TGluZXMgPSBsaW5lcy5tYXAoKGxpbmUpID0+IHRoaXMuY2hhbmdlSGVhZGluZ0xldmVsRm9yTGluZShsaW5lLCBkZWx0YSkpO1xyXG5cdFx0ZWRpdG9yLnJlcGxhY2VSYW5nZShuZXh0TGluZXMuam9pbihcIlxcblwiKSwgcmFuZ2Uuc3RhcnQsIHJhbmdlLmVuZCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNoYW5nZUhlYWRpbmdMZXZlbEZvckxpbmUobGluZTogc3RyaW5nLCBkZWx0YTogMSB8IC0xKTogc3RyaW5nIHtcclxuXHRcdGNvbnN0IGhlYWRpbmdNYXRjaCA9IGxpbmUubWF0Y2goL14oXFxzKikoI3sxLDZ9KVxccysoLiopJC8pO1xyXG5cclxuXHRcdGlmIChoZWFkaW5nTWF0Y2gpIHtcclxuXHRcdFx0Y29uc3QgWywgaW5kZW50LCBoYXNoZXMsIGNvbnRlbnRdID0gaGVhZGluZ01hdGNoO1xyXG5cdFx0XHRjb25zdCBjdXJyZW50TGV2ZWwgPSBoYXNoZXMubGVuZ3RoO1xyXG5cclxuXHRcdFx0Ly8gSW5jcmVhc2UgaGVhZGluZyBsZXZlbCA9INCy0LjQt9GD0LDQu9GM0L3QviDRgdC00LXQu9Cw0YLRjCDQt9Cw0LPQvtC70L7QstC+0Log0LHQvtC70LXQtSBcItC60YDRg9C/0L3Ri9C8XCIsXHJcblx0XHRcdC8vINGC0L4g0LXRgdGC0Ywg0YPQvNC10L3RjNGI0LjRgtGMINCz0LvRg9Cx0LjQvdGDINC4INCj0JzQldCd0KzQqNCY0KLQrCDQutC+0LvQuNGH0LXRgdGC0LLQviAjLlxyXG5cdFx0XHRpZiAoZGVsdGEgPT09IDEpIHtcclxuXHRcdFx0XHRpZiAoY3VycmVudExldmVsID09PSAxKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gYCR7aW5kZW50fSR7Y29udGVudH1gO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIGAke2luZGVudH0ke1wiI1wiLnJlcGVhdChjdXJyZW50TGV2ZWwgLSAxKX0gJHtjb250ZW50fWA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIERlY3JlYXNlIGhlYWRpbmcgbGV2ZWwgPSDRgdC00LXQu9Cw0YLRjCDQt9Cw0LPQvtC70L7QstC+0Log0LHQvtC70LXQtSBcItCz0LvRg9Cx0L7QutC40LxcIixcclxuXHRcdFx0Ly8g0YLQviDQtdGB0YLRjCDRg9Cy0LXQu9C40YfQuNGC0Ywg0LPQu9GD0LHQuNC90YMg0Lgg0JTQntCR0JDQktCY0KLQrCAjLlxyXG5cdFx0XHQvLyDQntGB0L7QsdGL0Lkg0YHQu9GD0YfQsNC5OiBINiDQv9C+INGB0LvQtdC00YPRjtGJ0LXQvNGDINC90LDQttCw0YLQuNGOINC/0YDQtdCy0YDQsNGJ0LDQtdGC0YHRjyDQsiDQvtCx0YvRh9C90YvQuSDRgtC10LrRgdGCLlxyXG5cdFx0XHRpZiAoY3VycmVudExldmVsID09PSA2KSB7XHJcblx0XHRcdFx0cmV0dXJuIGAke2luZGVudH0ke2NvbnRlbnR9YDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGAke2luZGVudH0ke1wiI1wiLnJlcGVhdChjdXJyZW50TGV2ZWwgKyAxKX0gJHtjb250ZW50fWA7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgYmxhbmtPclBsYWluVGV4dE1hdGNoID0gbGluZS5tYXRjaCgvXihcXHMqKSguKikkLyk7XHJcblx0XHRpZiAoIWJsYW5rT3JQbGFpblRleHRNYXRjaCkge1xyXG5cdFx0XHRyZXR1cm4gbGluZTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBbLCBpbmRlbnQsIGNvbnRlbnRdID0gYmxhbmtPclBsYWluVGV4dE1hdGNoO1xyXG5cdFx0Y29uc3QgdHJpbW1lZCA9IGNvbnRlbnQudHJpbSgpO1xyXG5cclxuXHRcdGlmICh0cmltbWVkLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRyZXR1cm4gZGVsdGEgPT09IDEgPyBgJHtpbmRlbnR9IyMjIyMjIGAgOiBgJHtpbmRlbnR9IyBgO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vINCd0LUg0YHQvtC30LTQsNGR0LwgaGVhZGluZyDQv9C+0LLQtdGA0YUgbWFya2Rvd24t0YHQv9C40YHQutC+0LIg0LggY2hlY2tib3gt0YHRgtGA0L7Qui5cclxuXHRcdC8vINCh0Y7QtNCwINC20LUg0L7RgtC90L7RgdC40Lwg0YHRgtGA0L7QutC4LCDQvdCw0YfQuNC90LDRjtGJ0LjQtdGB0Y8g0YEg0LTRgNGD0LPQuNGFINGB0L/QtdGG0YHQuNC80LLQvtC70L7Qsi5cclxuXHRcdGlmICh0aGlzLmlzUHJvdGVjdGVkTm9uSGVhZGluZ0xpbmUodHJpbW1lZCkpIHtcclxuXHRcdFx0cmV0dXJuIGxpbmU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGRlbHRhID09PSAxID8gYCR7aW5kZW50fSMjIyMjIyAke3RyaW1tZWR9YCA6IGAke2luZGVudH0jICR7dHJpbW1lZH1gO1xyXG5cdH1cclxuXHJcblx0Ly8g0JLQvtC30LLRgNCw0YnQsNC10YIgdHJ1ZSDQtNC70Y8g0YHRgtGA0L7Quiwg0LrQvtGC0L7RgNGL0LUg0L3QtdC70YzQt9GPINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INC/0YDQtdCy0YDQsNGJ0LDRgtGMINCyIGhlYWRpbmcuXHJcblx0Ly9cclxuXHQvLyDQl9Cw0YnQuNGJ0LDQtdC8OlxyXG5cdC8vIC0gYnVsbGV0IGxpc3Q6IGAtIGl0ZW1gLCBgKiBpdGVtYCwgYCsgaXRlbWA7XHJcblx0Ly8gLSBjaGVja2JveDogYC0gWyBdIHRhc2tgLCBgLSBbeF0gdGFza2A7XHJcblx0Ly8gLSBvcmRlcmVkIGxpc3Q6IGAxLiBpdGVtYCwgYDIpIGl0ZW1gO1xyXG5cdC8vIC0g0YHRgtGA0L7QutC4LCDQvdCw0YfQuNC90LDRjtGJ0LjQtdGB0Y8g0YEg0LTRgNGD0LPQuNGFINGB0L/QtdGG0YHQuNC80LLQvtC70L7Qsi5cclxuXHQvL1xyXG5cdC8vINCd0L4g0L7QsdGL0YfQvdGL0LUg0YHRgtGA0L7QutC4LCDQvdCw0YfQuNC90LDRjtGJ0LjQtdGB0Y8g0YEg0YbQuNGE0YAg0JLQndCj0KLQoNCYINGC0LXQutGB0YLQsCwg0L3QtSDQsdC70L7QutC40YDRg9C10LwuXHJcblx0Ly8g0J3QsNC/0YDQuNC80LXRgCBgMjAyNSByZXBvcnRgINC80L7QttC90L4g0L/RgNC10LLRgNCw0YLQuNGC0Ywg0LIgaGVhZGluZywg0LAgYDEuIHJlcG9ydGAg4oCUINC90LXRgi5cclxuXHRwcml2YXRlIGlzUHJvdGVjdGVkTm9uSGVhZGluZ0xpbmUodHJpbW1lZExpbmU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cdFx0aWYgKC9eWy0qK11cXHMrXFxbWyB4WF1cXF1cXHMrLy50ZXN0KHRyaW1tZWRMaW5lKSkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoL15bLSorXVxccysvLnRlc3QodHJpbW1lZExpbmUpKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICgvXlxcZCtbLildXFxzKy8udGVzdCh0cmltbWVkTGluZSkpIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIC9eW15cXHB7TH1cXHB7Tn1dL3UudGVzdCh0cmltbWVkTGluZSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluc2VydE9yV3JhcEZyZW5jaFF1b3RlcyhlZGl0b3I6IEVkaXRvcik6IHZvaWQge1xyXG5cdFx0aWYgKGVkaXRvci5zb21ldGhpbmdTZWxlY3RlZCgpKSB7XHJcblx0XHRcdHRoaXMud3JhcFNlbGVjdGlvbihlZGl0b3IsIFwiwqtcIiwgXCLCu1wiKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGN1cnNvciA9IGVkaXRvci5nZXRDdXJzb3IoKTtcclxuXHRcdGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKFwiwqvCu1wiKTtcclxuXHRcdGVkaXRvci5zZXRDdXJzb3IoeyBsaW5lOiBjdXJzb3IubGluZSwgY2g6IGN1cnNvci5jaCArIDEgfSk7XHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBBU1NJR05fREVGQVVMVF9IT1RLRVlTX05BTUUgPSBcIkFzc2lnbiBkZWZhdWx0IGhvdGtleXNcIjtcclxuY29uc3QgQVNTSUdOX0RFRkFVTFRfSE9US0VZU19ERVNDID1cclxuXHRcIkFzc2lnbnMgdGhlIGhvdGtleXMgdGhhdCB2ZXJzaW9uIDIueCBzZXQgYnkgZGVmYXVsdCwgc3VjaCBhcyBBbHQrMS4uNyBmb3Igc3ltYm9scyBhbmQgQ3RybCswLi42IGZvciBoZWFkaW5ncy4gXCIgK1xyXG5cdFwiQ29tbWFuZHMgdGhhdCBhbHJlYWR5IGhhdmUgYSBob3RrZXkgYW5kIGtleSBjb21iaW5hdGlvbnMgYWxyZWFkeSB1c2VkIGJ5IGFub3RoZXIgY29tbWFuZCBhcmUgc2tpcHBlZC5cIjtcclxuXHJcbmNsYXNzIFNob3J0Y3V0c0V4dGVuZGVyU2V0dGluZ1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xyXG5cdGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwcml2YXRlIHJlYWRvbmx5IHBsdWdpbjogU2hvcnRjdXRzRXh0ZW5kZXJQbHVnaW4pIHtcclxuXHRcdHN1cGVyKGFwcCwgcGx1Z2luKTtcclxuXHR9XHJcblxyXG5cdC8vIE9ic2lkaWFuIDEuMTMrINGB0YLRgNC+0LjRgiDQstC60LvQsNC00LrRgyDQv9C+INGN0YLQuNC8INC+0L/RgNC10LTQtdC70LXQvdC40Y/QvCAo0Lgg0LjQvdC00LXQutGB0LjRgNGD0LXRgiDQuNGFINC00LvRjyDQv9C+0LjRgdC60LBcclxuXHQvLyDQsiDQvdCw0YHRgtGA0L7QudC60LDRhSksINCwIGRpc3BsYXkoKSDQv9GA0Lgg0L3QtdC/0YPRgdGC0L7QvCDQvNCw0YHRgdC40LLQtSDQvdC1INCy0YvQt9GL0LLQsNC10YIuXHJcblx0Z2V0U2V0dGluZ0RlZmluaXRpb25zKCk6IFNldHRpbmdEZWZpbml0aW9uSXRlbVtdIHtcclxuXHRcdHJldHVybiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lOiBBU1NJR05fREVGQVVMVF9IT1RLRVlTX05BTUUsXHJcblx0XHRcdFx0ZGVzYzogQVNTSUdOX0RFRkFVTFRfSE9US0VZU19ERVNDLFxyXG5cdFx0XHRcdHJlbmRlcjogKHNldHRpbmcpID0+IHRoaXMuYWRkQXNzaWduRGVmYXVsdEhvdGtleXNCdXR0b24oc2V0dGluZyksXHJcblx0XHRcdH0sXHJcblx0XHRdO1xyXG5cdH1cclxuXHJcblx0Ly8g0J3QsNGH0LjQvdCw0Y8g0YEgMS4xMy4wIGRpc3BsYXkoKSBkZXByZWNhdGVkLlxyXG5cdGRpc3BsYXkoKTogdm9pZCB7XHJcblx0XHRpZiAocmVxdWlyZUFwaVZlcnNpb24oXCIxLjEzLjBcIikpIHtcclxuXHRcdFx0Ly8gMS4xMysg0YHRgtGA0L7QuNGCINCy0LrQu9Cw0LTQutGDINC/0L4gZ2V0U2V0dGluZ0RlZmluaXRpb25zKCkuXHJcblx0XHRcdHN1cGVyLmRpc3BsYXkoKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vINCX0LDQv9Cw0YHQvdC+0Lkg0LLQsNGA0LjQsNC90YIg0LTQu9GPIE9ic2lkaWFuINC90LjQttC1IDEuMTMuMCAobWluQXBwVmVyc2lvbiDQv9C70LDQs9C40L3QsCDigJQgMS41LjApLlxyXG5cdFx0Y29uc3QgeyBjb250YWluZXJFbCB9ID0gdGhpcztcclxuXHRcdGNvbnRhaW5lckVsLmVtcHR5KCk7XHJcblxyXG5cdFx0dGhpcy5hZGRBc3NpZ25EZWZhdWx0SG90a2V5c0J1dHRvbihcclxuXHRcdFx0bmV3IFNldHRpbmcoY29udGFpbmVyRWwpLnNldE5hbWUoQVNTSUdOX0RFRkFVTFRfSE9US0VZU19OQU1FKS5zZXREZXNjKEFTU0lHTl9ERUZBVUxUX0hPVEtFWVNfREVTQyksXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBhZGRBc3NpZ25EZWZhdWx0SG90a2V5c0J1dHRvbihzZXR0aW5nOiBTZXR0aW5nKTogdm9pZCB7XHJcblx0XHRzZXR0aW5nLmFkZEJ1dHRvbigoYnV0dG9uKSA9PlxyXG5cdFx0XHRidXR0b25cclxuXHRcdFx0XHQuc2V0QnV0dG9uVGV4dChBU1NJR05fREVGQVVMVF9IT1RLRVlTX05BTUUpXHJcblx0XHRcdFx0LnNldEN0YSgpXHJcblx0XHRcdFx0Lm9uQ2xpY2soKCkgPT4gdGhpcy5wbHVnaW4uYXNzaWduTGVnYWN5RGVmYXVsdEhvdGtleXMoKSksXHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsiUGx1Z2luIiwiTm90aWNlIiwiUGxhdGZvcm0iLCJQbHVnaW5TZXR0aW5nVGFiIiwicmVxdWlyZUFwaVZlcnNpb24iLCJTZXR0aW5nIl0sIm1hcHBpbmdzIjoiOzs7O0FBOENBLE1BQU0sb0JBQW9CLEdBQTRCO0lBQ3JELEVBQUUsRUFBRSxFQUFFLHlCQUF5QixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtJQUNoRSxFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUU7SUFDdkQsRUFBRSxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFF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
