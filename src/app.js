import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import logger from 'morgan';
import expressGraphql from 'express-graphql';
import userSchema from './schema/userSchema';
// expose environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
mongoose.connect(process.env.DB_URL);

const root = {
  message: () => 'Hello World!',
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('combined'));

app.use('/graphql', expressGraphql({
  schema: userSchema,
  rootValue: root,
  graphiql: true,
}));

app.listen(port, () => console.log(`app running on port ${port}`));
