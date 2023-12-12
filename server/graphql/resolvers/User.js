const VideoModel = require("../../models/VideosSchema");
const UserModel = require("../../models/UserSchema");

module.exports = {
  Query: {
    getUsers: async () => {
      try {
        let users = await UserModel.find();

        return users;
      } catch (error) {
        console.log(error);
      }
    },
    getUserById: async (_, { userId }) => {
      try {
        const user = await UserModel.findById(userId).populate("videos");
        return user;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    createUser: async (_, { body }) => {
      const { username, email } = body;
      try {
        const newUser = new UserModel({
          username,
          email,
        });

        await newUser.save();

        return newUser;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
