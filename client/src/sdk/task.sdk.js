/**
* This is an auto generated code. This code should not be modified since the file can be overwriten
* if new genezio commands are executed.
*/

import { Remote } from "./remote.js"

export class Task {
  static remote = new Remote("http://127.0.0.1:8083/Task")

  static async getAllTasksByUser(token) {
    return Task.remote.call("Task.getAllTasksByUser", token)
  }

  static async createTask(token, title) {
    return Task.remote.call("Task.createTask", token, title)
  }

  static async updateTask(token, id, title, solved) {
    return Task.remote.call("Task.updateTask", token, id, title, solved)
  }

  static async deleteTask(token, id) {
    return Task.remote.call("Task.deleteTask", token, id)
  }

}
