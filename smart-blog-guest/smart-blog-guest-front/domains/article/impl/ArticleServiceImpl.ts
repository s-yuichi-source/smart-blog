import { axiosModule } from '@/infras/axios/AxiosFactory';
import ArticleService from "@/domains/article/ArticleService";
import Article from "@/domains/article/Article";

export default class ArticleServiceImpl implements ArticleService {
  async getArticleList() : Promise<Article[]> {
    return (await axiosModule.get('/article/list')).data;
  }
}