import { Article } from './content/Article';
import { Versioned } from './versioning/Versioned';
import { createVersion } from './versioning/VersionControl';
import { articleValidator } from './validation/ArticleValidator';

const initialArticle: Versioned<Article> = {
  id: '1',
  createdAt: new Date(),
  updatedAt: new Date(),
  status: 'draft',
  title: 'First Article',
  body: 'This is the body of the first article',
  author: 'Author',
  tags: ['TypeScript', 'Programming'],
  version: 1,
  previousVersions: []
};

// Створення нової версії
const updatedArticle = createVersion(initialArticle);

// Валідація статті
const validationResult = articleValidator.validate(updatedArticle);

console.log('New Version:', updatedArticle);
console.log('Validation Result:', validationResult);
