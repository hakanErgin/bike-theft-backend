import { GraphbackContext, GraphbackCRUDService } from 'graphback';
import { User, Theft, Feedback } from './generated-types';

/**
 * Overriding context to add GraphQL-Code-Generator typings to Graphback services
 */
export interface GraphQLContext extends GraphbackContext {
  graphback: {
    User: GraphbackCRUDService<User>;
    Theft: GraphbackCRUDService<Theft>;
    Feedback: GraphbackCRUDService<Feedback>;
  };
}
