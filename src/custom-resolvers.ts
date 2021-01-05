import { QueryFilter } from 'graphback';
import { GraphQLResolveInfo } from 'graphql';
import { IResolvers } from 'apollo-server-express';
import { UserFilter } from './generated-types';
import { GraphQLContext } from './custom-context';
import { GraphbackContext, GraphbackCRUDService } from 'graphback';
import { User } from './generated-types';

export const userResolvers: IResolvers = {
  Mutation: {
    createUser: async (
      parent: any,
      args: any,
      context: GraphQLContext,
      info: GraphQLResolveInfo
    ) => {
      // const filter: QueryFilter<UserFilter> = {
      //   title: {
      //     startsWith: '[DRAFT]',
      //   },
      // };
      // const results = await context.graphback.User.findBy(
      //   { filter },
      //   context,
      //   info
      // );
      // return results.items;
    },
  },
};
