"use strict";
/******************************************************************************
 * This file was generated by langium-cli 0.2.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecondGeneratedModule = exports.languageMetaData = void 0;
const ast_1 = require("./ast");
const grammar_1 = require("./grammar");
exports.languageMetaData = {
    languageId: 'second',
    fileExtensions: ['.second']
};
exports.SecondGeneratedModule = {
    Grammar: () => (0, grammar_1.grammar)(),
    AstReflection: () => new ast_1.SecondAstReflection(),
    LanguageMetaData: () => exports.languageMetaData,
    parser: {}
};
//# sourceMappingURL=module.js.map