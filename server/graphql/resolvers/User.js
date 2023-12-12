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
};
