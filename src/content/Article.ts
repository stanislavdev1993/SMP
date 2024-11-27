import { BaseContent } from './BaseContent';

export interface Article extends BaseContent {
  title: string;
  body: string;
  author: string;
  tags: string[];
}
