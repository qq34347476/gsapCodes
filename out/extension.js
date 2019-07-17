"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const translateApi_1 = require("./translateApi");
const languages_1 = require("./languages");
const utils_1 = require("./utils");
class TranslateProgress {
    constructor() {
        this.location = vscode.ProgressLocation.Window;
    }
}
const RECENTLY_USED = '(recently used)';
const COMMAND_TRANSLATE = 'translate.action.translateText';
function activate(context) {
    let disposable = vscode.commands.registerCommand(COMMAND_TRANSLATE, function () {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const editor = vscode.window.activeTextEditor;
                const quickPickData = languages_1.LRUList()
                    .map(r => ({
                    name: r.name.includes(RECENTLY_USED) ? r.name : `${r.name} ${RECENTLY_USED}`,
                    value: r.value,
                }))
                    .concat(languages_1.getLanguages());
                const languageName = yield vscode.window.showQuickPick(quickPickData.map(l => l.name));
                const selectedLanguage = quickPickData.find(t => t.name === languageName);
                if (selectedLanguage && editor) {
                    const { document, selections } = editor;
                    languages_1.LRUList(selectedLanguage);
                    const results = yield vscode.window.withProgress(new TranslateProgress(), (progress) => {
                        return Promise.all(selections.map(selection => {
                            const selectionText = utils_1.getSelectedText(document, selection);
                            return translateApi_1.default(selectionText, selectedLanguage.value).then(({ translation }) => {
                                progress.report({ message: 'translate' });
                                return { selection, selectionText, translation };
                            });
                        }));
                    });
                    editor.edit(builder => {
                        results.forEach(({ translation, selectionText, selection }) => {
                            if (!!translation) {
                                builder.replace(selection, translation);
                                if (selectionText === translation) {
                                    vscode.window.showWarningMessage(`[${selectionText}] translate equal`);
                                }
                            }
                            else {
                                vscode.window.showWarningMessage(`[${selectionText}] translate fail`);
                            }
                        });
                    });
                    vscode.window.showInformationMessage('translate done');
                }
            }
            catch (error) {
                vscode.window.showErrorMessage(error.message);
            }
        });
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map