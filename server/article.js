import { mongoose } from "mongoose"
import { MONGO_DB_URI } from "./helper"
import { TaskModel } from "./models/task"
import { Article } from './models/article'

/**
 * The Task server class that will be deployed on the genezio infrastructure.
 */
export class Task {
  constructor() {
    this.#connect();
  }

  /**
   * Private method used to connect to the DB.
   */
  #connect() {
    mongoose.connect(MONGO_DB_URI);
  }


  async getAllTasksByUser(token) {
    console.log(`Get all tasks by user request received with token ${token}`)

    const tasks = await TaskModel.find({ token: token });

    if (tasks.length === 0) {
      await TaskModel.create({
        token: token,
        title: "Check the other example projects",
        url: "https://github.com/Genez-io/genezio-examples"
      })

      await TaskModel.create({
        token: token,
        title: "Check our documentation",
        url: "https://docs.genez.io/genezio-documentation/"
      })

      await TaskModel.create({
        token: token,
        title: "Watch our Youtube tutorials",
        url: "https://www.youtube.com/@genezio7235"
      })

      await TaskModel.create({
        token: token,
        title: "Read our technical articles on genezio blog",
        url: "https://genez.io/blog/"
      })

      const initTasks = await TaskModel.find({ token: token });

      return { success: true, tasks: initTasks };
    }

    return { success: true, tasks: tasks };
  }

  async createArticle(token, user, title, content) {
    const activeSession = await reqAuth(token);
    if (!activeSession.success) {
      return { success: false, msg: activeSession.msg };
    }

    const task = await Article.create({
      // title: title,
      // token: token
    });

    return {
      success: true,
      // article: { title: title, _id: task._id.toString() }
    };
  }

  async updateTask(token, id, title, solved) {
    console.log(`Update task request received with id ${id} with title ${title} and solved value ${solved}`)

    await TaskModel.updateOne(
      { _id: id, token: token },
      {
        title: title,
        solved: solved
      }
    );

    return { success: true };
  }

  async deleteTask(token, id) {
    console.log(`Delete task with id ${id} request received`)

    await TaskModel.deleteOne({ token: token, _id: id });

    return { success: true };
  }
}
