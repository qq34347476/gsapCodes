"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
exports.TRANSLATE_ERROR = 'Translate failed, please check your network or change channel';
function getSelectedText(document, selection) {
    const charRange = new vscode.Range(selection.start.line, selection.start.character, selection.end.line, selection.end.character);
    return document.getText(charRange);
}
exports.getSelectedText = getSelectedText;
//# sourceMappingURL=utils.js.map