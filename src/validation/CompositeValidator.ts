import { Validator, ValidationResult } from './Validator';

export type CompositeValidator<T> = {
  validators: Validator<T>[];
  validate(data: T): ValidationResult;
};

export function createCompositeValidator<T>(...validators: Validator<T>[]): CompositeValidator<T> {
  return {
    validators,
    validate(data: T): ValidationResult {
      const errors: string[] = [];
      let isValid = true;
      for (const validator of this.validators) {
        const result = validator.validate(data);
        if (!result.isValid) {
          isValid = false;
          errors.push(...(result.errors || []));
        }
      }
      return { isValid, errors };
    }
  };
}
