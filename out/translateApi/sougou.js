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
const utils_1 = require("../utils");
const md5 = require('md5');
const rp = require('request-promise').defaults({
    simple: false,
    resolveWithFullResponse: true,
    timeout: 2000,
});
function uuid() {
    let t, e, n = '';
    for (t = 0; t < 32; t++) {
        (e = (16 * Math.random()) | 0),
            (8 !== t && 12 !== t && 16 !== t && 20 !== t) || (n += '-'),
            (n += (12 === t ? 4 : 16 === t ? (3 & e) | 8 : e).toString(16));
    }
    return n;
}
function translate(word, toLanguage = 'zh-CHS') {
    return __awaiter(this, void 0, void 0, function* () {
        const from = 'auto';
        const s = md5('' + from + toLanguage + word + '41ee21a5ab5a13f72687a270816d1bfd');
        const payload = {
            from,
            to: toLanguage,
            client: 'pc',
            fr: 'browser_pc',
            text: word,
            useDetect: 'on',
            useDetectResult: 'on',
            needQc: 1,
            uuid: uuid(),
            oxford: 'on',
            pid: 'sogou-dict-vr',
            isReturnSugg: 'on',
            s,
        };
        try {
            const res = yield rp({
                method: 'POST',
                uri: 'https://fanyi.sogou.com/reventondc/translateV1',
                form: payload,
                simple: false,
                resolveWithFullResponse: true,
            });
            const body = JSON.parse(res.body);
            console.log(body.data.translate.dit);
            return {
                translation: body.data.translate.dit,
            };
        }
        catch (err) {
            console.log(err);
            throw new Error(utils_1.TRANSLATE_ERROR);
        }
    });
}
exports.default = translate;
//# sourceMappingURL=sougou.js.map