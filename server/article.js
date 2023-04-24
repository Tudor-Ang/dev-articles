import { mongoose } from "mongoose"
import { MONGO_DB_URI } from "./helper"
import { TaskModel } from "./models/task"


export class Article {
  constructor() {
    this.#connect();
  }

  #connect() {
    mongoose.connect(MONGO_DB_URI);
  }


  async createTask(token, title) {
    console.log(`Create task request received for user with ${token} with title ${title}`)

    const task = await TaskModel.create({
      title: title,
      token: token
    });

    return {
      success: true,
      task: { title: title, _id: task._id.toString() }
    };
  }



}
