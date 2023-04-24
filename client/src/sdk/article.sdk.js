/**
* This is an auto generated code. This code should not be modified since the file can be overwriten
* if new genezio commands are executed.
*/

import { Remote } from "./remote.js"

export class Article {
  static remote = new Remote("http://127.0.0.1:8083/Article")

  static async createTask(token, title) {
    return Article.remote.call("Article.createTask", token, title)
  }

}
