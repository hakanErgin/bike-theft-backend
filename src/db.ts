import { MongoClient } from 'mongodb';
import getSecrets from './googleSecret';

type DBSecrets = {
  DB_USER: string;
  DB_PASSWORD: string;
  DB_HOST: string;
  DB_DATABASE: string;
};

export async function connectDB() {
  const DBsecrets: DBSecrets = await getSecrets();

  const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE } = DBsecrets;

  let url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}?retryWrites=true&w=majority`;

  const mongoClient = await MongoClient.connect(url, {
    useUnifiedTopology: true,
  });

  // get db instance
  const db = mongoClient.db(DB_DATABASE);

  return db;
}
