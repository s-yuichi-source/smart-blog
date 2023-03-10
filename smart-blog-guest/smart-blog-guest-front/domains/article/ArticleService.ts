import Article from '@/domains/article/Article';

export default interface ArticleService {
  getArticleList: () => Promise<Article[]>;
}