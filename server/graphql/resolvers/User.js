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

    updateUser: async (_, { userId, updateInput }) => {
      try {
        const user = await UserModel.findById(userId);

        if (!user) {
          throw new Error("user not found.");
        }

        if (updateInput.username) {
          user.username = updateInput.username;
        }
        if (updateInput.email) {
          user.email = updateInput.email;
        }

        await user.save();

        return user;
      } catch (error) {
        console.error(error);
        throw new Error("user dont Update.");
      }
    },
    deleteUser: async (_, { userId }) => {
      try {
        const deletedUser = await UserModel.findByIdAndDelete(userId);
      
        if (!deletedUser) {
          throw new Error("User Not Found.");
        }

        return deletedUser;
      } catch (error) {
        console.error(error);
        throw new Error("User dont deleted.");
      }
    },
  },
};
