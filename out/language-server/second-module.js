"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSecondServices = exports.SecondModule = void 0;
const langium_1 = require("langium");
const module_1 = require("./generated/module");
const second_validator_1 = require("./second-validator");
/**
 * Dependency injection module that overrides Langium default services and contributes the
 * declared custom services. The Langium defaults can be partially specified to override only
 * selected services, while the custom services must be fully specified.
 */
exports.SecondModule = {
    validation: {
        ValidationRegistry: (injector) => new second_validator_1.SecondValidationRegistry(injector),
        SecondValidator: () => new second_validator_1.SecondValidator()
    }
};
/**
 * Inject the full set of language services by merging three modules:
 *  - Langium default services
 *  - Services generated by langium-cli
 *  - Services specified in this file
 */
function createSecondServices(context) {
    return (0, langium_1.inject)((0, langium_1.createDefaultModule)(context), module_1.SecondGeneratedModule, exports.SecondModule);
}
exports.createSecondServices = createSecondServices;
//# sourceMappingURL=second-module.js.map