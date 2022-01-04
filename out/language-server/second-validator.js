"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecondValidator = exports.SecondValidationRegistry = void 0;
const langium_1 = require("langium");
/**
 * Registry for validation checks.
 */
class SecondValidationRegistry extends langium_1.ValidationRegistry {
    constructor(services) {
        super(services);
        const validator = services.validation.SecondValidator;
        const checks = {
            Model: validator.checkPersonStartsWithCapital
        };
        this.register(checks, validator);
    }
}
exports.SecondValidationRegistry = SecondValidationRegistry;
/**
 * Implementation of custom validations.
 */
class SecondValidator {
    checkPersonStartsWithCapital(person, accept) {
        //    if (person.name) {
        //        const firstChar = person.name.substring(0, 1);
        //        if (firstChar.toUpperCase() !== firstChar) {
        //            accept('warning', 'Person name should start with a capital.', { node: person, property: 'name' });
        //        }
        //    }
    }
}
exports.SecondValidator = SecondValidator;
//# sourceMappingURL=second-validator.js.map