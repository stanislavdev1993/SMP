import { Product } from '../content/Product';
import { Validator, ValidationResult } from './Validator';

export const productValidator: Validator<Product> = {
  validate(data: Product): ValidationResult {
    const errors: string[] = [];
    if (!data.name) errors.push("Name is required");
    if (data.price <= 0) errors.push("Price must be greater than 0");
    return { isValid: errors.length === 0, errors };
  },
};
