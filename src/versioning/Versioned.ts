import { BaseContent } from '../content/BaseContent';

export type Versioned<T extends BaseContent> = T & {
  version: number;
  previousVersions: T[];
};
