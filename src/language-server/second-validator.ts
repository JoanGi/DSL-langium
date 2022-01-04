import { ValidationAcceptor, ValidationCheck, ValidationRegistry } from 'langium';
import { SecondAstType, Model } from './generated/ast';
import { SecondServices } from './second-module';

/**
 * Map AST node types to validation checks.
 */
type SecondChecks = { [type in SecondAstType]?: ValidationCheck | ValidationCheck[] }

/**
 * Registry for validation checks.
 */
export class SecondValidationRegistry extends ValidationRegistry {
    constructor(services: SecondServices) {
        super(services);
        const validator = services.validation.SecondValidator;
        const checks: SecondChecks = {
            Model: validator.checkPersonStartsWithCapital
        };
        this.register(checks, validator);
    }
}

/**
 * Implementation of custom validations.
 */
export class SecondValidator {

    checkPersonStartsWithCapital(person: Model, accept: ValidationAcceptor): void {
    //    if (person.name) {
    //        const firstChar = person.name.substring(0, 1);
    //        if (firstChar.toUpperCase() !== firstChar) {
    //            accept('warning', 'Person name should start with a capital.', { node: person, property: 'name' });
    //        }
    //    }
    }

}
