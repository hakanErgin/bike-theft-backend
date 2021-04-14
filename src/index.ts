require('dotenv').config();
import { ApolloServer } from 'apollo-server-express';
import { buildGraphbackAPI } from 'graphback';
import { createMongoDbProvider } from '@graphback/runtime-mongo';
import cors from 'cors';
import express from 'express';
import http from 'http';
import { loadConfigSync } from 'graphql-config';
import { connectDB } from './db';
import { customResolvers } from './custom-resolvers';
import getSecrets from './googleSecret';
const port = process.env.PORT;

async function start() {
  const app = express();

  app.use(cors());

  const graphbackExtension = 'graphback';
  const config = loadConfigSync({
    extensions: [
      () => ({
        name: graphbackExtension,
      }),
    ],
  });

  const projectConfig = config.getDefault();
  const graphbackConfig = projectConfig.extension(graphbackExtension);

  const modelDefs = projectConfig.loadSchemaSync(graphbackConfig.model);
  const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_DATABASE,
    CLIENT_ID,
    JWT_SECRET,
  } = await getSecrets();
  const db = await connectDB(DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE);

  const { typeDefs, resolvers, contextCreator } = buildGraphbackAPI(modelDefs, {
    dataProviderCreator: createMongoDbProvider(db),
    crud: {
      create: false,
      update: false,
      delete: false,
      subCreate: false,
      subDelete: false,
      subUpdate: false,
    },
  });

  function buildContext({ req, res }: any) {
    const graphBackContext = contextCreator();
    const context = {
      req,
      res,
      ...graphBackContext,
      secrets: { CLIENT_ID, JWT_SECRET },
    };
    return context;
  }
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers: [resolvers, customResolvers],
    context: buildContext,
  });

  apolloServer.applyMiddleware({ app });

  const httpServer = http.createServer(app);
  apolloServer.installSubscriptionHandlers(httpServer);

  httpServer.listen({ port }, () => {
    console.log(`🚀  Server ready at http://localhost:${port}/graphql`);
  });
}

start().catch((err: any) => console.log(err));
