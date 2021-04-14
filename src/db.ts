import { MongoClient } from 'mongodb';

export async function connectDB(
  DB_USER: string,
  DB_PASSWORD: string,
  DB_HOST: string,
  DB_DATABASE: string
) {
  let url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}?retryWrites=true&w=majority`;

  const mongoClient = await MongoClient.connect(url, {
    useUnifiedTopology: true,
  });

  // get db instance
  const db = mongoClient.db(DB_DATABASE);

  return db;
}
