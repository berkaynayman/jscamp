import UserService from "../services/userService.js"
import User from "../models/user.js"
import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";

console.log("user component yüklendi");

let logger1 = new MongoLogger
let userService = new UserService(logger1)

let user1 = new User(1,"Berkay","Nayman","Ankara")
let user2 = new User(2,"Temel","Dursun","Trabzon")

userService.add(user1)
userService.add(user2)

console.log(userService.list());
console.log(userService.getById(2));


userService.add()
userService.getById(1)
userService.list()