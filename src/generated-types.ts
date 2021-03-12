/* eslint-disable */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  GraphbackDateTime: Date;
  GraphbackObjectID: string;
};

export type Bike = {
  __typename?: 'Bike';
  type: Scalars['String'];
  brand: Scalars['String'];
  color: Scalars['String'];
  year?: Maybe<Scalars['String']>;
  frame_size?: Maybe<Scalars['String']>;
  wheel_size?: Maybe<Scalars['String']>;
  photos: Array<Maybe<Scalars['String']>>;
  ebike: Scalars['Boolean'];
};

export type CreateBikeInput = {
  type: Scalars['String'];
  brand: Scalars['String'];
  color: Scalars['String'];
  year?: Maybe<Scalars['String']>;
  frame_size?: Maybe<Scalars['String']>;
  wheel_size?: Maybe<Scalars['String']>;
  photos: Array<Maybe<Scalars['String']>>;
  ebike: Scalars['Boolean'];
};

export type CreateDateTimeInput = {
  date: Scalars['GraphbackDateTime'];
  time?: Maybe<Scalars['String']>;
};

export type CreateFeedbackInput = {
  _id?: Maybe<Scalars['GraphbackObjectID']>;
  created_at: Scalars['GraphbackDateTime'];
  type: Scalars['String'];
  description: Scalars['String'];
};

export type CreateRegionInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  latitudeDelta?: Maybe<Scalars['Float']>;
  longitudeDelta?: Maybe<Scalars['Float']>;
};

export type CreateTheftInput = {
  _id?: Maybe<Scalars['GraphbackObjectID']>;
  region: CreateRegionInput;
  bike: CreateBikeInput;
  comments?: Maybe<Scalars['String']>;
  date_time: CreateDateTimeInput;
  created_at: Scalars['GraphbackDateTime'];
  userId?: Maybe<Scalars['GraphbackObjectID']>;
};

export type CreateUserInput = {
  _id?: Maybe<Scalars['GraphbackObjectID']>;
  google_id: Scalars['String'];
  google_name: Scalars['String'];
};

export type DateTime = {
  __typename?: 'DateTime';
  date: Scalars['GraphbackDateTime'];
  time?: Maybe<Scalars['String']>;
};

/** @model(find:false, findOne:false) */
export type Feedback = {
  __typename?: 'Feedback';
  _id?: Maybe<Scalars['GraphbackObjectID']>;
  created_at: Scalars['GraphbackDateTime'];
  type: Scalars['String'];
  description: Scalars['String'];
};

export type FeedbackSubscriptionFilter = {
  and?: Maybe<Array<FeedbackSubscriptionFilter>>;
  or?: Maybe<Array<FeedbackSubscriptionFilter>>;
  not?: Maybe<FeedbackSubscriptionFilter>;
  _id?: Maybe<GraphbackObjectIdInput>;
  created_at?: Maybe<GraphbackDateTimeInput>;
  type?: Maybe<StringInput>;
  description?: Maybe<StringInput>;
};


export type GraphbackDateTimeInput = {
  ne?: Maybe<Scalars['GraphbackDateTime']>;
  eq?: Maybe<Scalars['GraphbackDateTime']>;
  le?: Maybe<Scalars['GraphbackDateTime']>;
  lt?: Maybe<Scalars['GraphbackDateTime']>;
  ge?: Maybe<Scalars['GraphbackDateTime']>;
  gt?: Maybe<Scalars['GraphbackDateTime']>;
  in?: Maybe<Array<Scalars['GraphbackDateTime']>>;
  between?: Maybe<Array<Scalars['GraphbackDateTime']>>;
};


export type GraphbackObjectIdInput = {
  ne?: Maybe<Scalars['GraphbackObjectID']>;
  eq?: Maybe<Scalars['GraphbackObjectID']>;
  le?: Maybe<Scalars['GraphbackObjectID']>;
  lt?: Maybe<Scalars['GraphbackObjectID']>;
  ge?: Maybe<Scalars['GraphbackObjectID']>;
  gt?: Maybe<Scalars['GraphbackObjectID']>;
  in?: Maybe<Array<Scalars['GraphbackObjectID']>>;
  between?: Maybe<Array<Scalars['GraphbackObjectID']>>;
};

export type MutateBikeInput = {
  type?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
  frame_size?: Maybe<Scalars['String']>;
  wheel_size?: Maybe<Scalars['String']>;
  photos?: Maybe<Array<Maybe<Scalars['String']>>>;
  ebike?: Maybe<Scalars['Boolean']>;
};

export type MutateDateTimeInput = {
  date?: Maybe<Scalars['GraphbackDateTime']>;
  time?: Maybe<Scalars['String']>;
};

export type MutateFeedbackInput = {
  _id?: Maybe<Scalars['GraphbackObjectID']>;
  created_at?: Maybe<Scalars['GraphbackDateTime']>;
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type MutateRegionInput = {
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  latitudeDelta?: Maybe<Scalars['Float']>;
  longitudeDelta?: Maybe<Scalars['Float']>;
};

export type MutateTheftInput = {
  _id?: Maybe<Scalars['GraphbackObjectID']>;
  region?: Maybe<MutateRegionInput>;
  bike?: Maybe<MutateBikeInput>;
  comments?: Maybe<Scalars['String']>;
  date_time?: Maybe<MutateDateTimeInput>;
  created_at?: Maybe<Scalars['GraphbackDateTime']>;
  userId?: Maybe<Scalars['GraphbackObjectID']>;
};

export type MutateUserInput = {
  _id?: Maybe<Scalars['GraphbackObjectID']>;
  google_id?: Maybe<Scalars['String']>;
  google_name?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUserOrSignIn?: Maybe<User>;
  createTheft?: Maybe<Theft>;
  deleteTheft?: Maybe<Theft>;
  createFeedback?: Maybe<Feedback>;
  updateTheft?: Maybe<Theft>;
  updateFeedback?: Maybe<Feedback>;
  deleteFeedback?: Maybe<Feedback>;
  createUser?: Maybe<User>;
  updateUser?: Maybe<User>;
  deleteUser?: Maybe<User>;
};


export type MutationCreateUserOrSignInArgs = {
  id_token: Scalars['String'];
};


export type MutationCreateTheftArgs = {
  input: CreateTheftInput;
};


export type MutationDeleteTheftArgs = {
  input: MutateTheftInput;
};


export type MutationCreateFeedbackArgs = {
  input: CreateFeedbackInput;
};


export type MutationUpdateTheftArgs = {
  input: MutateTheftInput;
};


export type MutationUpdateFeedbackArgs = {
  input: MutateFeedbackInput;
};


export type MutationDeleteFeedbackArgs = {
  input: MutateFeedbackInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationUpdateUserArgs = {
  input: MutateUserInput;
};


export type MutationDeleteUserArgs = {
  input: MutateUserInput;
};

export type OrderByInput = {
  field: Scalars['String'];
  order?: Maybe<SortDirectionEnum>;
};

export type PageRequest = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  getUsersReportedThefts?: Maybe<Array<Maybe<Theft>>>;
  getTheft?: Maybe<Theft>;
  findThefts: TheftResultList;
};


export type QueryGetUsersReportedTheftsArgs = {
  id_token: Scalars['String'];
};


export type QueryGetTheftArgs = {
  id: Scalars['GraphbackObjectID'];
};


export type QueryFindTheftsArgs = {
  filter?: Maybe<TheftFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
};

export type Region = {
  __typename?: 'Region';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  latitudeDelta?: Maybe<Scalars['Float']>;
  longitudeDelta?: Maybe<Scalars['Float']>;
};

export enum SortDirectionEnum {
  Desc = 'DESC',
  Asc = 'ASC'
}

export type StringInput = {
  ne?: Maybe<Scalars['String']>;
  eq?: Maybe<Scalars['String']>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  newTheft: Theft;
  updatedTheft: Theft;
  deletedTheft: Theft;
  newFeedback: Feedback;
  updatedFeedback: Feedback;
  deletedFeedback: Feedback;
  newUser: User;
  updatedUser: User;
  deletedUser: User;
};


export type SubscriptionNewTheftArgs = {
  filter?: Maybe<TheftSubscriptionFilter>;
};


export type SubscriptionUpdatedTheftArgs = {
  filter?: Maybe<TheftSubscriptionFilter>;
};


export type SubscriptionDeletedTheftArgs = {
  filter?: Maybe<TheftSubscriptionFilter>;
};


export type SubscriptionNewFeedbackArgs = {
  filter?: Maybe<FeedbackSubscriptionFilter>;
};


export type SubscriptionUpdatedFeedbackArgs = {
  filter?: Maybe<FeedbackSubscriptionFilter>;
};


export type SubscriptionDeletedFeedbackArgs = {
  filter?: Maybe<FeedbackSubscriptionFilter>;
};


export type SubscriptionNewUserArgs = {
  filter?: Maybe<UserSubscriptionFilter>;
};


export type SubscriptionUpdatedUserArgs = {
  filter?: Maybe<UserSubscriptionFilter>;
};


export type SubscriptionDeletedUserArgs = {
  filter?: Maybe<UserSubscriptionFilter>;
};

/** @model */
export type Theft = {
  __typename?: 'Theft';
  _id?: Maybe<Scalars['GraphbackObjectID']>;
  region: Region;
  bike: Bike;
  comments?: Maybe<Scalars['String']>;
  date_time: DateTime;
  created_at: Scalars['GraphbackDateTime'];
  userId?: Maybe<Scalars['GraphbackObjectID']>;
  /** @manyToOne(field: 'thefts', key: 'userId') */
  user?: Maybe<User>;
};

export type TheftFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  comments?: Maybe<StringInput>;
  created_at?: Maybe<GraphbackDateTimeInput>;
  userId?: Maybe<GraphbackObjectIdInput>;
  and?: Maybe<Array<TheftFilter>>;
  or?: Maybe<Array<TheftFilter>>;
  not?: Maybe<TheftFilter>;
};

export type TheftResultList = {
  __typename?: 'TheftResultList';
  items: Array<Maybe<Theft>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type TheftSubscriptionFilter = {
  and?: Maybe<Array<TheftSubscriptionFilter>>;
  or?: Maybe<Array<TheftSubscriptionFilter>>;
  not?: Maybe<TheftSubscriptionFilter>;
  _id?: Maybe<GraphbackObjectIdInput>;
  comments?: Maybe<StringInput>;
  created_at?: Maybe<GraphbackDateTimeInput>;
  userId?: Maybe<GraphbackObjectIdInput>;
};

/** @model(find:false, findOne:false) */
export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['GraphbackObjectID']>;
  google_id: Scalars['String'];
  google_name: Scalars['String'];
  /**
   * @oneToMany(field: 'user', key: 'userId')
   * @oneToMany(field: 'user')
   */
  thefts?: Maybe<Array<Maybe<Theft>>>;
};


/** @model(find:false, findOne:false) */
export type UserTheftsArgs = {
  filter?: Maybe<TheftFilter>;
};

export type UserSubscriptionFilter = {
  and?: Maybe<Array<UserSubscriptionFilter>>;
  or?: Maybe<Array<UserSubscriptionFilter>>;
  not?: Maybe<UserSubscriptionFilter>;
  _id?: Maybe<GraphbackObjectIdInput>;
  google_id?: Maybe<StringInput>;
  google_name?: Maybe<StringInput>;
};
