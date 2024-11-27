import { BaseContent } from '../content/BaseContent';
import { Role } from './Role';
import { Permission } from './Permission';

export type AccessControl<T extends BaseContent> = {
  role: Role;
  permissions: Record<Role, Permission>;
  canAccess: (role: Role, operation: keyof Permission, content: T) => boolean;
};
