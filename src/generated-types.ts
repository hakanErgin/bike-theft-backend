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
  GraphbackObjectID: string;
};

/** @model */
export type Bike = {
  __typename?: 'Bike';
  _id: Scalars['GraphbackObjectID'];
  description?: Maybe<Scalars['String']>;
  /**
   * @oneToOne(key: 'ownerId')
   * @oneToOne
   */
  owner: User;
  /** @manyToOne(field: 'bikes', key: 'theftId') */
  theft?: Maybe<Theft>;
};

export type BikeFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  description?: Maybe<StringInput>;
  ownerId?: Maybe<GraphbackObjectIdInput>;
  theftId?: Maybe<GraphbackObjectIdInput>;
  and?: Maybe<Array<BikeFilter>>;
  or?: Maybe<Array<BikeFilter>>;
  not?: Maybe<BikeFilter>;
};

export type BikeResultList = {
  __typename?: 'BikeResultList';
  items: Array<Maybe<Bike>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type BikeSubscriptionFilter = {
  and?: Maybe<Array<BikeSubscriptionFilter>>;
  or?: Maybe<Array<BikeSubscriptionFilter>>;
  not?: Maybe<BikeSubscriptionFilter>;
  _id?: Maybe<GraphbackObjectIdInput>;
  description?: Maybe<StringInput>;
};

export type CreateBikeInput = {
  _id?: Maybe<Scalars['GraphbackObjectID']>;
  description?: Maybe<Scalars['String']>;
  ownerId: Scalars['GraphbackObjectID'];
  theftId?: Maybe<Scalars['GraphbackObjectID']>;
};

export type CreateTheftInput = {
  _id?: Maybe<Scalars['GraphbackObjectID']>;
  date: Scalars['String'];
  location: Scalars['String'];
  comments?: Maybe<Scalars['String']>;
  ownerId: Scalars['GraphbackObjectID'];
};

export type CreateUserInput = {
  _id?: Maybe<Scalars['GraphbackObjectID']>;
  name: Scalars['String'];
  contact: Scalars['String'];
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
  _id: Scalars['GraphbackObjectID'];
  description?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['GraphbackObjectID']>;
  theftId?: Maybe<Scalars['GraphbackObjectID']>;
};

export type MutateTheftInput = {
  _id: Scalars['GraphbackObjectID'];
  date?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['GraphbackObjectID']>;
};

export type MutateUserInput = {
  _id: Scalars['GraphbackObjectID'];
  name?: Maybe<Scalars['String']>;
  contact?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTheft?: Maybe<Theft>;
  updateTheft?: Maybe<Theft>;
  deleteTheft?: Maybe<Theft>;
  createBike?: Maybe<Bike>;
  updateBike?: Maybe<Bike>;
  deleteBike?: Maybe<Bike>;
  createUser?: Maybe<User>;
  updateUser?: Maybe<User>;
  deleteUser?: Maybe<User>;
};


export type MutationCreateTheftArgs = {
  input: CreateTheftInput;
};


export type MutationUpdateTheftArgs = {
  input: MutateTheftInput;
};


export type MutationDeleteTheftArgs = {
  input: MutateTheftInput;
};


export type MutationCreateBikeArgs = {
  input: CreateBikeInput;
};


export type MutationUpdateBikeArgs = {
  input: MutateBikeInput;
};


export type MutationDeleteBikeArgs = {
  input: MutateBikeInput;
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
  getTheft?: Maybe<Theft>;
  findThefts: TheftResultList;
  getBike?: Maybe<Bike>;
  findBikes: BikeResultList;
  getUser?: Maybe<User>;
  findUsers: UserResultList;
};


export type QueryGetTheftArgs = {
  id: Scalars['GraphbackObjectID'];
};


export type QueryFindTheftsArgs = {
  filter?: Maybe<TheftFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
};


export type QueryGetBikeArgs = {
  id: Scalars['GraphbackObjectID'];
};


export type QueryFindBikesArgs = {
  filter?: Maybe<BikeFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
};


export type QueryGetUserArgs = {
  id: Scalars['GraphbackObjectID'];
};


export type QueryFindUsersArgs = {
  filter?: Maybe<UserFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
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
  newBike: Bike;
  updatedBike: Bike;
  deletedBike: Bike;
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


export type SubscriptionNewBikeArgs = {
  filter?: Maybe<BikeSubscriptionFilter>;
};


export type SubscriptionUpdatedBikeArgs = {
  filter?: Maybe<BikeSubscriptionFilter>;
};


export type SubscriptionDeletedBikeArgs = {
  filter?: Maybe<BikeSubscriptionFilter>;
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
  _id: Scalars['GraphbackObjectID'];
  date: Scalars['String'];
  location: Scalars['String'];
  /**
   * @oneToMany(field: 'theft', key: 'theftId')
   * @oneToMany(field: 'theft')
   */
  bikes?: Maybe<Array<Bike>>;
  comments?: Maybe<Scalars['String']>;
  /**
   * @oneToOne(key: 'ownerId')
   * @oneToOne
   */
  owner: User;
};


/** @model */
export type TheftBikesArgs = {
  filter?: Maybe<BikeFilter>;
};

export type TheftFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  date?: Maybe<StringInput>;
  location?: Maybe<StringInput>;
  comments?: Maybe<StringInput>;
  ownerId?: Maybe<GraphbackObjectIdInput>;
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
  date?: Maybe<StringInput>;
  location?: Maybe<StringInput>;
  comments?: Maybe<StringInput>;
};

/** @model */
export type User = {
  __typename?: 'User';
  _id: Scalars['GraphbackObjectID'];
  name: Scalars['String'];
  contact: Scalars['String'];
};

export type UserFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  name?: Maybe<StringInput>;
  contact?: Maybe<StringInput>;
  and?: Maybe<Array<UserFilter>>;
  or?: Maybe<Array<UserFilter>>;
  not?: Maybe<UserFilter>;
};

export type UserResultList = {
  __typename?: 'UserResultList';
  items: Array<Maybe<User>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type UserSubscriptionFilter = {
  and?: Maybe<Array<UserSubscriptionFilter>>;
  or?: Maybe<Array<UserSubscriptionFilter>>;
  not?: Maybe<UserSubscriptionFilter>;
  _id?: Maybe<GraphbackObjectIdInput>;
  name?: Maybe<StringInput>;
  contact?: Maybe<StringInput>;
};
