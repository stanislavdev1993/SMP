import { Article } from '../content/Article';
import { Validator, ValidationResult } from './Validator';

export const articleValidator: Validator<Article> = {
  validate(data: Article): ValidationResult {
    const errors: string[] = [];
    if (!data.title) errors.push("Title is required");
    if (!data.body) errors.push("Body is required");
    return { isValid: errors.length === 0, errors };
  },
};
