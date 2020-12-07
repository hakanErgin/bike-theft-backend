import { MongoClient } from 'mongodb';

export async function connectDB() {
  const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE } = process.env;

  let url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}?retryWrites=true&w=majority`;

  const mongoClient = await MongoClient.connect(url, {
    useUnifiedTopology: true,
  });

  // get db instance
  const db = mongoClient.db(process.env.DB_DATABASE);

  return db;
}
