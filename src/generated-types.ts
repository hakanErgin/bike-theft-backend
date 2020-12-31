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

export type CreateRegionInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  latitudeDelta?: Maybe<Scalars['Float']>;
  longitudeDelta?: Maybe<Scalars['Float']>;
};

export type CreateTheftInput = {
  _id?: Maybe<Scalars['GraphbackObjectID']>;
  region: CreateRegionInput;
  bike_description?: Maybe<Scalars['String']>;
  photos?: Maybe<Array<Scalars['String']>>;
  comments?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['GraphbackDateTime']>;
  created_at?: Maybe<Scalars['GraphbackDateTime']>;
  user?: Maybe<CreateUserInput>;
};

export type CreateUserInput = {
  google_id: Scalars['String'];
  id_token: Scalars['String'];
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

export type MutateRegionInput = {
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  latitudeDelta?: Maybe<Scalars['Float']>;
  longitudeDelta?: Maybe<Scalars['Float']>;
};

export type MutateTheftInput = {
  _id: Scalars['GraphbackObjectID'];
  region?: Maybe<MutateRegionInput>;
  bike_description?: Maybe<Scalars['String']>;
  photos?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['GraphbackDateTime']>;
  created_at?: Maybe<Scalars['GraphbackDateTime']>;
  user?: Maybe<MutateUserInput>;
};

export type MutateUserInput = {
  google_id?: Maybe<Scalars['String']>;
  id_token?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTheft?: Maybe<Theft>;
  updateTheft?: Maybe<Theft>;
  deleteTheft?: Maybe<Theft>;
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

/** @model */
export type Theft = {
  __typename?: 'Theft';
  _id: Scalars['GraphbackObjectID'];
  region: Region;
  bike_description?: Maybe<Scalars['String']>;
  photos?: Maybe<Array<Scalars['String']>>;
  comments?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['GraphbackDateTime']>;
  created_at?: Maybe<Scalars['GraphbackDateTime']>;
  user?: Maybe<User>;
};

export type TheftFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  bike_description?: Maybe<StringInput>;
  photos?: Maybe<StringInput>;
  comments?: Maybe<StringInput>;
  date?: Maybe<GraphbackDateTimeInput>;
  created_at?: Maybe<GraphbackDateTimeInput>;
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
  bike_description?: Maybe<StringInput>;
  photos?: Maybe<StringInput>;
  comments?: Maybe<StringInput>;
  date?: Maybe<GraphbackDateTimeInput>;
  created_at?: Maybe<GraphbackDateTimeInput>;
};

export type User = {
  __typename?: 'User';
  google_id: Scalars['String'];
  id_token: Scalars['String'];
};
