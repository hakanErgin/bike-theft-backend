import { QueryFilter } from 'graphback';
import { GraphQLResolveInfo } from 'graphql';
import { IResolvers } from 'apollo-server-express';
import { UserFilter } from './generated-types';
import { GraphQLContext } from './custom-context';
import { GraphbackContext, GraphbackCRUDService } from 'graphback';
import { User } from './generated-types';
import verify from './auth-verifier';

export const userResolvers: IResolvers = {
  Mutation: {
    createUserOrSignIn: async (
      parent: any,
      args: any,
      context: GraphQLContext,
      info: GraphQLResolveInfo
    ) => {
      console.log(await verify());

      return { google_id: 2, id_token: 2 };
      // const results = await context.graphback.User.findBy(
      //   { filter },
      //   context,
      //   info
      // );
      // return results.items;
    },
  },
};
