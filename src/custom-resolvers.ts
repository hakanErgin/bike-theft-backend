import { GraphQLResolveInfo } from 'graphql';
import { IResolvers } from 'apollo-server-express';
import { GraphQLContext } from './custom-context';
import verify from './auth-verifier';

export const customResolvers: IResolvers = {
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
        ).catch(console.error);
        if (!userInDb) {
          console.log('attempting to create user');
          await context.graphback.User.create(
            { google_id, google_name },
            context,
            info
          )
            .then((res) => console.log('user created'))
            .catch(console.error);
        }
        return userVerifiedByToken;
      } else return Error('user token not verified ');
    },
    createTheft: async (
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
        ).catch(console.error);
        const newTheft =
          userInDb &&
          (await context.graphback.Theft.create(
            {
              ...args.input,
              userId: userInDb._id,
            },
            context,
            info
          ));
        return newTheft;
      } else return Error('user token not verified ');
    },
    deleteTheft: async (
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
        ).catch(console.error);
        if (userInDb) {
          const userIdInDB = userInDb._id?.toString();
          const userIdInArgs = args.theftUserId?.toString();
          if (userIdInDB === userIdInArgs) {
            const deletedTheftResult = await context.graphback.Theft.delete(
              {
                _id: args.theftId,
                userId: args.theftUserId,
              },
              context,
              info
            ).catch(console.error);
            console.log({ deletedTheftResult });
            return deletedTheftResult;
          } else return Error('You dont have rights for that');
        } else return Error('User doesnt exist');
      } else return Error('user token not verified ');
    },
    createFeedback: async (
      parent: any,
      args: any,
      context: GraphQLContext,
      info: GraphQLResolveInfo
    ) => {
      return await context.graphback.Feedback.create(
        {
          ...args,
          created_at: new Date(),
        },
        context,
        info
      );
    },
  },
  Query: {
    getUsersReportedThefts: async (
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
        ).catch(console.error);
        if (userInDb) {
          const filter = {
            userId: { eq: userInDb._id },
          };
          const usersReports = await context.graphback.Theft.findBy(
            { filter },
            context,
            info
          );
          return usersReports.items;
        } else return;
      } else return;
    },
  },
};
