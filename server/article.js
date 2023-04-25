import { mongoose } from "mongoose"
import { MONGO_DB_URI } from "./helper"
import { ArticleModel } from "./models/article"

export class Article {
  constructor() {
    this.#connect();
  }

  #connect() {
    mongoose.connect(MONGO_DB_URI);
  }

  async createArticle(title, content, creator) {
    const article = await ArticleModel.create({
      title: title,
      content: content,
      creator: creator,
    });

    return {
      success: true,
      article: { title: title, content: content, creator: creator }
    };
  }

  async getArticles(user) {
    const article = await ArticleModel.find(user ? { 'creator.username': user } : {});
    if (!article) {
      return { success: false, msg: 'article not found' };
    }
    return { success: true, articles: article };
  }

  async getArticleDetails(id) {
    const article = await ArticleModel.findById(id);
    if (!article) {
      return { success: false, msg: 'article not found' };
    }
    return { success: true, articles: article };
  }


}
