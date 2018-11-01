import User from '../models/user';

const userResolver = {
  Mutation: {
    async createUser(root, { input }) {
      const newUser = await User.create(input);
      return newUser;
    },

    async updateUser(root, {
      _id,
      input,
    }) {
      const updatedUser = await User.findOneAndUpdate({
        _id,
      }, input, {
        new: true,
      });
      return updatedUser;
    },
  },

  Query: {
    async fetchUsers() {
      const users = await User.find();
      return users;
    },
  },
};

export default userResolver;
