import { Versioned } from './Versioned';
import { BaseContent } from '../content/BaseContent';

export function createVersion<T extends BaseContent>(content: Versioned<T>): Versioned<T> {
  return {
    ...content,
    version: content.version + 1,
    previousVersions: [...content.previousVersions, { ...content }],
    updatedAt: new Date(),
  };
}
