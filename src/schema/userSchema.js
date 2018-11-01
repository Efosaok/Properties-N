import { makeExecutableSchema } from 'graphql-tools';
import userResolver from '../resolvers/userResolver';

const typeDefinition = `
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    imageUrl: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    fetchUsers: [User]
  }

  input userCredentials {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    imageUrl: String
  }

  input updateCredentials {
    firstName: String
    lastName: String
    email: String
    password: String
    imageUrl: String
  }

  type Mutation {
    createUser(input: userCredentials): User
    updateUser(_id: ID!, input: updateCredentials): User
  }
`;

const userSchema = makeExecutableSchema({
  typeDefs: typeDefinition,
  resolvers: userResolver,
});

export default userSchema;
