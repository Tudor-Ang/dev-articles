/**
* This is an auto generated code. This code should not be modified since the file can be overwriten
* if new genezio commands are executed.
*/

import { Remote } from "./remote.js"

export class User {
  static remote = new Remote("http://127.0.0.1:8083/User")

  static async create(username, email, password) {
    return User.remote.call("User.create", username, email, password)
  }

  static async login(email, password) {
    return User.remote.call("User.login", email, password)
  }

}
