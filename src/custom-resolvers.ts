import { GraphQLResolveInfo } from 'graphql';
import { IResolvers } from 'apollo-server-express';
import { GraphQLContext } from './custom-context';
import verify from './auth-verifier';

export const userResolvers: IResolvers = {
  Mutation: {
    createUserOrSignIn: async (
      parent: any,
      args: any,
      context: GraphQLContext,
      info: GraphQLResolveInfo
    ) => {
      const userVerifiedByToken = await verify(args.id_token).catch(
        console.error
      );
      if (userVerifiedByToken) {
        const { google_id, google_name } = userVerifiedByToken;
        const userInDb = await context.graphback.User.findOne(
          { google_id },
          context,
          info
        ).catch((err) => console.log({ err }));
        console.log({ userInDb });
        if (!userInDb) {
          console.log('attempting to create user');
          await context.graphback.User.create(
            { google_id, google_name },
            context,
            info
          ).then((res) => console.log('result of create user', { res }));
        }
      }
      return userVerifiedByToken;
    },
  },
};
