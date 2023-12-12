const User = require("../../models/UswerSchema");

module.exports = {
  Query: {
    getUsers: async () => {
      try {
        let users = await User.find();
        console.log(users[0].id);
        return users;
      } catch (error) {
        console.log(error);
      }
    },
    getUserById: async (_, { userId }) => {
      try {
        let user = await User.findById(userId).populate({
          path: "videos",
        });
        return user;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
