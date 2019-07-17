"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const google_1 = require("./google");
const sougou_1 = require("./sougou");
const vscode = require("vscode");
var TranslateChannel;
(function (TranslateChannel) {
    TranslateChannel["google"] = "google";
    TranslateChannel["sougou"] = "sougou";
})(TranslateChannel = exports.TranslateChannel || (exports.TranslateChannel = {}));
exports.getChannel = () => vscode.workspace.getConfiguration('translate').get('muti-channel') ||
    TranslateChannel.google;
exports.default = (word, toLanguage) => ({
    [TranslateChannel.google]: google_1.default,
    [TranslateChannel.sougou]: sougou_1.default,
}[exports.getChannel()](word, toLanguage));
//# sourceMappingURL=index.js.map