/**
* This is an auto generated code. This code should not be modified since the file can be overwriten
* if new genezio commands are executed.
*/

import { Remote } from "./remote.js"

export class Article {
  static remote = new Remote("https://v2uil7ooqigpkf5xcclclaaxlq0qylbh.lambda-url.eu-central-1.on.aws/")

  static async createArticle(title, content, creator) {
    return Article.remote.call("Article.createArticle", title, content, creator)
  }

  static async getArticles(user) {
    return Article.remote.call("Article.getArticles", user)
  }

  static async getArticleDetails(id) {
    return Article.remote.call("Article.getArticleDetails", id)
  }

}
