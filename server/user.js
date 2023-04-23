import mongoose from "mongoose";
import bcrypt from "bcryptjs";
// import Jwt from "jsonwebtoken";
import { UserModel } from "./models/user";
// import ActiveSession from "./models/activeSession";
import { MONGO_DB_URI } from "./helper"; // secret, smtpConf
// import reqAuth from "./middleware/reqAuth";

export class User {
  constructor() {
    this.#connect();
  }

  // connect mongoose to mongodb
  #connect() {
    mongoose.set("strictQuery", false);
    try {
      mongoose.connect(MONGO_DB_URI);
    } catch (err) {
      console.log(err);
    }
  }

  // create a new user
  // change gender, phoneNumber, city and country to have default value undefined after GNZ-321 is resolved
  async create(
    username,
    email,
    password,
  ) {
    // if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    //   return { success: false, msg: "wrong email format" };
    // }
    // if (password.length < 8) {
    //   return { success: false, msg: "password is too short" };
    // }

    const user = await UserModel.findOne({ email: email });
    if (user) {
      return { success: false, msg: "Email already exists" };
    }

    const promise = new Promise((resolve, reject) => {
      bcrypt.genSalt(10, async function (err, salt) {
        if (err) {
          reject({ success: false, msg: "Error at genSalt", error: err });
        } else {
          bcrypt.hash(password, salt, async function (err, hash) {
            if (err) {
              reject({ success: false, msg: "Error at hash", error: err });
            } else {
              var err,
                newUser = await UserModel.create({
                  username: username,
                  email: email,
                  password: hash,
                });
              if (err) {
                reject({
                  success: false,
                  msg: "Error at database",
                  error: err,
                });
              } else {
                var userId = newUser._id.toString();
                resolve({
                  success: true,
                  msg: "The user was succesfully registered",
                  userId: userId,
                });
              }
            }
          });
        }
      });
    });
    return promise;
  }

  // login
  // async login(email, password) {
  //   const user = await UserModel.findOne({ email: email });
  //   if (!user) {
  //     return { success: false, msg: "Wrong credentials" };
  //   }
  //   const promise = new Promise((resolve, reject) => {
  //     bcrypt.compare(password, user.password, async function (err, res) {
  //       if (err) {
  //         reject({ success: false, msg: "Error at compare", error: err });
  //       } else {
  //         if (res) {
  //           const token = Jwt.sign(user.toJSON(), secret, {
  //             expiresIn: 86400, // 1 week
  //           });
  //           await ActiveSession.deleteMany({ userId: user._id });
  //           await ActiveSession.create({ token: token, userId: user._id });
  //           user.password = null;
  //           resolve({ success: true, user: user, token: token });
  //         } else {
  //           resolve({ success: false, msg: "incorrect user or password" });
  //         }
  //       }
  //     });
  //   });
  //   return promise;
  // }

  // get a user by his token
  // async getUserByToken(token) {
  //   const activeSession = await reqAuth(token);
  //   if (!activeSession.success) {
  //     return { success: false, msg: activeSession.msg };
  //   }

  //   const user = await UserModel.findById(activeSession.userId);

  //   if (!user) {
  //     return { success: false, msg: "user not logged in or not found" };
  //   }
  //   return { success: true, user: user };
  // }

  // logout
  // async logout(token) {
  //   try {
  //     await ActiveSession.deleteMany({ token: token });
  //     return { success: true };
  //   } catch (err) {
  //     return { success: false, msg: "error at logout", error: err };
  //   }
  // }

}