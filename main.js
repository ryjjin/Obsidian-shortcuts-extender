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
                    callback: function () { return _this.shortcutHeader1(); },
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
                    callback: function () { return _this.shortcutHeader2(); },
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
                    callback: function () { return _this.shortcutHeader3(); },
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
                    callback: function () { return _this.shortcutHeader4(); },
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
                    callback: function () { return _this.shortcutHeader5(); },
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
                    callback: function () { return _this.shortcutHeader6(); },
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
                    callback: function () { return _this.shortcutHeader0(); },
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
            var cursorStart = editor.getCursor(true);
            var cursorEnd = editor.getCursor(false);
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
    shortcutsExtender.prototype.shortcutHeader0 = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        var selectedText = this.getSelectedText(editor);
        var j;
        var splittedSelectedText = selectedText.content.split("\n");
        for (j in splittedSelectedText) {
            while (splittedSelectedText[j].substring(0, 2) == "##") {
                splittedSelectedText[j] = splittedSelectedText[j].replace("##", "#");
            }
            while (splittedSelectedText[j].substring(0, 2) == "# ") {
                splittedSelectedText[j] = splittedSelectedText[j].substr(2);
            }
            while (splittedSelectedText[j].substring(0, 2) == "> ") {
                splittedSelectedText[j] = splittedSelectedText[j].substr(2);
            }
            while (splittedSelectedText[j].substring(0, 2) == "		") {
                splittedSelectedText[j] = splittedSelectedText[j].replace("		", "	");
            }
            while (splittedSelectedText[j].substring(0, 3) == "	- ") {
                splittedSelectedText[j] = splittedSelectedText[j].substr(3);
            }
            while (splittedSelectedText[j].substring(0, 2) == "- ") {
                splittedSelectedText[j] = splittedSelectedText[j].substr(2);
            }
            var re_digits = /^\d\.\s/;
            splittedSelectedText[j] = splittedSelectedText[j].replace(re_digits, "");
        }
        editor.replaceRange(splittedSelectedText.toString(), selectedText.start, selectedText.end);
    };
    shortcutsExtender.prototype.shortcutHeader1 = function () {
        var _a;
        this.shortcutHeader0();
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        var selectedText = this.getSelectedText(editor);
        //var clearText = selectedText.content.shortcutHeader0()
        var resultText = "# " + selectedText.content;
        editor.replaceRange(resultText, selectedText.start, selectedText.end);
    };
    shortcutsExtender.prototype.shortcutHeader2 = function () {
        var _a;
        this.shortcutHeader0();
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        var selectedText = this.getSelectedText(editor);
        var resultText = "## " + selectedText.content;
        editor.replaceRange(resultText, selectedText.start, selectedText.end);
    };
    shortcutsExtender.prototype.shortcutHeader3 = function () {
        var _a;
        this.shortcutHeader0();
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        var selectedText = this.getSelectedText(editor);
        var resultText = "### " + selectedText.content;
        editor.replaceRange(resultText, selectedText.start, selectedText.end);
    };
    shortcutsExtender.prototype.shortcutHeader4 = function () {
        var _a;
        this.shortcutHeader0();
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        var selectedText = this.getSelectedText(editor);
        var resultText = "#### " + selectedText.content;
        editor.replaceRange(resultText, selectedText.start, selectedText.end);
    };
    shortcutsExtender.prototype.shortcutHeader5 = function () {
        var _a;
        this.shortcutHeader0();
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        var selectedText = this.getSelectedText(editor);
        var resultText = "##### " + selectedText.content;
        editor.replaceRange(resultText, selectedText.start, selectedText.end);
    };
    shortcutsExtender.prototype.shortcutHeader6 = function () {
        var _a;
        this.shortcutHeader0();
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        var selectedText = this.getSelectedText(editor);
        var resultText = "###### " + selectedText.content;
        editor.replaceRange(resultText, selectedText.start, selectedText.end);
    };
    return shortcutsExtender;
}(obsidian.Plugin));

module.exports = shortcutsExtender;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm1haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcclxuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xyXG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xyXG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBNYXJrZG93blZpZXcsIFBsdWdpbiB9IGZyb20gXCJvYnNpZGlhblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzaG9ydGN1dHNFeHRlbmRlciBleHRlbmRzIFBsdWdpbiB7XG4gIGFzeW5jIG9ubG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmFwcCk7XG5cbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwic2hvcnRjdXQtZXhjbGFtYXRpb24tbWFya1wiLFxuICAgICAgbmFtZTogXCJTaG9ydGN1dCBmb3IgISBzeW1ib2xcIixcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnNob3J0Y3V0RXhjbGFtYXRpb25NYXJrKCksXG4gICAgICBob3RrZXlzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkFsdFwiXSxcbiAgICAgICAgICBrZXk6IFwiMVwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJzaG9ydGN1dC1BdFwiLFxuICAgICAgbmFtZTogXCJTaG9ydGN1dCBmb3IgQCBzeW1ib2xcIixcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnNob3J0Y3V0QXQoKSxcbiAgICAgIGhvdGtleXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1vZGlmaWVyczogW1wiQWx0XCJdLFxuICAgICAgICAgIGtleTogXCIyXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcInNob3J0Y3V0LWhhc2hcIixcbiAgICAgIG5hbWU6IFwiU2hvcnRjdXQgZm9yICMgc3ltYm9sXCIsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zaG9ydGN1dEhhc2goKSxcbiAgICAgIGhvdGtleXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1vZGlmaWVyczogW1wiQWx0XCJdLFxuICAgICAgICAgIGtleTogXCIzXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcInNob3J0Y3V0LWRvbGxhclwiLFxuICAgICAgbmFtZTogXCJTaG9ydGN1dCBmb3IgJCBzeW1ib2xcIixcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnNob3J0Y3V0RG9sbGFyKCksXG4gICAgICBob3RrZXlzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkFsdFwiXSxcbiAgICAgICAgICBrZXk6IFwiNFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJzaG9ydGN1dC1wZXJjZW50XCIsXG4gICAgICBuYW1lOiBcIlNob3J0Y3V0IGZvciAlIHN5bWJvbFwiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXRQZXJjZW50KCksXG4gICAgICBob3RrZXlzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkFsdFwiXSxcbiAgICAgICAgICBrZXk6IFwiNVwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJzaG9ydGN1dC1jaXJjdW1mbGV4XCIsXG4gICAgICBuYW1lOiBcIlNob3J0Y3V0IGZvciBeIHN5bWJvbFwiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXRDaXJjdW1mbGV4KCksXG4gICAgICBob3RrZXlzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkFsdFwiXSxcbiAgICAgICAgICBrZXk6IFwiNlwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJzaG9ydGN1dC1hbXBlcnNhbmRcIixcbiAgICAgIG5hbWU6IFwiU2hvcnRjdXQgZm9yICYgc3ltYm9sXCIsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zaG9ydGN1dEFtcGVyc2FuZCgpLFxuICAgICAgaG90a2V5czogW1xuICAgICAgICB7XG4gICAgICAgICAgbW9kaWZpZXJzOiBbXCJBbHRcIl0sXG4gICAgICAgICAga2V5OiBcIjdcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwic2hvcnRjdXQtbGVzcy10aGFuXCIsXG4gICAgICBuYW1lOiBcIlNob3J0Y3V0IGZvciA8IHN5bWJvbFwiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXRMZXNzVGhhbigpLFxuICAgICAgaG90a2V5czogW1xuICAgICAgICB7XG4gICAgICAgICAgbW9kaWZpZXJzOiBbXCJBbHRcIl0sXG4gICAgICAgICAga2V5OiBcItCxXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkFsdFwiXSxcbiAgICAgICAgICBrZXk6IFwiLFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJzaG9ydGN1dC1ncmVhdGVyLXRoYW5cIixcbiAgICAgIG5hbWU6IFwiU2hvcnRjdXQgZm9yID4gc3ltYm9sXCIsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zaG9ydGN1dEdyZWF0ZXJUaGFuKCksXG4gICAgICBob3RrZXlzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkFsdFwiXSxcbiAgICAgICAgICBrZXk6IFwi0Y5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG1vZGlmaWVyczogW1wiQWx0XCJdLFxuICAgICAgICAgIGtleTogXCIuXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcInNob3J0Y3V0LWxlZnQtc3F1YXJlLWJyYWNrZXRcIixcbiAgICAgIG5hbWU6IFwiU2hvcnRjdXQgZm9yIFsgc3ltYm9sXCIsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zaG9ydGN1dExlZnRTcXVhcmVCcmFja2V0KCksXG4gICAgICBob3RrZXlzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkFsdFwiXSxcbiAgICAgICAgICBrZXk6IFwi0YVcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG1vZGlmaWVyczogW1wiQWx0XCJdLFxuICAgICAgICAgIGtleTogXCJbXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcInNob3J0Y3V0LXJpZ2h0LXNxdWFyZS1icmFja2V0XCIsXG4gICAgICBuYW1lOiBcIlNob3J0Y3V0IGZvciBdIHN5bWJvbFwiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXRSaWdodFNxdWFyZUJyYWNrZXQoKSxcbiAgICAgIGhvdGtleXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1vZGlmaWVyczogW1wiQWx0XCJdLFxuICAgICAgICAgIGtleTogXCLRilwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbW9kaWZpZXJzOiBbXCJBbHRcIl0sXG4gICAgICAgICAga2V5OiBcIl1cIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwic2hvcnRjdXQtcHl0aG9uLWNvZGVcIixcbiAgICAgIG5hbWU6IFwiU2hvcnRjdXQgZm9yIC5weSBjb2RlIGZlbmNlc1wiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXRQeUNvZGUoKSxcbiAgICAgIGhvdGtleXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1vZGlmaWVyczogW1wiQWx0XCIsIFwiU2hpZnRcIl0sXG4gICAgICAgICAga2V5OiBcItGRXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkFsdFwiLCBcIlNoaWZ0XCJdLFxuICAgICAgICAgIGtleTogXCJ+XCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcInNob3J0Y3V0LWNvZGVcIixcbiAgICAgIG5hbWU6IFwiU2hvcnRjdXQgZm9yIGNvZGUgZmVuY2VzIChgKVwiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXRDb2RlRmVuY2VzKCksXG4gICAgICBob3RrZXlzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkFsdFwiXSxcbiAgICAgICAgICBrZXk6IFwi0ZFcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG1vZGlmaWVyczogW1wiQWx0XCJdLFxuICAgICAgICAgIGtleTogXCJgXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcInNob3J0Y3V0LWxlZnQtY3VybHktYnJhY2tldFwiLFxuICAgICAgbmFtZTogXCJTaG9ydGN1dCBmb3IgeyBzeW1ib2xcIixcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnNob3J0Y3V0TGVmdEN1cmx5QnJhY2tldCgpLFxuICAgICAgaG90a2V5czogW1xuICAgICAgICB7XG4gICAgICAgICAgbW9kaWZpZXJzOiBbXCJBbHRcIiwgXCJTaGlmdFwiXSxcbiAgICAgICAgICBrZXk6IFwi0YVcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG1vZGlmaWVyczogW1wiQWx0XCIsIFwiU2hpZnRcIl0sXG4gICAgICAgICAga2V5OiBcIntcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwic2hvcnRjdXQtcmlnaHQtY3VybHktYnJhY2tldFwiLFxuICAgICAgbmFtZTogXCJTaG9ydGN1dCBmb3IgfSBzeW1ib2xcIixcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnNob3J0Y3V0UmlnaHRDdXJseUJyYWNrZXQoKSxcbiAgICAgIGhvdGtleXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1vZGlmaWVyczogW1wiQWx0XCIsIFwiU2hpZnRcIl0sXG4gICAgICAgICAga2V5OiBcItGKXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkFsdFwiLCBcIlNoaWZ0XCJdLFxuICAgICAgICAgIGtleTogXCJ9XCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcInNob3J0Y3V0LVZlcnRpY2FsLUxpbmVcIixcbiAgICAgIG5hbWU6IFwiU2hvcnRjdXQgZm9yIHwgc3ltYm9sXCIsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zaG9ydGN1dFZlcnRpY2FsTGluZSgpLFxuICAgICAgaG90a2V5czogW1xuICAgICAgICB7XG4gICAgICAgICAgbW9kaWZpZXJzOiBbXCJBbHRcIiwgXCJTaGlmdFwiXSxcbiAgICAgICAgICBrZXk6IFwifFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbW9kaWZpZXJzOiBbXCJBbHRcIiwgXCJTaGlmdFwiXSxcbiAgICAgICAgICBrZXk6IFwiXFwvXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJzaG9ydGN1dC1saXN0LWl0ZW1zXCIsXG4gICAgICBuYW1lOiBcIkNyZWF0aW5nIGxpc3QgaXRlbSBmcm9tIHRleHRcIixcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnNob3J0Y3V0TGlzdEl0ZW1zKCksXG4gICAgICBob3RrZXlzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkFsdFwiXSxcbiAgICAgICAgICBrZXk6IFwiLVwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwiaGVhZGluZy0xXCIsXG4gICAgICBuYW1lOiBcImxpbmUgaW50byBsZXZlbCAxIGhlYWRpbmdcIixcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnNob3J0Y3V0SGVhZGVyMSgpLFxuICAgICAgaG90a2V5czogW1xuICAgICAgICB7XG4gICAgICAgICAgbW9kaWZpZXJzOiBbXCJDdHJsXCJdLFxuICAgICAgICAgIGtleTogXCIxXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJoZWFkaW5nLTJcIixcbiAgICAgIG5hbWU6IFwibGluZSBpbnRvIGxldmVsIDIgaGVhZGluZ1wiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXRIZWFkZXIyKCksXG4gICAgICBob3RrZXlzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkN0cmxcIl0sXG4gICAgICAgICAga2V5OiBcIjJcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcImhlYWRpbmctM1wiLFxuICAgICAgbmFtZTogXCJsaW5lIGludG8gbGV2ZWwgMyBoZWFkaW5nXCIsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zaG9ydGN1dEhlYWRlcjMoKSxcbiAgICAgIGhvdGtleXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1vZGlmaWVyczogW1wiQ3RybFwiXSxcbiAgICAgICAgICBrZXk6IFwiM1wiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwiaGVhZGluZy00XCIsXG4gICAgICBuYW1lOiBcImxpbmUgaW50byBsZXZlbCA0IGhlYWRpbmdcIixcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnNob3J0Y3V0SGVhZGVyNCgpLFxuICAgICAgaG90a2V5czogW1xuICAgICAgICB7XG4gICAgICAgICAgbW9kaWZpZXJzOiBbXCJDdHJsXCJdLFxuICAgICAgICAgIGtleTogXCI0XCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJoZWFkaW5nLTVcIixcbiAgICAgIG5hbWU6IFwibGluZSBpbnRvIGxldmVsIDUgaGVhZGluZ1wiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXRIZWFkZXI1KCksXG4gICAgICBob3RrZXlzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkN0cmxcIl0sXG4gICAgICAgICAga2V5OiBcIjVcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcImhlYWRpbmctNlwiLFxuICAgICAgbmFtZTogXCJsaW5lIGludG8gbGV2ZWwgNiBoZWFkaW5nXCIsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zaG9ydGN1dEhlYWRlcjYoKSxcbiAgICAgIGhvdGtleXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1vZGlmaWVyczogW1wiQ3RybFwiXSxcbiAgICAgICAgICBrZXk6IFwiNlwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwiaGVhZGluZy0wXCIsXG4gICAgICBuYW1lOiBcImNsZWFyaW5nIG9mIHRleHQgZm9ybWF0dGluZ1wiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXRIZWFkZXIwKCksXG4gICAgICBob3RrZXlzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkN0cmxcIl0sXG4gICAgICAgICAga2V5OiBcIjBcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG4gIH1cblxuICBnZXRTZWxlY3RlZFRleHQoZWRpdG9yOiBhbnkpIHtcbiAgLy90aGFua3MgdG8gdXNlciBcIkFyZ2VudGluYSBPcnRlZ2EgU8OhaW56XCIgZnJvbSB0aGUgT2JzaWRpYW4gY29tbXVuaXR5IGZvciB0aGlzIGZlYXR1cmVcbiAgLy9Gb3IgYSBsb25nIHRpbWUgSSB0cmllZCB0byBkbyB3aXRob3V0IHN1Y2ggYW4gYXBwcm9hY2gsIHdoaWNoIHJlc3VsdGVkIGluIHNldmVyYWwgYnVncyBhbmQgdGhlIGltcG9zc2liaWxpdHkgb2YgZml4aW5nIHRoZW0gd2l0aCBub24tY3J1dGNoZXNcbiAgICBpZiAoZWRpdG9yLnNvbWV0aGluZ1NlbGVjdGVkKCkpIHtcbiAgICAgIGxldCBjdXJzb3JTdGFydCA9IGVkaXRvci5nZXRDdXJzb3IodHJ1ZSk7XG4gICAgICBsZXQgY3Vyc29yRW5kID0gZWRpdG9yLmdldEN1cnNvcihmYWxzZSk7XG4gICAgICBsZXQgY29udGVudCA9IGVkaXRvci5nZXRSYW5nZShcbiAgICAgICAgeyBsaW5lOiBjdXJzb3JTdGFydC5saW5lLCBjaDogMCB9LFxuICAgICAgICB7IGxpbmU6IGN1cnNvckVuZC5saW5lLCBjaDogZWRpdG9yLmdldExpbmUoY3Vyc29yRW5kLmxpbmUpLmxlbmd0aCB9XG4gICAgICApO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnQ6IHsgbGluZTogY3Vyc29yU3RhcnQubGluZSwgY2g6IDAgfSxcbiAgICAgICAgZW5kOiB7XG4gICAgICAgICAgbGluZTogY3Vyc29yRW5kLmxpbmUsXG4gICAgICAgICAgY2g6IGVkaXRvci5nZXRMaW5lKGN1cnNvckVuZC5saW5lKS5sZW5ndGgsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUb2dnbGUgdGhlIHRvZG8gaW4gdGhlIGxpbmVcbiAgICAgIHZhciBsaW5lTnIgPSBlZGl0b3IuZ2V0Q3Vyc29yKCkubGluZTtcbiAgICAgIHZhciBjb250ZW50cyA9IGVkaXRvci5nZXREb2MoKS5nZXRMaW5lKGxpbmVOcik7XG4gICAgICBsZXQgY3Vyc29yU3RhcnQgPSB7XG4gICAgICAgIGxpbmU6IGxpbmVOcixcbiAgICAgICAgY2g6IDAsXG4gICAgICB9O1xuICAgICAgbGV0IGN1cnNvckVuZCA9IHtcbiAgICAgICAgbGluZTogbGluZU5yLFxuICAgICAgICBjaDogY29udGVudHMubGVuZ3RoLFxuICAgICAgfTtcbiAgICAgIGxldCBjb250ZW50ID0gZWRpdG9yLmdldFJhbmdlKGN1cnNvclN0YXJ0LCBjdXJzb3JFbmQpO1xuICAgICAgcmV0dXJuIHsgc3RhcnQ6IGN1cnNvclN0YXJ0LCBlbmQ6IGN1cnNvckVuZCwgY29udGVudDogY29udGVudCB9O1xuICAgIH1cbiAgfVxuXG4gIHNob3J0Y3V0RXhjbGFtYXRpb25NYXJrKCk6IHZvaWQge1xuICAgIGxldCBlZGl0b3IgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpPy5lZGl0b3I7XG4gICAgaWYgKGVkaXRvciA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBzZWxlY3RlZFRleHQgPSBlZGl0b3Iuc29tZXRoaW5nU2VsZWN0ZWQoKVxuICAgICAgPyBlZGl0b3IuZ2V0U2VsZWN0aW9uKClcbiAgICAgIDogZmFsc2U7XG4gICAgZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oYFxcIWApO1xuICB9XG5cbiAgc2hvcnRjdXRBdCgpOiB2b2lkIHtcbiAgICBsZXQgZWRpdG9yID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KT8uZWRpdG9yO1xuICAgIGlmIChlZGl0b3IgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgc2VsZWN0ZWRUZXh0ID0gZWRpdG9yLnNvbWV0aGluZ1NlbGVjdGVkKClcbiAgICAgID8gZWRpdG9yLmdldFNlbGVjdGlvbigpXG4gICAgICA6IGZhbHNlO1xuICAgIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKGBAYCk7XG4gIH1cblxuICBzaG9ydGN1dEhhc2goKTogdm9pZCB7XG4gICAgbGV0IGVkaXRvciA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk/LmVkaXRvcjtcbiAgICBpZiAoZWRpdG9yID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHNlbGVjdGVkVGV4dCA9IGVkaXRvci5zb21ldGhpbmdTZWxlY3RlZCgpXG4gICAgICA/IGVkaXRvci5nZXRTZWxlY3Rpb24oKVxuICAgICAgOiBmYWxzZTtcbiAgICBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihgI2ApO1xuICB9XG5cbiAgc2hvcnRjdXREb2xsYXIoKTogdm9pZCB7XG4gICAgbGV0IGVkaXRvciA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk/LmVkaXRvcjtcbiAgICBpZiAoZWRpdG9yID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHNlbGVjdGVkVGV4dCA9IGVkaXRvci5zb21ldGhpbmdTZWxlY3RlZCgpXG4gICAgICA/IGVkaXRvci5nZXRTZWxlY3Rpb24oKVxuICAgICAgOiBmYWxzZTtcbiAgICBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihgJGApO1xuICB9XG5cbiAgc2hvcnRjdXRQZXJjZW50KCk6IHZvaWQge1xuICAgIGxldCBlZGl0b3IgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpPy5lZGl0b3I7XG4gICAgaWYgKGVkaXRvciA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBzZWxlY3RlZFRleHQgPSBlZGl0b3Iuc29tZXRoaW5nU2VsZWN0ZWQoKVxuICAgICAgPyBlZGl0b3IuZ2V0U2VsZWN0aW9uKClcbiAgICAgIDogZmFsc2U7XG4gICAgZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oYFxcJWApO1xuICB9XG5cbiAgc2hvcnRjdXRDaXJjdW1mbGV4KCk6IHZvaWQge1xuICAgIGxldCBlZGl0b3IgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpPy5lZGl0b3I7XG4gICAgaWYgKGVkaXRvciA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBzZWxlY3RlZFRleHQgPSBlZGl0b3Iuc29tZXRoaW5nU2VsZWN0ZWQoKVxuICAgICAgPyBlZGl0b3IuZ2V0U2VsZWN0aW9uKClcbiAgICAgIDogZmFsc2U7XG4gICAgZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oYFxcXmApO1xuICB9XG5cbiAgc2hvcnRjdXRBbXBlcnNhbmQoKTogdm9pZCB7XG4gICAgbGV0IGVkaXRvciA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk/LmVkaXRvcjtcbiAgICBpZiAoZWRpdG9yID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHNlbGVjdGVkVGV4dCA9IGVkaXRvci5zb21ldGhpbmdTZWxlY3RlZCgpXG4gICAgICA/IGVkaXRvci5nZXRTZWxlY3Rpb24oKVxuICAgICAgOiBmYWxzZTtcbiAgICBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihgXFwmYCk7XG4gIH1cblxuICBzaG9ydGN1dExlc3NUaGFuKCk6IHZvaWQge1xuICAgIGxldCBlZGl0b3IgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpPy5lZGl0b3I7XG4gICAgaWYgKGVkaXRvciA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBzZWxlY3RlZFRleHQgPSBlZGl0b3Iuc29tZXRoaW5nU2VsZWN0ZWQoKVxuICAgICAgPyBlZGl0b3IuZ2V0U2VsZWN0aW9uKClcbiAgICAgIDogZmFsc2U7XG4gICAgaWYgKHNlbGVjdGVkVGV4dCkge1xuICAgICAgZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oYDwke3NlbGVjdGVkVGV4dH0+YCk7XG4gICAgfSBlbHNlIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKGA8YCk7XG4gIH1cblxuICBzaG9ydGN1dEdyZWF0ZXJUaGFuKCk6IHZvaWQge1xuXHRcdGxldCBhY3RpdmVMZWFmOiBhbnkgPSB0aGlzLmFwcC53b3Jrc3BhY2UuYWN0aXZlTGVhZjtcbiAgICBsZXQgZWRpdG9yID0gYWN0aXZlTGVhZi52aWV3LnNvdXJjZU1vZGUuY21FZGl0b3I7XG4gICAgbGV0IHNlbGVjdGVkVGV4dCA9IHRoaXMuZ2V0U2VsZWN0ZWRUZXh0KGVkaXRvcik7XG5cbiAgICBsZXQgcmVzdWx0VGV4dCA9IFwiPiBcIiArIHNlbGVjdGVkVGV4dC5jb250ZW50LnNwbGl0KCdcXG4nKS5qb2luKFwiXFxuPiBcIik7XG5cdFx0ZWRpdG9yLnJlcGxhY2VSYW5nZShyZXN1bHRUZXh0LCBzZWxlY3RlZFRleHQuc3RhcnQsIHNlbGVjdGVkVGV4dC5lbmQpO1xuICB9XG5cbiAgc2hvcnRjdXRMZWZ0U3F1YXJlQnJhY2tldCgpOiB2b2lkIHtcbiAgICBsZXQgZWRpdG9yID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KT8uZWRpdG9yO1xuICAgIGlmIChlZGl0b3IgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgc2VsZWN0ZWRUZXh0ID0gZWRpdG9yLnNvbWV0aGluZ1NlbGVjdGVkKClcbiAgICAgID8gZWRpdG9yLmdldFNlbGVjdGlvbigpXG4gICAgICA6IGZhbHNlO1xuICAgIGlmIChzZWxlY3RlZFRleHQpIHtcbiAgICAgIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKGBbWyR7c2VsZWN0ZWRUZXh0fV1dYCk7XG4gICAgfSBlbHNlIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKGBbYCk7XG4gIH1cblxuICBzaG9ydGN1dFJpZ2h0U3F1YXJlQnJhY2tldCgpOiB2b2lkIHtcbiAgICBsZXQgZWRpdG9yID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KT8uZWRpdG9yO1xuICAgIGlmIChlZGl0b3IgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgc2VsZWN0ZWRUZXh0ID0gZWRpdG9yLnNvbWV0aGluZ1NlbGVjdGVkKClcbiAgICAgID8gZWRpdG9yLmdldFNlbGVjdGlvbigpXG4gICAgICA6IGZhbHNlO1xuICAgIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKGBdYCk7XG4gIH1cblxuICBzaG9ydGN1dFB5Q29kZSgpOiB2b2lkIHtcbiAgICBsZXQgZWRpdG9yID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KT8uZWRpdG9yO1xuICAgIGlmIChlZGl0b3IgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgc2VsZWN0ZWRUZXh0ID0gZWRpdG9yLnNvbWV0aGluZ1NlbGVjdGVkKClcbiAgICAgID8gZWRpdG9yLmdldFNlbGVjdGlvbigpXG4gICAgICA6IGZhbHNlO1xuICAgIGlmIChzZWxlY3RlZFRleHQpIHtcbiAgICAgIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKGBcXGBcXGBcXGBweVxcbiR7c2VsZWN0ZWRUZXh0fVxcblxcYFxcYFxcYGApO1xuICAgIH0gZWxzZSBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihgXFxgYCk7XG4gIH1cblxuICBzaG9ydGN1dENvZGVGZW5jZXMoKTogdm9pZCB7XG4gICAgbGV0IGVkaXRvciA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk/LmVkaXRvcjtcbiAgICBpZiAoZWRpdG9yID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHNlbGVjdGVkVGV4dCA9IGVkaXRvci5zb21ldGhpbmdTZWxlY3RlZCgpXG4gICAgICA/IGVkaXRvci5nZXRTZWxlY3Rpb24oKVxuICAgICAgOiBmYWxzZTtcbiAgICBpZiAoc2VsZWN0ZWRUZXh0KSB7XG4gICAgICBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihgXFxgJHtzZWxlY3RlZFRleHR9XFxgYCk7XG4gICAgfSBlbHNlIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKGBcXGBgKTtcbiAgfVxuXG4gIHNob3J0Y3V0UmlnaHRDdXJseUJyYWNrZXQoKTogdm9pZCB7XG4gICAgbGV0IGVkaXRvciA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk/LmVkaXRvcjtcbiAgICBpZiAoZWRpdG9yID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHNlbGVjdGVkVGV4dCA9IGVkaXRvci5zb21ldGhpbmdTZWxlY3RlZCgpXG4gICAgICA/IGVkaXRvci5nZXRTZWxlY3Rpb24oKVxuICAgICAgOiBmYWxzZTtcbiAgICBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihgfWApO1xuICB9XG5cbiAgc2hvcnRjdXRMZWZ0Q3VybHlCcmFja2V0KCk6IHZvaWQge1xuICAgIGxldCBlZGl0b3IgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpPy5lZGl0b3I7XG4gICAgaWYgKGVkaXRvciA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBzZWxlY3RlZFRleHQgPSBlZGl0b3Iuc29tZXRoaW5nU2VsZWN0ZWQoKVxuICAgICAgPyBlZGl0b3IuZ2V0U2VsZWN0aW9uKClcbiAgICAgIDogZmFsc2U7XG4gICAgaWYgKHNlbGVjdGVkVGV4dCkge1xuICAgICAgZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oYFxceyR7c2VsZWN0ZWRUZXh0fVxcfWApO1xuICAgIH0gZWxzZSBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihgXFx7YCk7XG4gIH1cblxuICBzaG9ydGN1dFZlcnRpY2FsTGluZSgpOiB2b2lkIHtcbiAgICBsZXQgZWRpdG9yID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KT8uZWRpdG9yO1xuICAgIGlmIChlZGl0b3IgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgc2VsZWN0ZWRUZXh0ID0gZWRpdG9yLnNvbWV0aGluZ1NlbGVjdGVkKClcbiAgICAgID8gZWRpdG9yLmdldFNlbGVjdGlvbigpXG4gICAgICA6IGZhbHNlO1xuICAgIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKGB8YCk7XG4gIH1cblxuICBzaG9ydGN1dExpc3RJdGVtcygpOiB2b2lkIHtcbiAgICBsZXQgZWRpdG9yID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KT8uZWRpdG9yO1xuICAgIGlmIChlZGl0b3IgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgc2VsZWN0ZWRUZXh0ID0gdGhpcy5nZXRTZWxlY3RlZFRleHQoZWRpdG9yKTtcblxuICAgIGxldCByZXN1bHRUZXh0ID0gXCItIFwiICsgc2VsZWN0ZWRUZXh0LmNvbnRlbnQuc3BsaXQoJ1xcbicpLmpvaW4oXCJcXG4tIFwiKTtcblxuICAgIGxldCByZXN1bHRUZXh0Q2hlY2sgPSByZXN1bHRUZXh0O1xuICAgIHdoaWxlIChyZXN1bHRUZXh0Q2hlY2suc2VhcmNoKFwiLSAtIFwiKSA+PSAwKSB7XG4gICAgICByZXN1bHRUZXh0Q2hlY2sgPSByZXN1bHRUZXh0Q2hlY2sucmVwbGFjZShcIi0gLSBcIiwgXCJcdC0gXCIpO1xuICAgIH1cbiAgICB3aGlsZSAocmVzdWx0VGV4dENoZWNrLnNlYXJjaChcIi0gXHRcdFwiKSA+PSAwKSB7XG4gICAgICByZXN1bHRUZXh0Q2hlY2sgPSByZXN1bHRUZXh0Q2hlY2sucmVwbGFjZShcIi0gXHRcdFwiLCBcIlx0LSBcdFwiKTtcbiAgICB9XG4gICAgd2hpbGUgKHJlc3VsdFRleHRDaGVjay5zZWFyY2goXCItIFx0LSBcIikgPj0gMCkge1xuICAgICAgcmVzdWx0VGV4dENoZWNrID0gcmVzdWx0VGV4dENoZWNrLnJlcGxhY2UoXCItIFx0LSBcIiwgXCJcdFx0LSBcIik7XG4gICAgfVxuICAgIGVkaXRvci5yZXBsYWNlUmFuZ2UocmVzdWx0VGV4dENoZWNrLCBzZWxlY3RlZFRleHQuc3RhcnQsIHNlbGVjdGVkVGV4dC5lbmQpO1xuICB9XG5cbiAgc2hvcnRjdXRIZWFkZXIwKCk6IHZvaWQge1xuICAgIGxldCBlZGl0b3IgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpPy5lZGl0b3I7XG4gICAgaWYgKGVkaXRvciA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBzZWxlY3RlZFRleHQgPSB0aGlzLmdldFNlbGVjdGVkVGV4dChlZGl0b3IpO1xuXG4gICAgdmFyIGo7XG4gICAgbGV0IHNwbGl0dGVkU2VsZWN0ZWRUZXh0ID0gc2VsZWN0ZWRUZXh0LmNvbnRlbnQuc3BsaXQoYFxcbmApO1xuICAgIGZvciAoaiBpbiBzcGxpdHRlZFNlbGVjdGVkVGV4dCkge1xuICAgICAgd2hpbGUgKHNwbGl0dGVkU2VsZWN0ZWRUZXh0W2pdLnN1YnN0cmluZygwLDIpID09IFwiIyNcIikge1xuICAgICAgICBzcGxpdHRlZFNlbGVjdGVkVGV4dFtqXSA9IHNwbGl0dGVkU2VsZWN0ZWRUZXh0W2pdLnJlcGxhY2UoXCIjI1wiLCBcIiNcIik7XG4gICAgICB9XG4gICAgICB3aGlsZSAoc3BsaXR0ZWRTZWxlY3RlZFRleHRbal0uc3Vic3RyaW5nKDAsMikgPT0gXCIjIFwiKSB7XG4gICAgICAgIHNwbGl0dGVkU2VsZWN0ZWRUZXh0W2pdID0gc3BsaXR0ZWRTZWxlY3RlZFRleHRbal0uc3Vic3RyKDIpO1xuICAgICAgfVxuICAgICAgd2hpbGUgKHNwbGl0dGVkU2VsZWN0ZWRUZXh0W2pdLnN1YnN0cmluZygwLDIpID09IFwiPiBcIikge1xuICAgICAgICBzcGxpdHRlZFNlbGVjdGVkVGV4dFtqXSA9IHNwbGl0dGVkU2VsZWN0ZWRUZXh0W2pdLnN1YnN0cigyKTtcbiAgICAgIH1cbiAgICAgIHdoaWxlIChzcGxpdHRlZFNlbGVjdGVkVGV4dFtqXS5zdWJzdHJpbmcoMCwyKSA9PSBcIlx0XHRcIikge1xuICAgICAgICBzcGxpdHRlZFNlbGVjdGVkVGV4dFtqXSA9IHNwbGl0dGVkU2VsZWN0ZWRUZXh0W2pdLnJlcGxhY2UoXCJcdFx0XCIsIFwiXHRcIik7XG4gICAgICB9XG4gICAgICB3aGlsZSAoc3BsaXR0ZWRTZWxlY3RlZFRleHRbal0uc3Vic3RyaW5nKDAsMykgPT0gXCJcdC0gXCIpIHtcbiAgICAgICAgc3BsaXR0ZWRTZWxlY3RlZFRleHRbal0gPSBzcGxpdHRlZFNlbGVjdGVkVGV4dFtqXS5zdWJzdHIoMyk7XG4gICAgICB9XG4gICAgICB3aGlsZSAoc3BsaXR0ZWRTZWxlY3RlZFRleHRbal0uc3Vic3RyaW5nKDAsMikgPT0gXCItIFwiKSB7XG4gICAgICAgIHNwbGl0dGVkU2VsZWN0ZWRUZXh0W2pdID0gc3BsaXR0ZWRTZWxlY3RlZFRleHRbal0uc3Vic3RyKDIpO1xuICAgICAgfVxuICAgICAgdmFyIHJlX2RpZ2l0cyA9IC9eXFxkXFwuXFxzLztcbiAgICAgIHNwbGl0dGVkU2VsZWN0ZWRUZXh0W2pdID0gc3BsaXR0ZWRTZWxlY3RlZFRleHRbal0ucmVwbGFjZShyZV9kaWdpdHMsIFwiXCIpO1xuICAgIH1cblxuICAgIGVkaXRvci5yZXBsYWNlUmFuZ2Uoc3BsaXR0ZWRTZWxlY3RlZFRleHQudG9TdHJpbmcoKSwgc2VsZWN0ZWRUZXh0LnN0YXJ0LCBzZWxlY3RlZFRleHQuZW5kKTtcbiAgfVxuXG4gIHNob3J0Y3V0SGVhZGVyMSgpOiB2b2lkIHtcbiAgICB0aGlzLnNob3J0Y3V0SGVhZGVyMCgpO1xuICAgIGxldCBlZGl0b3IgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpPy5lZGl0b3I7XG4gICAgaWYgKGVkaXRvciA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBzZWxlY3RlZFRleHQgPSB0aGlzLmdldFNlbGVjdGVkVGV4dChlZGl0b3IpO1xuXG4gICAgLy92YXIgY2xlYXJUZXh0ID0gc2VsZWN0ZWRUZXh0LmNvbnRlbnQuc2hvcnRjdXRIZWFkZXIwKClcbiAgICB2YXIgcmVzdWx0VGV4dCA9IFwiIyBcIiArIHNlbGVjdGVkVGV4dC5jb250ZW50O1xuICAgIGVkaXRvci5yZXBsYWNlUmFuZ2UocmVzdWx0VGV4dCwgc2VsZWN0ZWRUZXh0LnN0YXJ0LCBzZWxlY3RlZFRleHQuZW5kKTtcbiAgfVxuXG4gIHNob3J0Y3V0SGVhZGVyMigpOiB2b2lkIHtcbiAgICB0aGlzLnNob3J0Y3V0SGVhZGVyMCgpO1xuICAgIGxldCBlZGl0b3IgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpPy5lZGl0b3I7XG4gICAgaWYgKGVkaXRvciA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBzZWxlY3RlZFRleHQgPSB0aGlzLmdldFNlbGVjdGVkVGV4dChlZGl0b3IpO1xuXG4gICAgdmFyIHJlc3VsdFRleHQgPSBcIiMjIFwiICsgc2VsZWN0ZWRUZXh0LmNvbnRlbnQ7XG4gICAgZWRpdG9yLnJlcGxhY2VSYW5nZShyZXN1bHRUZXh0LCBzZWxlY3RlZFRleHQuc3RhcnQsIHNlbGVjdGVkVGV4dC5lbmQpO1xuICB9XG5cbiAgc2hvcnRjdXRIZWFkZXIzKCk6IHZvaWQge1xuICAgIHRoaXMuc2hvcnRjdXRIZWFkZXIwKCk7XG4gICAgbGV0IGVkaXRvciA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk/LmVkaXRvcjtcbiAgICBpZiAoZWRpdG9yID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHNlbGVjdGVkVGV4dCA9IHRoaXMuZ2V0U2VsZWN0ZWRUZXh0KGVkaXRvcik7XG5cbiAgICB2YXIgcmVzdWx0VGV4dCA9IFwiIyMjIFwiICsgc2VsZWN0ZWRUZXh0LmNvbnRlbnQ7XG4gICAgZWRpdG9yLnJlcGxhY2VSYW5nZShyZXN1bHRUZXh0LCBzZWxlY3RlZFRleHQuc3RhcnQsIHNlbGVjdGVkVGV4dC5lbmQpO1xuICB9XG5cbiAgc2hvcnRjdXRIZWFkZXI0KCk6IHZvaWQge1xuICAgIHRoaXMuc2hvcnRjdXRIZWFkZXIwKCk7XG4gICAgbGV0IGVkaXRvciA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk/LmVkaXRvcjtcbiAgICBpZiAoZWRpdG9yID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHNlbGVjdGVkVGV4dCA9IHRoaXMuZ2V0U2VsZWN0ZWRUZXh0KGVkaXRvcik7XG5cbiAgICB2YXIgcmVzdWx0VGV4dCA9IFwiIyMjIyBcIiArIHNlbGVjdGVkVGV4dC5jb250ZW50O1xuICAgIGVkaXRvci5yZXBsYWNlUmFuZ2UocmVzdWx0VGV4dCwgc2VsZWN0ZWRUZXh0LnN0YXJ0LCBzZWxlY3RlZFRleHQuZW5kKTtcbiAgfVxuXG4gIHNob3J0Y3V0SGVhZGVyNSgpOiB2b2lkIHtcbiAgICB0aGlzLnNob3J0Y3V0SGVhZGVyMCgpO1xuICAgIGxldCBlZGl0b3IgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpPy5lZGl0b3I7XG4gICAgaWYgKGVkaXRvciA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBzZWxlY3RlZFRleHQgPSB0aGlzLmdldFNlbGVjdGVkVGV4dChlZGl0b3IpO1xuXG4gICAgdmFyIHJlc3VsdFRleHQgPSBcIiMjIyMjIFwiICsgc2VsZWN0ZWRUZXh0LmNvbnRlbnQ7XG4gICAgZWRpdG9yLnJlcGxhY2VSYW5nZShyZXN1bHRUZXh0LCBzZWxlY3RlZFRleHQuc3RhcnQsIHNlbGVjdGVkVGV4dC5lbmQpO1xuICB9XG5cbiAgc2hvcnRjdXRIZWFkZXI2KCk6IHZvaWQge1xuICAgIHRoaXMuc2hvcnRjdXRIZWFkZXIwKCk7XG4gICAgbGV0IGVkaXRvciA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk/LmVkaXRvcjtcbiAgICBpZiAoZWRpdG9yID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHNlbGVjdGVkVGV4dCA9IHRoaXMuZ2V0U2VsZWN0ZWRUZXh0KGVkaXRvcik7XG5cbiAgICB2YXIgcmVzdWx0VGV4dCA9IFwiIyMjIyMjIFwiICsgc2VsZWN0ZWRUZXh0LmNvbnRlbnQ7XG4gICAgZWRpdG9yLnJlcGxhY2VSYW5nZShyZXN1bHRUZXh0LCBzZWxlY3RlZFRleHQuc3RhcnQsIHNlbGVjdGVkVGV4dC5lbmQpO1xuICB9XG5cblxuXG59XG4iXSwibmFtZXMiOlsiTWFya2Rvd25WaWV3IiwiUGx1Z2luIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDbkMsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7QUFDekMsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3BGLFFBQVEsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzFHLElBQUksT0FBTyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQztBQUNGO0FBQ08sU0FBUyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNoQyxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssVUFBVSxJQUFJLENBQUMsS0FBSyxJQUFJO0FBQzdDLFFBQVEsTUFBTSxJQUFJLFNBQVMsQ0FBQyxzQkFBc0IsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsK0JBQStCLENBQUMsQ0FBQztBQUNsRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEIsSUFBSSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDM0MsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pGLENBQUM7QUF1Q0Q7QUFDTyxTQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUU7QUFDN0QsSUFBSSxTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEtBQUssWUFBWSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLFVBQVUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDaEgsSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDL0QsUUFBUSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ25HLFFBQVEsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ3RHLFFBQVEsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3RILFFBQVEsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlFLEtBQUssQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUNEO0FBQ08sU0FBUyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUMzQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDckgsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxNQUFNLEtBQUssVUFBVSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM3SixJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sVUFBVSxDQUFDLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3RFLElBQUksU0FBUyxJQUFJLENBQUMsRUFBRSxFQUFFO0FBQ3RCLFFBQVEsSUFBSSxDQUFDLEVBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0FBQ3RFLFFBQVEsT0FBTyxDQUFDLEVBQUUsSUFBSTtBQUN0QixZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3pLLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRCxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6QixnQkFBZ0IsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTTtBQUM5QyxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO0FBQ3hFLGdCQUFnQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0FBQ2pFLGdCQUFnQixLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTO0FBQ2pFLGdCQUFnQjtBQUNoQixvQkFBb0IsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRTtBQUNoSSxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUMxRyxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFO0FBQ3pGLG9CQUFvQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUU7QUFDdkYsb0JBQW9CLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDMUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxF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
