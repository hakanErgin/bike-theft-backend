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

  const db = await connectDB();

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

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers: [resolvers, customResolvers],
    context: contextCreator,
  });

  apolloServer.applyMiddleware({ app });

  const httpServer = http.createServer(app);
  apolloServer.installSubscriptionHandlers(httpServer);

  httpServer.listen({ port }, () => {
    console.log(`🚀  Server ready at http://localhost:${port}/graphql`);
  });
}

start().catch((err: any) => console.log(err));
