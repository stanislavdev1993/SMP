import { BaseContent } from '../content/BaseContent';

export type ContentOperations<T extends BaseContent> = {
  create: (content: T) => void;
  read: (id: string) => T | null;
  update: (id: string, content: Partial<T>) => void;
  delete: (id: string) => void;
};
