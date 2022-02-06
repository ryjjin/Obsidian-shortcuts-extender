'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var shortcutsExtender = /** @class */ (function (_super) {
    __extends(shortcutsExtender, _super);
    function shortcutsExtender() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    shortcutsExtender.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log(this.app);
                this.addCommand({
                    id: "shortcut-exclamation-mark",
                    name: "Shortcut for ! symbol",
                    callback: function () { return _this.shortcutExclamationMark(); },
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
                    callback: function () { return _this.shortcutAt(); },
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
                    callback: function () { return _this.shortcutHash(); },
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
                    callback: function () { return _this.shortcutDollar(); },
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
                    callback: function () { return _this.shortcutPercent(); },
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
                    callback: function () { return _this.shortcutCircumflex(); },
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
                    callback: function () { return _this.shortcutAmpersand(); },
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
                    callback: function () { return _this.shortcutLessThan(); },
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
                    callback: function () { return _this.shortcutGreaterThan(); },
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
                    callback: function () { return _this.shortcutLeftSquareBracket(); },
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
                    callback: function () { return _this.shortcutRightSquareBracket(); },
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
                    callback: function () { return _this.shortcutPyCode(); },
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
                    callback: function () { return _this.shortcutCodeFences(); },
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
                    callback: function () { return _this.shortcutLeftCurlyBracket(); },
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
                    callback: function () { return _this.shortcutRightCurlyBracket(); },
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
                    callback: function () { return _this.shortcutVerticalLine(); },
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
                    callback: function () { return _this.shortcutListItems(); },
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
                    callback: function () { return _this.shortcutHeaderN(1); },
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
                    callback: function () { return _this.shortcutHeaderN(2); },
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
                    callback: function () { return _this.shortcutHeaderN(3); },
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
                    callback: function () { return _this.shortcutHeaderN(4); },
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
                    callback: function () { return _this.shortcutHeaderN(5); },
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
                    callback: function () { return _this.shortcutHeaderN(6); },
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
                    callback: function () { return _this.shortcutHeaderN(0); },
                    hotkeys: [
                        {
                            modifiers: ["Ctrl"],
                            key: "0",
                        },
                    ],
                });
                return [2 /*return*/];
            });
        });
    };
    shortcutsExtender.prototype.getSelectedText = function (editor) {
        //thanks to user "Argentina Ortega Sáinz" from the Obsidian community for this feature
        //For a long time I tried to do without such an approach, which resulted in several bugs and the impossibility of fixing them with non-crutches
        if (editor.somethingSelected()) {
            var cursorStart = editor.getCursor('from');
            var cursorEnd = editor.getCursor('to');
            var content = editor.getRange({ line: cursorStart.line, ch: 0 }, { line: cursorEnd.line, ch: editor.getLine(cursorEnd.line).length });
            return {
                start: { line: cursorStart.line, ch: 0 },
                end: {
                    line: cursorEnd.line,
                    ch: editor.getLine(cursorEnd.line).length,
                },
                content: content,
            };
        }
        else {
            // Toggle the todo in the line
            var lineNr = editor.getCursor().line;
            var contents = editor.getDoc().getLine(lineNr);
            var cursorStart = {
                line: lineNr,
                ch: 0,
            };
            var cursorEnd = {
                line: lineNr,
                ch: contents.length,
            };
            var content = editor.getRange(cursorStart, cursorEnd);
            return { start: cursorStart, end: cursorEnd, content: content };
        }
    };
    shortcutsExtender.prototype.shortcutExclamationMark = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        editor.somethingSelected()
            ? editor.getSelection()
            : false;
        editor.replaceSelection("!");
    };
    shortcutsExtender.prototype.shortcutAt = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        editor.somethingSelected()
            ? editor.getSelection()
            : false;
        editor.replaceSelection("@");
    };
    shortcutsExtender.prototype.shortcutHash = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        editor.somethingSelected()
            ? editor.getSelection()
            : false;
        editor.replaceSelection("#");
    };
    shortcutsExtender.prototype.shortcutDollar = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        editor.somethingSelected()
            ? editor.getSelection()
            : false;
        editor.replaceSelection("$");
    };
    shortcutsExtender.prototype.shortcutPercent = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        editor.somethingSelected()
            ? editor.getSelection()
            : false;
        editor.replaceSelection("%");
    };
    shortcutsExtender.prototype.shortcutCircumflex = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        editor.somethingSelected()
            ? editor.getSelection()
            : false;
        editor.replaceSelection("^");
    };
    shortcutsExtender.prototype.shortcutAmpersand = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        editor.somethingSelected()
            ? editor.getSelection()
            : false;
        editor.replaceSelection("&");
    };
    shortcutsExtender.prototype.shortcutLessThan = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        var selectedText = editor.somethingSelected()
            ? editor.getSelection()
            : false;
        if (selectedText) {
            editor.replaceSelection("<".concat(selectedText, ">"));
        }
        else
            editor.replaceSelection("<");
    };
    shortcutsExtender.prototype.shortcutGreaterThan = function () {
        var activeLeaf = this.app.workspace.activeLeaf;
        var editor = activeLeaf.view.sourceMode.cmEditor;
        var selectedText = this.getSelectedText(editor);
        var resultText = "> " + selectedText.content.split('\n').join("\n> ");
        editor.replaceRange(resultText, selectedText.start, selectedText.end);
    };
    shortcutsExtender.prototype.shortcutLeftSquareBracket = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        var selectedText = editor.somethingSelected()
            ? editor.getSelection()
            : false;
        if (selectedText) {
            editor.replaceSelection("[[".concat(selectedText, "]]"));
        }
        else
            editor.replaceSelection("[");
    };
    shortcutsExtender.prototype.shortcutRightSquareBracket = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        editor.somethingSelected()
            ? editor.getSelection()
            : false;
        editor.replaceSelection("]");
    };
    shortcutsExtender.prototype.shortcutPyCode = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        var selectedText = editor.somethingSelected()
            ? editor.getSelection()
            : false;
        if (selectedText) {
            editor.replaceSelection("```py\n".concat(selectedText, "\n```"));
        }
        else
            editor.replaceSelection("`");
    };
    shortcutsExtender.prototype.shortcutCodeFences = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        var selectedText = editor.somethingSelected()
            ? editor.getSelection()
            : false;
        if (selectedText) {
            editor.replaceSelection("`".concat(selectedText, "`"));
        }
        else
            editor.replaceSelection("`");
    };
    shortcutsExtender.prototype.shortcutRightCurlyBracket = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        editor.somethingSelected()
            ? editor.getSelection()
            : false;
        editor.replaceSelection("}");
    };
    shortcutsExtender.prototype.shortcutLeftCurlyBracket = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        var selectedText = editor.somethingSelected()
            ? editor.getSelection()
            : false;
        if (selectedText) {
            editor.replaceSelection("{".concat(selectedText, "}"));
        }
        else
            editor.replaceSelection("{");
    };
    shortcutsExtender.prototype.shortcutVerticalLine = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        editor.somethingSelected()
            ? editor.getSelection()
            : false;
        editor.replaceSelection("|");
    };
    shortcutsExtender.prototype.shortcutListItems = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        var selectedText = this.getSelectedText(editor);
        var resultText = "- " + selectedText.content.split('\n').join("\n- ");
        var resultTextCheck = resultText;
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
    };
    shortcutsExtender.prototype.removeFormatSymbolsFromStr = function (line) {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        // Remove symbols we don't want at the beginning of the line.
        while (line.substring(0, 2) == "##") {
            line = line.replace("##", "#");
        }
        while (line.substring(0, 2) == "# ") {
            line = line.substr(2);
        }
        while (line.substring(0, 2) == "> ") {
            line = line.substr(2);
        }
        while (line.substring(0, 2) == "		") {
            line = line.replace("		", "	");
        }
        while (line.substring(0, 3) == "	- ") {
            line = line.substr(3);
        }
        while (line.substring(0, 2) == "- ") {
            line = line.substr(2);
        }
        var re_digits = /^\d\.\s/;
        line = line.replace(re_digits, "");
        return line;
    };
    shortcutsExtender.prototype.addHeadingToStr = function (line, headingLevel) {
        var space = " ";
        if (headingLevel == 0) {
            space = "";
        }
        return "#".repeat(headingLevel) + space + line;
    };
    shortcutsExtender.prototype.shortcutHeaderN = function (headingLevel) {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        // Apply 
        var selections = editor.listSelections();
        for (var i = 0; i < selections.length; i++) {
            this.shortcutHeaderNSingleSelection(headingLevel, selections[i]);
        }
        // setSelections is called to preserve the location of each cursor relative
        // to the end of the line.
        editor.setSelections(selections);
    };
    // shortcutHeaderNSingleSelection sets all lines in the selection to the 
    // desired heading level. selection is also updated to maintain the cursor
    // position relative to the end of the line.
    shortcutsExtender.prototype.shortcutHeaderNSingleSelection = function (headingLevel, selection) {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        // Save anchor/head distance from end.
        var anchorDistFromEnd = editor.getLine(selection.anchor.line).length - selection.anchor.ch;
        var headDistFromEnd = editor.getLine(selection.head.line).length - selection.head.ch;
        // Get from and to line numbers.
        var fromLine = selection.anchor.line;
        var toLine = selection.head.line;
        var increment = fromLine <= toLine ? 1 : -1;
        // For each line in the selection, set the heading level.
        var lineNum = fromLine;
        while (true) {
            // Update the current line.
            var line = editor.getLine(lineNum);
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
    };
    return shortcutsExtender;
}(obsidian.Plugin));

module.exports = shortcutsExtender;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm1haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcclxuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xyXG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xyXG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBlZGl0b3JFZGl0b3JGaWVsZCwgTWFya2Rvd25WaWV3LCBQbHVnaW4sIEVkaXRvclNlbGVjdGlvbiwgRWRpdG9yIH0gZnJvbSBcIm9ic2lkaWFuXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzaG9ydGN1dHNFeHRlbmRlciBleHRlbmRzIFBsdWdpbiB7XHJcbiAgYXN5bmMgb25sb2FkKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5hcHApO1xyXG5cclxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgIGlkOiBcInNob3J0Y3V0LWV4Y2xhbWF0aW9uLW1hcmtcIixcclxuICAgICAgbmFtZTogXCJTaG9ydGN1dCBmb3IgISBzeW1ib2xcIixcclxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXRFeGNsYW1hdGlvbk1hcmsoKSxcclxuICAgICAgaG90a2V5czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1vZGlmaWVyczogW1wiQWx0XCJdLFxyXG4gICAgICAgICAga2V5OiBcIjFcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcclxuICAgICAgaWQ6IFwic2hvcnRjdXQtQXRcIixcclxuICAgICAgbmFtZTogXCJTaG9ydGN1dCBmb3IgQCBzeW1ib2xcIixcclxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXRBdCgpLFxyXG4gICAgICBob3RrZXlzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbW9kaWZpZXJzOiBbXCJBbHRcIl0sXHJcbiAgICAgICAgICBrZXk6IFwiMlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xyXG4gICAgICBpZDogXCJzaG9ydGN1dC1oYXNoXCIsXHJcbiAgICAgIG5hbWU6IFwiU2hvcnRjdXQgZm9yICMgc3ltYm9sXCIsXHJcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnNob3J0Y3V0SGFzaCgpLFxyXG4gICAgICBob3RrZXlzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbW9kaWZpZXJzOiBbXCJBbHRcIl0sXHJcbiAgICAgICAgICBrZXk6IFwiM1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xyXG4gICAgICBpZDogXCJzaG9ydGN1dC1kb2xsYXJcIixcclxuICAgICAgbmFtZTogXCJTaG9ydGN1dCBmb3IgJCBzeW1ib2xcIixcclxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXREb2xsYXIoKSxcclxuICAgICAgaG90a2V5czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1vZGlmaWVyczogW1wiQWx0XCJdLFxyXG4gICAgICAgICAga2V5OiBcIjRcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcclxuICAgICAgaWQ6IFwic2hvcnRjdXQtcGVyY2VudFwiLFxyXG4gICAgICBuYW1lOiBcIlNob3J0Y3V0IGZvciAlIHN5bWJvbFwiLFxyXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zaG9ydGN1dFBlcmNlbnQoKSxcclxuICAgICAgaG90a2V5czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1vZGlmaWVyczogW1wiQWx0XCJdLFxyXG4gICAgICAgICAga2V5OiBcIjVcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcclxuICAgICAgaWQ6IFwic2hvcnRjdXQtY2lyY3VtZmxleFwiLFxyXG4gICAgICBuYW1lOiBcIlNob3J0Y3V0IGZvciBeIHN5bWJvbFwiLFxyXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zaG9ydGN1dENpcmN1bWZsZXgoKSxcclxuICAgICAgaG90a2V5czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1vZGlmaWVyczogW1wiQWx0XCJdLFxyXG4gICAgICAgICAga2V5OiBcIjZcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcclxuICAgICAgaWQ6IFwic2hvcnRjdXQtYW1wZXJzYW5kXCIsXHJcbiAgICAgIG5hbWU6IFwiU2hvcnRjdXQgZm9yICYgc3ltYm9sXCIsXHJcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnNob3J0Y3V0QW1wZXJzYW5kKCksXHJcbiAgICAgIGhvdGtleXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkFsdFwiXSxcclxuICAgICAgICAgIGtleTogXCI3XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgIGlkOiBcInNob3J0Y3V0LWxlc3MtdGhhblwiLFxyXG4gICAgICBuYW1lOiBcIlNob3J0Y3V0IGZvciA8IHN5bWJvbFwiLFxyXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zaG9ydGN1dExlc3NUaGFuKCksXHJcbiAgICAgIGhvdGtleXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkFsdFwiXSxcclxuICAgICAgICAgIGtleTogXCLQsVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbW9kaWZpZXJzOiBbXCJBbHRcIl0sXHJcbiAgICAgICAgICBrZXk6IFwiLFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xyXG4gICAgICBpZDogXCJzaG9ydGN1dC1ncmVhdGVyLXRoYW5cIixcclxuICAgICAgbmFtZTogXCJTaG9ydGN1dCBmb3IgPiBzeW1ib2xcIixcclxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXRHcmVhdGVyVGhhbigpLFxyXG4gICAgICBob3RrZXlzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbW9kaWZpZXJzOiBbXCJBbHRcIl0sXHJcbiAgICAgICAgICBrZXk6IFwi0Y5cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1vZGlmaWVyczogW1wiQWx0XCJdLFxyXG4gICAgICAgICAga2V5OiBcIi5cIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcclxuICAgICAgaWQ6IFwic2hvcnRjdXQtbGVmdC1zcXVhcmUtYnJhY2tldFwiLFxyXG4gICAgICBuYW1lOiBcIlNob3J0Y3V0IGZvciBbIHN5bWJvbFwiLFxyXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zaG9ydGN1dExlZnRTcXVhcmVCcmFja2V0KCksXHJcbiAgICAgIGhvdGtleXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkFsdFwiXSxcclxuICAgICAgICAgIGtleTogXCLRhVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbW9kaWZpZXJzOiBbXCJBbHRcIl0sXHJcbiAgICAgICAgICBrZXk6IFwiW1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xyXG4gICAgICBpZDogXCJzaG9ydGN1dC1yaWdodC1zcXVhcmUtYnJhY2tldFwiLFxyXG4gICAgICBuYW1lOiBcIlNob3J0Y3V0IGZvciBdIHN5bWJvbFwiLFxyXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zaG9ydGN1dFJpZ2h0U3F1YXJlQnJhY2tldCgpLFxyXG4gICAgICBob3RrZXlzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbW9kaWZpZXJzOiBbXCJBbHRcIl0sXHJcbiAgICAgICAgICBrZXk6IFwi0YpcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1vZGlmaWVyczogW1wiQWx0XCJdLFxyXG4gICAgICAgICAga2V5OiBcIl1cIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcclxuICAgICAgaWQ6IFwic2hvcnRjdXQtcHl0aG9uLWNvZGVcIixcclxuICAgICAgbmFtZTogXCJTaG9ydGN1dCBmb3IgLnB5IGNvZGUgZmVuY2VzXCIsXHJcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnNob3J0Y3V0UHlDb2RlKCksXHJcbiAgICAgIGhvdGtleXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkFsdFwiLCBcIlNoaWZ0XCJdLFxyXG4gICAgICAgICAga2V5OiBcItGRXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkFsdFwiLCBcIlNoaWZ0XCJdLFxyXG4gICAgICAgICAga2V5OiBcIn5cIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcclxuICAgICAgaWQ6IFwic2hvcnRjdXQtY29kZVwiLFxyXG4gICAgICBuYW1lOiBcIlNob3J0Y3V0IGZvciBjb2RlIGZlbmNlcyAoYClcIixcclxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXRDb2RlRmVuY2VzKCksXHJcbiAgICAgIGhvdGtleXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkFsdFwiXSxcclxuICAgICAgICAgIGtleTogXCLRkVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbW9kaWZpZXJzOiBbXCJBbHRcIl0sXHJcbiAgICAgICAgICBrZXk6IFwiYFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xyXG4gICAgICBpZDogXCJzaG9ydGN1dC1sZWZ0LWN1cmx5LWJyYWNrZXRcIixcclxuICAgICAgbmFtZTogXCJTaG9ydGN1dCBmb3IgeyBzeW1ib2xcIixcclxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXRMZWZ0Q3VybHlCcmFja2V0KCksXHJcbiAgICAgIGhvdGtleXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkFsdFwiLCBcIlNoaWZ0XCJdLFxyXG4gICAgICAgICAga2V5OiBcItGFXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkFsdFwiLCBcIlNoaWZ0XCJdLFxyXG4gICAgICAgICAga2V5OiBcIntcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcclxuICAgICAgaWQ6IFwic2hvcnRjdXQtcmlnaHQtY3VybHktYnJhY2tldFwiLFxyXG4gICAgICBuYW1lOiBcIlNob3J0Y3V0IGZvciB9IHN5bWJvbFwiLFxyXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zaG9ydGN1dFJpZ2h0Q3VybHlCcmFja2V0KCksXHJcbiAgICAgIGhvdGtleXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkFsdFwiLCBcIlNoaWZ0XCJdLFxyXG4gICAgICAgICAga2V5OiBcItGKXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkFsdFwiLCBcIlNoaWZ0XCJdLFxyXG4gICAgICAgICAga2V5OiBcIn1cIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcclxuICAgICAgaWQ6IFwic2hvcnRjdXQtVmVydGljYWwtTGluZVwiLFxyXG4gICAgICBuYW1lOiBcIlNob3J0Y3V0IGZvciB8IHN5bWJvbFwiLFxyXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zaG9ydGN1dFZlcnRpY2FsTGluZSgpLFxyXG4gICAgICBob3RrZXlzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbW9kaWZpZXJzOiBbXCJBbHRcIiwgXCJTaGlmdFwiXSxcclxuICAgICAgICAgIGtleTogXCJ8XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkFsdFwiLCBcIlNoaWZ0XCJdLFxyXG4gICAgICAgICAga2V5OiBcIlxcL1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuXHJcbiAgdGhpcy5hZGRDb21tYW5kKHtcclxuICAgICAgaWQ6IFwic2hvcnRjdXQtbGlzdC1pdGVtc1wiLFxyXG4gICAgICBuYW1lOiBcIkNyZWF0aW5nIGxpc3QgaXRlbSBmcm9tIHRleHRcIixcclxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXRMaXN0SXRlbXMoKSxcclxuICAgICAgaG90a2V5czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1vZGlmaWVyczogW1wiQWx0XCJdLFxyXG4gICAgICAgICAga2V5OiBcIi1cIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcblxyXG4gIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgIGlkOiBcImhlYWRpbmctMVwiLFxyXG4gICAgICBuYW1lOiBcImxpbmUgaW50byBsZXZlbCAxIGhlYWRpbmdcIixcclxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXRIZWFkZXJOKDEpLFxyXG4gICAgICBob3RrZXlzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbW9kaWZpZXJzOiBbXCJDdHJsXCJdLFxyXG4gICAgICAgICAga2V5OiBcIjFcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcblxyXG4gIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgIGlkOiBcImhlYWRpbmctMlwiLFxyXG4gICAgICBuYW1lOiBcImxpbmUgaW50byBsZXZlbCAyIGhlYWRpbmdcIixcclxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXRIZWFkZXJOKDIpLFxyXG4gICAgICBob3RrZXlzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbW9kaWZpZXJzOiBbXCJDdHJsXCJdLFxyXG4gICAgICAgICAga2V5OiBcIjJcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcblxyXG4gIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgIGlkOiBcImhlYWRpbmctM1wiLFxyXG4gICAgICBuYW1lOiBcImxpbmUgaW50byBsZXZlbCAzIGhlYWRpbmdcIixcclxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXRIZWFkZXJOKDMpLFxyXG4gICAgICBob3RrZXlzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbW9kaWZpZXJzOiBbXCJDdHJsXCJdLFxyXG4gICAgICAgICAga2V5OiBcIjNcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcblxyXG4gIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgIGlkOiBcImhlYWRpbmctNFwiLFxyXG4gICAgICBuYW1lOiBcImxpbmUgaW50byBsZXZlbCA0IGhlYWRpbmdcIixcclxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXRIZWFkZXJOKDQpLFxyXG4gICAgICBob3RrZXlzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbW9kaWZpZXJzOiBbXCJDdHJsXCJdLFxyXG4gICAgICAgICAga2V5OiBcIjRcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcblxyXG4gIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgIGlkOiBcImhlYWRpbmctNVwiLFxyXG4gICAgICBuYW1lOiBcImxpbmUgaW50byBsZXZlbCA1IGhlYWRpbmdcIixcclxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXRIZWFkZXJOKDUpLFxyXG4gICAgICBob3RrZXlzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbW9kaWZpZXJzOiBbXCJDdHJsXCJdLFxyXG4gICAgICAgICAga2V5OiBcIjVcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcblxyXG4gIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgIGlkOiBcImhlYWRpbmctNlwiLFxyXG4gICAgICBuYW1lOiBcImxpbmUgaW50byBsZXZlbCA2IGhlYWRpbmdcIixcclxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXRIZWFkZXJOKDYpLFxyXG4gICAgICBob3RrZXlzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbW9kaWZpZXJzOiBbXCJDdHJsXCJdLFxyXG4gICAgICAgICAga2V5OiBcIjZcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcblxyXG4gIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgIGlkOiBcImhlYWRpbmctMFwiLFxyXG4gICAgICBuYW1lOiBcImNsZWFyaW5nIG9mIHRleHQgZm9ybWF0dGluZ1wiLFxyXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zaG9ydGN1dEhlYWRlck4oMCksXHJcbiAgICAgIGhvdGtleXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkN0cmxcIl0sXHJcbiAgICAgICAgICBrZXk6IFwiMFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGVkVGV4dChlZGl0b3I6IEVkaXRvcikge1xyXG4gIC8vdGhhbmtzIHRvIHVzZXIgXCJBcmdlbnRpbmEgT3J0ZWdhIFPDoWluelwiIGZyb20gdGhlIE9ic2lkaWFuIGNvbW11bml0eSBmb3IgdGhpcyBmZWF0dXJlXHJcbiAgLy9Gb3IgYSBsb25nIHRpbWUgSSB0cmllZCB0byBkbyB3aXRob3V0IHN1Y2ggYW4gYXBwcm9hY2gsIHdoaWNoIHJlc3VsdGVkIGluIHNldmVyYWwgYnVncyBhbmQgdGhlIGltcG9zc2liaWxpdHkgb2YgZml4aW5nIHRoZW0gd2l0aCBub24tY3J1dGNoZXNcclxuICAgIGlmIChlZGl0b3Iuc29tZXRoaW5nU2VsZWN0ZWQoKSkge1xyXG4gICAgICBsZXQgY3Vyc29yU3RhcnQgPSBlZGl0b3IuZ2V0Q3Vyc29yKCdmcm9tJyk7XHJcbiAgICAgIGxldCBjdXJzb3JFbmQgPSBlZGl0b3IuZ2V0Q3Vyc29yKCd0bycpO1xyXG4gICAgICBsZXQgY29udGVudCA9IGVkaXRvci5nZXRSYW5nZShcclxuICAgICAgICB7IGxpbmU6IGN1cnNvclN0YXJ0LmxpbmUsIGNoOiAwIH0sXHJcbiAgICAgICAgeyBsaW5lOiBjdXJzb3JFbmQubGluZSwgY2g6IGVkaXRvci5nZXRMaW5lKGN1cnNvckVuZC5saW5lKS5sZW5ndGggfVxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN0YXJ0OiB7IGxpbmU6IGN1cnNvclN0YXJ0LmxpbmUsIGNoOiAwIH0sXHJcbiAgICAgICAgZW5kOiB7XHJcbiAgICAgICAgICBsaW5lOiBjdXJzb3JFbmQubGluZSxcclxuICAgICAgICAgIGNoOiBlZGl0b3IuZ2V0TGluZShjdXJzb3JFbmQubGluZSkubGVuZ3RoLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDogY29udGVudCxcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFRvZ2dsZSB0aGUgdG9kbyBpbiB0aGUgbGluZVxyXG4gICAgICB2YXIgbGluZU5yID0gZWRpdG9yLmdldEN1cnNvcigpLmxpbmU7XHJcbiAgICAgIHZhciBjb250ZW50cyA9IGVkaXRvci5nZXREb2MoKS5nZXRMaW5lKGxpbmVOcik7XHJcbiAgICAgIGxldCBjdXJzb3JTdGFydCA9IHtcclxuICAgICAgICBsaW5lOiBsaW5lTnIsXHJcbiAgICAgICAgY2g6IDAsXHJcbiAgICAgIH07XHJcbiAgICAgIGxldCBjdXJzb3JFbmQgPSB7XHJcbiAgICAgICAgbGluZTogbGluZU5yLFxyXG4gICAgICAgIGNoOiBjb250ZW50cy5sZW5ndGgsXHJcbiAgICAgIH07XHJcbiAgICAgIGxldCBjb250ZW50ID0gZWRpdG9yLmdldFJhbmdlKGN1cnNvclN0YXJ0LCBjdXJzb3JFbmQpO1xyXG4gICAgICByZXR1cm4geyBzdGFydDogY3Vyc29yU3RhcnQsIGVuZDogY3Vyc29yRW5kLCBjb250ZW50OiBjb250ZW50IH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG9ydGN1dEV4Y2xhbWF0aW9uTWFyaygpOiB2b2lkIHtcclxuICAgIGxldCBlZGl0b3IgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpPy5lZGl0b3I7XHJcbiAgICBpZiAoZWRpdG9yID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHNlbGVjdGVkVGV4dCA9IGVkaXRvci5zb21ldGhpbmdTZWxlY3RlZCgpXHJcbiAgICAgID8gZWRpdG9yLmdldFNlbGVjdGlvbigpXHJcbiAgICAgIDogZmFsc2U7XHJcbiAgICBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihgXFwhYCk7XHJcbiAgfVxyXG5cclxuICBzaG9ydGN1dEF0KCk6IHZvaWQge1xyXG4gICAgbGV0IGVkaXRvciA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk/LmVkaXRvcjtcclxuICAgIGlmIChlZGl0b3IgPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgc2VsZWN0ZWRUZXh0ID0gZWRpdG9yLnNvbWV0aGluZ1NlbGVjdGVkKClcclxuICAgICAgPyBlZGl0b3IuZ2V0U2VsZWN0aW9uKClcclxuICAgICAgOiBmYWxzZTtcclxuICAgIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKGBAYCk7XHJcbiAgfVxyXG5cclxuICBzaG9ydGN1dEhhc2goKTogdm9pZCB7XHJcbiAgICBsZXQgZWRpdG9yID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KT8uZWRpdG9yO1xyXG4gICAgaWYgKGVkaXRvciA9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBzZWxlY3RlZFRleHQgPSBlZGl0b3Iuc29tZXRoaW5nU2VsZWN0ZWQoKVxyXG4gICAgICA/IGVkaXRvci5nZXRTZWxlY3Rpb24oKVxyXG4gICAgICA6IGZhbHNlO1xyXG4gICAgZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oYCNgKTtcclxuICB9XHJcblxyXG4gIHNob3J0Y3V0RG9sbGFyKCk6IHZvaWQge1xyXG4gICAgbGV0IGVkaXRvciA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk/LmVkaXRvcjtcclxuICAgIGlmIChlZGl0b3IgPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgc2VsZWN0ZWRUZXh0ID0gZWRpdG9yLnNvbWV0aGluZ1NlbGVjdGVkKClcclxuICAgICAgPyBlZGl0b3IuZ2V0U2VsZWN0aW9uKClcclxuICAgICAgOiBmYWxzZTtcclxuICAgIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKGAkYCk7XHJcbiAgfVxyXG5cclxuICBzaG9ydGN1dFBlcmNlbnQoKTogdm9pZCB7XHJcbiAgICBsZXQgZWRpdG9yID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KT8uZWRpdG9yO1xyXG4gICAgaWYgKGVkaXRvciA9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBzZWxlY3RlZFRleHQgPSBlZGl0b3Iuc29tZXRoaW5nU2VsZWN0ZWQoKVxyXG4gICAgICA/IGVkaXRvci5nZXRTZWxlY3Rpb24oKVxyXG4gICAgICA6IGZhbHNlO1xyXG4gICAgZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oYFxcJWApO1xyXG4gIH1cclxuXHJcbiAgc2hvcnRjdXRDaXJjdW1mbGV4KCk6IHZvaWQge1xyXG4gICAgbGV0IGVkaXRvciA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk/LmVkaXRvcjtcclxuICAgIGlmIChlZGl0b3IgPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgc2VsZWN0ZWRUZXh0ID0gZWRpdG9yLnNvbWV0aGluZ1NlbGVjdGVkKClcclxuICAgICAgPyBlZGl0b3IuZ2V0U2VsZWN0aW9uKClcclxuICAgICAgOiBmYWxzZTtcclxuICAgIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKGBcXF5gKTtcclxuICB9XHJcblxyXG4gIHNob3J0Y3V0QW1wZXJzYW5kKCk6IHZvaWQge1xyXG4gICAgbGV0IGVkaXRvciA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk/LmVkaXRvcjtcclxuICAgIGlmIChlZGl0b3IgPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgc2VsZWN0ZWRUZXh0ID0gZWRpdG9yLnNvbWV0aGluZ1NlbGVjdGVkKClcclxuICAgICAgPyBlZGl0b3IuZ2V0U2VsZWN0aW9uKClcclxuICAgICAgOiBmYWxzZTtcclxuICAgIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKGBcXCZgKTtcclxuICB9XHJcblxyXG4gIHNob3J0Y3V0TGVzc1RoYW4oKTogdm9pZCB7XHJcbiAgICBsZXQgZWRpdG9yID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KT8uZWRpdG9yO1xyXG4gICAgaWYgKGVkaXRvciA9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBzZWxlY3RlZFRleHQgPSBlZGl0b3Iuc29tZXRoaW5nU2VsZWN0ZWQoKVxyXG4gICAgICA/IGVkaXRvci5nZXRTZWxlY3Rpb24oKVxyXG4gICAgICA6IGZhbHNlO1xyXG4gICAgaWYgKHNlbGVjdGVkVGV4dCkge1xyXG4gICAgICBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihgPCR7c2VsZWN0ZWRUZXh0fT5gKTtcclxuICAgIH0gZWxzZSBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihgPGApO1xyXG4gIH1cclxuXHJcbiAgc2hvcnRjdXRHcmVhdGVyVGhhbigpOiB2b2lkIHtcclxuXHRcdGxldCBhY3RpdmVMZWFmOiBhbnkgPSB0aGlzLmFwcC53b3Jrc3BhY2UuYWN0aXZlTGVhZjtcclxuICAgIGxldCBlZGl0b3IgPSBhY3RpdmVMZWFmLnZpZXcuc291cmNlTW9kZS5jbUVkaXRvcjtcclxuICAgIGxldCBzZWxlY3RlZFRleHQgPSB0aGlzLmdldFNlbGVjdGVkVGV4dChlZGl0b3IpO1xyXG5cclxuICAgIGxldCByZXN1bHRUZXh0ID0gXCI+IFwiICsgc2VsZWN0ZWRUZXh0LmNvbnRlbnQuc3BsaXQoJ1xcbicpLmpvaW4oXCJcXG4+IFwiKTtcclxuXHRcdGVkaXRvci5yZXBsYWNlUmFuZ2UocmVzdWx0VGV4dCwgc2VsZWN0ZWRUZXh0LnN0YXJ0LCBzZWxlY3RlZFRleHQuZW5kKTtcclxuICB9XHJcblxyXG4gIHNob3J0Y3V0TGVmdFNxdWFyZUJyYWNrZXQoKTogdm9pZCB7XHJcbiAgICBsZXQgZWRpdG9yID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KT8uZWRpdG9yO1xyXG4gICAgaWYgKGVkaXRvciA9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBzZWxlY3RlZFRleHQgPSBlZGl0b3Iuc29tZXRoaW5nU2VsZWN0ZWQoKVxyXG4gICAgICA/IGVkaXRvci5nZXRTZWxlY3Rpb24oKVxyXG4gICAgICA6IGZhbHNlO1xyXG4gICAgaWYgKHNlbGVjdGVkVGV4dCkge1xyXG4gICAgICBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihgW1ske3NlbGVjdGVkVGV4dH1dXWApO1xyXG4gICAgfSBlbHNlIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKGBbYCk7XHJcbiAgfVxyXG5cclxuICBzaG9ydGN1dFJpZ2h0U3F1YXJlQnJhY2tldCgpOiB2b2lkIHtcclxuICAgIGxldCBlZGl0b3IgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpPy5lZGl0b3I7XHJcbiAgICBpZiAoZWRpdG9yID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHNlbGVjdGVkVGV4dCA9IGVkaXRvci5zb21ldGhpbmdTZWxlY3RlZCgpXHJcbiAgICAgID8gZWRpdG9yLmdldFNlbGVjdGlvbigpXHJcbiAgICAgIDogZmFsc2U7XHJcbiAgICBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihgXWApO1xyXG4gIH1cclxuXHJcbiAgc2hvcnRjdXRQeUNvZGUoKTogdm9pZCB7XHJcbiAgICBsZXQgZWRpdG9yID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KT8uZWRpdG9yO1xyXG4gICAgaWYgKGVkaXRvciA9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBzZWxlY3RlZFRleHQgPSBlZGl0b3Iuc29tZXRoaW5nU2VsZWN0ZWQoKVxyXG4gICAgICA/IGVkaXRvci5nZXRTZWxlY3Rpb24oKVxyXG4gICAgICA6IGZhbHNlO1xyXG4gICAgaWYgKHNlbGVjdGVkVGV4dCkge1xyXG4gICAgICBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihgXFxgXFxgXFxgcHlcXG4ke3NlbGVjdGVkVGV4dH1cXG5cXGBcXGBcXGBgKTtcclxuICAgIH0gZWxzZSBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihgXFxgYCk7XHJcbiAgfVxyXG5cclxuICBzaG9ydGN1dENvZGVGZW5jZXMoKTogdm9pZCB7XHJcbiAgICBsZXQgZWRpdG9yID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KT8uZWRpdG9yO1xyXG4gICAgaWYgKGVkaXRvciA9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBzZWxlY3RlZFRleHQgPSBlZGl0b3Iuc29tZXRoaW5nU2VsZWN0ZWQoKVxyXG4gICAgICA/IGVkaXRvci5nZXRTZWxlY3Rpb24oKVxyXG4gICAgICA6IGZhbHNlO1xyXG4gICAgaWYgKHNlbGVjdGVkVGV4dCkge1xyXG4gICAgICBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihgXFxgJHtzZWxlY3RlZFRleHR9XFxgYCk7XHJcbiAgICB9IGVsc2UgZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oYFxcYGApO1xyXG4gIH1cclxuXHJcbiAgc2hvcnRjdXRSaWdodEN1cmx5QnJhY2tldCgpOiB2b2lkIHtcclxuICAgIGxldCBlZGl0b3IgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpPy5lZGl0b3I7XHJcbiAgICBpZiAoZWRpdG9yID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHNlbGVjdGVkVGV4dCA9IGVkaXRvci5zb21ldGhpbmdTZWxlY3RlZCgpXHJcbiAgICAgID8gZWRpdG9yLmdldFNlbGVjdGlvbigpXHJcbiAgICAgIDogZmFsc2U7XHJcbiAgICBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihgfWApO1xyXG4gIH1cclxuXHJcbiAgc2hvcnRjdXRMZWZ0Q3VybHlCcmFja2V0KCk6IHZvaWQge1xyXG4gICAgbGV0IGVkaXRvciA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk/LmVkaXRvcjtcclxuICAgIGlmIChlZGl0b3IgPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgc2VsZWN0ZWRUZXh0ID0gZWRpdG9yLnNvbWV0aGluZ1NlbGVjdGVkKClcclxuICAgICAgPyBlZGl0b3IuZ2V0U2VsZWN0aW9uKClcclxuICAgICAgOiBmYWxzZTtcclxuICAgIGlmIChzZWxlY3RlZFRleHQpIHtcclxuICAgICAgZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oYFxceyR7c2VsZWN0ZWRUZXh0fVxcfWApO1xyXG4gICAgfSBlbHNlIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKGBcXHtgKTtcclxuICB9XHJcblxyXG4gIHNob3J0Y3V0VmVydGljYWxMaW5lKCk6IHZvaWQge1xyXG4gICAgbGV0IGVkaXRvciA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk/LmVkaXRvcjtcclxuICAgIGlmIChlZGl0b3IgPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgc2VsZWN0ZWRUZXh0ID0gZWRpdG9yLnNvbWV0aGluZ1NlbGVjdGVkKClcclxuICAgICAgPyBlZGl0b3IuZ2V0U2VsZWN0aW9uKClcclxuICAgICAgOiBmYWxzZTtcclxuICAgIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKGB8YCk7XHJcbiAgfVxyXG5cclxuICBzaG9ydGN1dExpc3RJdGVtcygpOiB2b2lkIHtcclxuICAgIGxldCBlZGl0b3IgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpPy5lZGl0b3I7XHJcbiAgICBpZiAoZWRpdG9yID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHNlbGVjdGVkVGV4dCA9IHRoaXMuZ2V0U2VsZWN0ZWRUZXh0KGVkaXRvcik7XHJcblxyXG4gICAgbGV0IHJlc3VsdFRleHQgPSBcIi0gXCIgKyBzZWxlY3RlZFRleHQuY29udGVudC5zcGxpdCgnXFxuJykuam9pbihcIlxcbi0gXCIpO1xyXG5cclxuICAgIGxldCByZXN1bHRUZXh0Q2hlY2sgPSByZXN1bHRUZXh0O1xyXG4gICAgd2hpbGUgKHJlc3VsdFRleHRDaGVjay5zZWFyY2goXCItIC0gXCIpID49IDApIHtcclxuICAgICAgcmVzdWx0VGV4dENoZWNrID0gcmVzdWx0VGV4dENoZWNrLnJlcGxhY2UoXCItIC0gXCIsIFwiXHQtIFwiKTtcclxuICAgIH1cclxuICAgIHdoaWxlIChyZXN1bHRUZXh0Q2hlY2suc2VhcmNoKFwiLSBcdFx0XCIpID49IDApIHtcclxuICAgICAgcmVzdWx0VGV4dENoZWNrID0gcmVzdWx0VGV4dENoZWNrLnJlcGxhY2UoXCItIFx0XHRcIiwgXCJcdC0gXHRcIik7XHJcbiAgICB9XHJcbiAgICB3aGlsZSAocmVzdWx0VGV4dENoZWNrLnNlYXJjaChcIi0gXHQtIFwiKSA+PSAwKSB7XHJcbiAgICAgIHJlc3VsdFRleHRDaGVjayA9IHJlc3VsdFRleHRDaGVjay5yZXBsYWNlKFwiLSBcdC0gXCIsIFwiXHRcdC0gXCIpO1xyXG4gICAgfVxyXG4gICAgZWRpdG9yLnJlcGxhY2VSYW5nZShyZXN1bHRUZXh0Q2hlY2ssIHNlbGVjdGVkVGV4dC5zdGFydCwgc2VsZWN0ZWRUZXh0LmVuZCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVGb3JtYXRTeW1ib2xzRnJvbVN0cihsaW5lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgbGV0IGVkaXRvciA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk/LmVkaXRvcjtcclxuICAgIGlmIChlZGl0b3IgPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZlIHN5bWJvbHMgd2UgZG9uJ3Qgd2FudCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaW5lLlxyXG4gICAgd2hpbGUgKGxpbmUuc3Vic3RyaW5nKDAsMikgPT0gXCIjI1wiKSB7XHJcbiAgICAgIGxpbmUgPSBsaW5lLnJlcGxhY2UoXCIjI1wiLCBcIiNcIik7XHJcbiAgICB9XHJcbiAgICB3aGlsZSAobGluZS5zdWJzdHJpbmcoMCwyKSA9PSBcIiMgXCIpIHtcclxuICAgICAgbGluZSA9IGxpbmUuc3Vic3RyKDIpO1xyXG4gICAgfVxyXG4gICAgd2hpbGUgKGxpbmUuc3Vic3RyaW5nKDAsMikgPT0gXCI+IFwiKSB7XHJcbiAgICAgIGxpbmUgPSBsaW5lLnN1YnN0cigyKTtcclxuICAgIH1cclxuICAgIHdoaWxlIChsaW5lLnN1YnN0cmluZygwLDIpID09IFwiXHRcdFwiKSB7XHJcbiAgICAgIGxpbmUgPSBsaW5lLnJlcGxhY2UoXCJcdFx0XCIsIFwiXHRcIik7XHJcbiAgICB9XHJcbiAgICB3aGlsZSAobGluZS5zdWJzdHJpbmcoMCwzKSA9PSBcIlx0LSBcIikge1xyXG4gICAgICBsaW5lID0gbGluZS5zdWJzdHIoMyk7XHJcbiAgICB9XHJcbiAgICB3aGlsZSAobGluZS5zdWJzdHJpbmcoMCwyKSA9PSBcIi0gXCIpIHtcclxuICAgICAgbGluZSA9IGxpbmUuc3Vic3RyKDIpO1xyXG4gICAgfVxyXG4gICAgdmFyIHJlX2RpZ2l0cyA9IC9eXFxkXFwuXFxzLztcclxuICAgIGxpbmUgPSBsaW5lLnJlcGxhY2UocmVfZGlnaXRzLCBcIlwiKTtcclxuXHJcbiAgICByZXR1cm4gbGluZTtcclxuICB9XHJcblxyXG4gIGFkZEhlYWRpbmdUb1N0cihsaW5lOiBzdHJpbmcsIGhlYWRpbmdMZXZlbDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGxldCBzcGFjZSA9IFwiIFwiO1xyXG4gICAgaWYgKGhlYWRpbmdMZXZlbCA9PSAwKSB7XHJcbiAgICAgIHNwYWNlID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gXCIjXCIucmVwZWF0KGhlYWRpbmdMZXZlbCkgKyBzcGFjZSArIGxpbmU7XHJcbiAgfVxyXG5cclxuICBzaG9ydGN1dEhlYWRlck4oaGVhZGluZ0xldmVsOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGxldCBlZGl0b3IgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpPy5lZGl0b3I7XHJcbiAgICBpZiAoZWRpdG9yID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFwcGx5IFxyXG4gICAgbGV0IHNlbGVjdGlvbnMgPSBlZGl0b3IubGlzdFNlbGVjdGlvbnMoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLnNob3J0Y3V0SGVhZGVyTlNpbmdsZVNlbGVjdGlvbihoZWFkaW5nTGV2ZWwsIHNlbGVjdGlvbnNbaV0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2V0U2VsZWN0aW9ucyBpcyBjYWxsZWQgdG8gcHJlc2VydmUgdGhlIGxvY2F0aW9uIG9mIGVhY2ggY3Vyc29yIHJlbGF0aXZlXHJcbiAgICAvLyB0byB0aGUgZW5kIG9mIHRoZSBsaW5lLlxyXG4gICAgZWRpdG9yLnNldFNlbGVjdGlvbnMoc2VsZWN0aW9ucyk7XHJcbiAgfVxyXG5cclxuICAvLyBzaG9ydGN1dEhlYWRlck5TaW5nbGVTZWxlY3Rpb24gc2V0cyBhbGwgbGluZXMgaW4gdGhlIHNlbGVjdGlvbiB0byB0aGUgXHJcbiAgLy8gZGVzaXJlZCBoZWFkaW5nIGxldmVsLiBzZWxlY3Rpb24gaXMgYWxzbyB1cGRhdGVkIHRvIG1haW50YWluIHRoZSBjdXJzb3JcclxuICAvLyBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgZW5kIG9mIHRoZSBsaW5lLlxyXG4gIHNob3J0Y3V0SGVhZGVyTlNpbmdsZVNlbGVjdGlvbihoZWFkaW5nTGV2ZWw6IG51bWJlciwgc2VsZWN0aW9uOiBFZGl0b3JTZWxlY3Rpb24pIHtcclxuICAgIGxldCBlZGl0b3IgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpPy5lZGl0b3I7XHJcbiAgICBpZiAoZWRpdG9yID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNhdmUgYW5jaG9yL2hlYWQgZGlzdGFuY2UgZnJvbSBlbmQuXHJcbiAgICBsZXQgYW5jaG9yRGlzdEZyb21FbmQgPSBlZGl0b3IuZ2V0TGluZShzZWxlY3Rpb24uYW5jaG9yLmxpbmUpLmxlbmd0aCAtIHNlbGVjdGlvbi5hbmNob3IuY2hcclxuICAgIGxldCBoZWFkRGlzdEZyb21FbmQgPSBlZGl0b3IuZ2V0TGluZShzZWxlY3Rpb24uaGVhZC5saW5lKS5sZW5ndGggLSBzZWxlY3Rpb24uaGVhZC5jaFxyXG5cclxuICAgIC8vIEdldCBmcm9tIGFuZCB0byBsaW5lIG51bWJlcnMuXHJcbiAgICBsZXQgZnJvbUxpbmUgPSBzZWxlY3Rpb24uYW5jaG9yLmxpbmU7XHJcbiAgICBsZXQgdG9MaW5lID0gc2VsZWN0aW9uLmhlYWQubGluZTtcclxuICAgIGxldCBpbmNyZW1lbnQgPSBmcm9tTGluZSA8PSB0b0xpbmUgPyAxIDogLTE7XHJcbiAgICAvLyBGb3IgZWFjaCBsaW5lIGluIHRoZSBzZWxlY3Rpb24sIHNldCB0aGUgaGVhZGluZyBsZXZlbC5cclxuICAgIGxldCBsaW5lTnVtID0gZnJvbUxpbmU7XHJcbiAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAvLyBVcGRhdGUgdGhlIGN1cnJlbnQgbGluZS5cclxuICAgICAgbGV0IGxpbmUgPSBlZGl0b3IuZ2V0TGluZShsaW5lTnVtKTtcclxuICAgICAgbGluZSA9IHRoaXMucmVtb3ZlRm9ybWF0U3ltYm9sc0Zyb21TdHIobGluZSk7XHJcbiAgICAgIGxpbmUgPSB0aGlzLmFkZEhlYWRpbmdUb1N0cihsaW5lLCBoZWFkaW5nTGV2ZWwpO1xyXG4gICAgICBlZGl0b3Iuc2V0TGluZShsaW5lTnVtLCBsaW5lKTtcclxuICAgICAgXHJcbiAgICAgIC8vIE1vdmUgdG8gbmV4dCBsaW5lIGlmIG5vdCBkb25lLlxyXG4gICAgICBpZiAobGluZU51bSA9PSB0b0xpbmUpIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBsaW5lTnVtICs9IGluY3JlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcmVzZXJ2ZSBhbmNob3IvaGVhZCBsb2NhdGlvbnMgcmVsYXRpdmUgdG8gbGluZSBlbmQuXHJcbiAgICBzZWxlY3Rpb24uYW5jaG9yLmNoID0gZWRpdG9yLmdldExpbmUoc2VsZWN0aW9uLmFuY2hvci5saW5lKS5sZW5ndGggLSBhbmNob3JEaXN0RnJvbUVuZDtcclxuICAgIHNlbGVjdGlvbi5oZWFkLmNoID0gZWRpdG9yLmdldExpbmUoc2VsZWN0aW9uLmhlYWQubGluZSkubGVuZ3RoIC0gaGVhZERpc3RGcm9tRW5kO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTWFya2Rvd25WaWV3IiwiUGx1Z2luIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDbkMsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7QUFDekMsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3BGLFFBQVEsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzFHLElBQUksT0FBTyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQztBQUNGO0FBQ08sU0FBUyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNoQyxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssVUFBVSxJQUFJLENBQUMsS0FBSyxJQUFJO0FBQzdDLFFBQVEsTUFBTSxJQUFJLFNBQVMsQ0FBQyxzQkFBc0IsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsK0JBQStCLENBQUMsQ0FBQztBQUNsRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEIsSUFBSSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDM0MsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pGLENBQUM7QUF1Q0Q7QUFDTyxTQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUU7QUFDN0QsSUFBSSxTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEtBQUssWUFBWSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLFVBQVUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDaEgsSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDL0QsUUFBUSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ25HLFFBQVEsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ3RHLFFBQVEsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3RILFFBQVEsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlFLEtBQUssQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUNEO0FBQ08sU0FBUyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUMzQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDckgsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxNQUFNLEtBQUssVUFBVSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM3SixJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sVUFBVSxDQUFDLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3RFLElBQUksU0FBUyxJQUFJLENBQUMsRUFBRSxFQUFFO0FBQ3RCLFFBQVEsSUFBSSxDQUFDLEVBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0FBQ3RFLFFBQVEsT0FBTyxDQUFDLEVBQUUsSUFBSTtBQUN0QixZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8s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
