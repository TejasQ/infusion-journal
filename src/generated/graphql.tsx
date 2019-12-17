type Maybe<T> = T | null;
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
};

export enum _ModelMutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

export type _QueryMeta = {
  count: Scalars['Int'],
};

export type AddToUserBleedingEpisodePayload = {
  bleedingEpisodesBleedingEpisode?: Maybe<BleedingEpisode>,
  userUser?: Maybe<User>,
};

export type AddToUserInfusionPayload = {
  infusionsInfusion?: Maybe<Infusion>,
  userUser?: Maybe<User>,
};

export type BleedingEpisode = Node & {
  affectedArea: Scalars['String'],
  id: Scalars['ID'],
  startedAt: Scalars['DateTime'],
  user?: Maybe<User>,
};


export type BleedingEpisodeUserArgs = {
  filter?: Maybe<UserFilter>
};

export type BleedingEpisodeFilter = {
  AND?: Maybe<Array<BleedingEpisodeFilter>>,
  OR?: Maybe<Array<BleedingEpisodeFilter>>,
  affectedArea?: Maybe<Scalars['String']>,
  affectedArea_not?: Maybe<Scalars['String']>,
  affectedArea_in?: Maybe<Array<Scalars['String']>>,
  affectedArea_not_in?: Maybe<Array<Scalars['String']>>,
  affectedArea_lt?: Maybe<Scalars['String']>,
  affectedArea_lte?: Maybe<Scalars['String']>,
  affectedArea_gt?: Maybe<Scalars['String']>,
  affectedArea_gte?: Maybe<Scalars['String']>,
  affectedArea_contains?: Maybe<Scalars['String']>,
  affectedArea_not_contains?: Maybe<Scalars['String']>,
  affectedArea_starts_with?: Maybe<Scalars['String']>,
  affectedArea_not_starts_with?: Maybe<Scalars['String']>,
  affectedArea_ends_with?: Maybe<Scalars['String']>,
  affectedArea_not_ends_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  startedAt?: Maybe<Scalars['DateTime']>,
  startedAt_not?: Maybe<Scalars['DateTime']>,
  startedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  startedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  startedAt_lt?: Maybe<Scalars['DateTime']>,
  startedAt_lte?: Maybe<Scalars['DateTime']>,
  startedAt_gt?: Maybe<Scalars['DateTime']>,
  startedAt_gte?: Maybe<Scalars['DateTime']>,
  user?: Maybe<UserFilter>,
};

export enum BleedingEpisodeOrderBy {
  AffectedArea_Asc = 'affectedArea_ASC',
  AffectedArea_Desc = 'affectedArea_DESC',
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  StartedAt_Asc = 'startedAt_ASC',
  StartedAt_Desc = 'startedAt_DESC'
}

export type BleedingEpisodePreviousValues = {
  affectedArea: Scalars['String'],
  id: Scalars['ID'],
  startedAt: Scalars['DateTime'],
};

export type BleedingEpisodeSubscriptionFilter = {
  AND?: Maybe<Array<BleedingEpisodeSubscriptionFilter>>,
  OR?: Maybe<Array<BleedingEpisodeSubscriptionFilter>>,
  mutation_in?: Maybe<Array<_ModelMutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<BleedingEpisodeSubscriptionFilterNode>,
};

export type BleedingEpisodeSubscriptionFilterNode = {
  affectedArea?: Maybe<Scalars['String']>,
  affectedArea_not?: Maybe<Scalars['String']>,
  affectedArea_in?: Maybe<Array<Scalars['String']>>,
  affectedArea_not_in?: Maybe<Array<Scalars['String']>>,
  affectedArea_lt?: Maybe<Scalars['String']>,
  affectedArea_lte?: Maybe<Scalars['String']>,
  affectedArea_gt?: Maybe<Scalars['String']>,
  affectedArea_gte?: Maybe<Scalars['String']>,
  affectedArea_contains?: Maybe<Scalars['String']>,
  affectedArea_not_contains?: Maybe<Scalars['String']>,
  affectedArea_starts_with?: Maybe<Scalars['String']>,
  affectedArea_not_starts_with?: Maybe<Scalars['String']>,
  affectedArea_ends_with?: Maybe<Scalars['String']>,
  affectedArea_not_ends_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  startedAt?: Maybe<Scalars['DateTime']>,
  startedAt_not?: Maybe<Scalars['DateTime']>,
  startedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  startedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  startedAt_lt?: Maybe<Scalars['DateTime']>,
  startedAt_lte?: Maybe<Scalars['DateTime']>,
  startedAt_gt?: Maybe<Scalars['DateTime']>,
  startedAt_gte?: Maybe<Scalars['DateTime']>,
  user?: Maybe<UserFilter>,
};

export type BleedingEpisodeSubscriptionPayload = {
  mutation: _ModelMutationType,
  node?: Maybe<BleedingEpisode>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<BleedingEpisodePreviousValues>,
};

export type BleedingEpisodeuserUser = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  weightInKg: Scalars['Int'],
  bleedingEpisodesIds?: Maybe<Array<Scalars['ID']>>,
  bleedingEpisodes?: Maybe<Array<UserbleedingEpisodesBleedingEpisode>>,
  infusionsIds?: Maybe<Array<Scalars['ID']>>,
  infusions?: Maybe<Array<UserinfusionsInfusion>>,
};

export type CreateBleedingEpisode = {
  affectedArea: Scalars['String'],
  startedAt: Scalars['DateTime'],
  userId?: Maybe<Scalars['ID']>,
  user?: Maybe<BleedingEpisodeuserUser>,
};

export type CreateInfusion = {
  infusedAt: Scalars['DateTime'],
  serialNumber?: Maybe<Scalars['String']>,
  units: Scalars['Int'],
  userId?: Maybe<Scalars['ID']>,
  user?: Maybe<InfusionuserUser>,
};

export type CreateUser = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  weightInKg: Scalars['Int'],
  bleedingEpisodesIds?: Maybe<Array<Scalars['ID']>>,
  bleedingEpisodes?: Maybe<Array<UserbleedingEpisodesBleedingEpisode>>,
  infusionsIds?: Maybe<Array<Scalars['ID']>>,
  infusions?: Maybe<Array<UserinfusionsInfusion>>,
};


export type HelloPayload = {
  message: Scalars['String'],
};

export type Infusion = Node & {
  id: Scalars['ID'],
  infusedAt: Scalars['DateTime'],
  serialNumber?: Maybe<Scalars['String']>,
  units: Scalars['Int'],
  user?: Maybe<User>,
};


export type InfusionUserArgs = {
  filter?: Maybe<UserFilter>
};

export type InfusionFilter = {
  AND?: Maybe<Array<InfusionFilter>>,
  OR?: Maybe<Array<InfusionFilter>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  infusedAt?: Maybe<Scalars['DateTime']>,
  infusedAt_not?: Maybe<Scalars['DateTime']>,
  infusedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  infusedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  infusedAt_lt?: Maybe<Scalars['DateTime']>,
  infusedAt_lte?: Maybe<Scalars['DateTime']>,
  infusedAt_gt?: Maybe<Scalars['DateTime']>,
  infusedAt_gte?: Maybe<Scalars['DateTime']>,
  serialNumber?: Maybe<Scalars['String']>,
  serialNumber_not?: Maybe<Scalars['String']>,
  serialNumber_in?: Maybe<Array<Scalars['String']>>,
  serialNumber_not_in?: Maybe<Array<Scalars['String']>>,
  serialNumber_lt?: Maybe<Scalars['String']>,
  serialNumber_lte?: Maybe<Scalars['String']>,
  serialNumber_gt?: Maybe<Scalars['String']>,
  serialNumber_gte?: Maybe<Scalars['String']>,
  serialNumber_contains?: Maybe<Scalars['String']>,
  serialNumber_not_contains?: Maybe<Scalars['String']>,
  serialNumber_starts_with?: Maybe<Scalars['String']>,
  serialNumber_not_starts_with?: Maybe<Scalars['String']>,
  serialNumber_ends_with?: Maybe<Scalars['String']>,
  serialNumber_not_ends_with?: Maybe<Scalars['String']>,
  units?: Maybe<Scalars['Int']>,
  units_not?: Maybe<Scalars['Int']>,
  units_in?: Maybe<Array<Scalars['Int']>>,
  units_not_in?: Maybe<Array<Scalars['Int']>>,
  units_lt?: Maybe<Scalars['Int']>,
  units_lte?: Maybe<Scalars['Int']>,
  units_gt?: Maybe<Scalars['Int']>,
  units_gte?: Maybe<Scalars['Int']>,
  user?: Maybe<UserFilter>,
};

export enum InfusionOrderBy {
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  InfusedAt_Asc = 'infusedAt_ASC',
  InfusedAt_Desc = 'infusedAt_DESC',
  SerialNumber_Asc = 'serialNumber_ASC',
  SerialNumber_Desc = 'serialNumber_DESC',
  Units_Asc = 'units_ASC',
  Units_Desc = 'units_DESC'
}

export type InfusionPreviousValues = {
  id: Scalars['ID'],
  infusedAt: Scalars['DateTime'],
  serialNumber?: Maybe<Scalars['String']>,
  units: Scalars['Int'],
};

export type InfusionSubscriptionFilter = {
  AND?: Maybe<Array<InfusionSubscriptionFilter>>,
  OR?: Maybe<Array<InfusionSubscriptionFilter>>,
  mutation_in?: Maybe<Array<_ModelMutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<InfusionSubscriptionFilterNode>,
};

export type InfusionSubscriptionFilterNode = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  infusedAt?: Maybe<Scalars['DateTime']>,
  infusedAt_not?: Maybe<Scalars['DateTime']>,
  infusedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  infusedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  infusedAt_lt?: Maybe<Scalars['DateTime']>,
  infusedAt_lte?: Maybe<Scalars['DateTime']>,
  infusedAt_gt?: Maybe<Scalars['DateTime']>,
  infusedAt_gte?: Maybe<Scalars['DateTime']>,
  serialNumber?: Maybe<Scalars['String']>,
  serialNumber_not?: Maybe<Scalars['String']>,
  serialNumber_in?: Maybe<Array<Scalars['String']>>,
  serialNumber_not_in?: Maybe<Array<Scalars['String']>>,
  serialNumber_lt?: Maybe<Scalars['String']>,
  serialNumber_lte?: Maybe<Scalars['String']>,
  serialNumber_gt?: Maybe<Scalars['String']>,
  serialNumber_gte?: Maybe<Scalars['String']>,
  serialNumber_contains?: Maybe<Scalars['String']>,
  serialNumber_not_contains?: Maybe<Scalars['String']>,
  serialNumber_starts_with?: Maybe<Scalars['String']>,
  serialNumber_not_starts_with?: Maybe<Scalars['String']>,
  serialNumber_ends_with?: Maybe<Scalars['String']>,
  serialNumber_not_ends_with?: Maybe<Scalars['String']>,
  units?: Maybe<Scalars['Int']>,
  units_not?: Maybe<Scalars['Int']>,
  units_in?: Maybe<Array<Scalars['Int']>>,
  units_not_in?: Maybe<Array<Scalars['Int']>>,
  units_lt?: Maybe<Scalars['Int']>,
  units_lte?: Maybe<Scalars['Int']>,
  units_gt?: Maybe<Scalars['Int']>,
  units_gte?: Maybe<Scalars['Int']>,
  user?: Maybe<UserFilter>,
};

export type InfusionSubscriptionPayload = {
  mutation: _ModelMutationType,
  node?: Maybe<Infusion>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<InfusionPreviousValues>,
};

export type InfusionuserUser = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  weightInKg: Scalars['Int'],
  bleedingEpisodesIds?: Maybe<Array<Scalars['ID']>>,
  bleedingEpisodes?: Maybe<Array<UserbleedingEpisodesBleedingEpisode>>,
  infusionsIds?: Maybe<Array<Scalars['ID']>>,
  infusions?: Maybe<Array<UserinfusionsInfusion>>,
};

export type InvokeFunctionInput = {
  name: Scalars['String'],
  input: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type InvokeFunctionPayload = {
  result: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type Mutation = {
  createBleedingEpisode?: Maybe<BleedingEpisode>,
  createInfusion?: Maybe<Infusion>,
  updateBleedingEpisode?: Maybe<BleedingEpisode>,
  updateInfusion?: Maybe<Infusion>,
  updateUser?: Maybe<User>,
  updateOrCreateBleedingEpisode?: Maybe<BleedingEpisode>,
  updateOrCreateInfusion?: Maybe<Infusion>,
  updateOrCreateUser?: Maybe<User>,
  deleteBleedingEpisode?: Maybe<BleedingEpisode>,
  deleteInfusion?: Maybe<Infusion>,
  deleteUser?: Maybe<User>,
  addToUserBleedingEpisode?: Maybe<AddToUserBleedingEpisodePayload>,
  addToUserInfusion?: Maybe<AddToUserInfusionPayload>,
  removeFromUserBleedingEpisode?: Maybe<RemoveFromUserBleedingEpisodePayload>,
  removeFromUserInfusion?: Maybe<RemoveFromUserInfusionPayload>,
  createUser?: Maybe<User>,
  invokeFunction?: Maybe<InvokeFunctionPayload>,
};


export type MutationCreateBleedingEpisodeArgs = {
  affectedArea: Scalars['String'],
  startedAt: Scalars['DateTime'],
  userId?: Maybe<Scalars['ID']>,
  user?: Maybe<BleedingEpisodeuserUser>
};


export type MutationCreateInfusionArgs = {
  infusedAt: Scalars['DateTime'],
  serialNumber?: Maybe<Scalars['String']>,
  units: Scalars['Int'],
  userId?: Maybe<Scalars['ID']>,
  user?: Maybe<InfusionuserUser>
};


export type MutationUpdateBleedingEpisodeArgs = {
  affectedArea?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  startedAt?: Maybe<Scalars['DateTime']>,
  userId?: Maybe<Scalars['ID']>,
  user?: Maybe<BleedingEpisodeuserUser>
};


export type MutationUpdateInfusionArgs = {
  id: Scalars['ID'],
  infusedAt?: Maybe<Scalars['DateTime']>,
  serialNumber?: Maybe<Scalars['String']>,
  units?: Maybe<Scalars['Int']>,
  userId?: Maybe<Scalars['ID']>,
  user?: Maybe<InfusionuserUser>
};


export type MutationUpdateUserArgs = {
  firstName?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  lastName?: Maybe<Scalars['String']>,
  weightInKg?: Maybe<Scalars['Int']>,
  bleedingEpisodesIds?: Maybe<Array<Scalars['ID']>>,
  bleedingEpisodes?: Maybe<Array<UserbleedingEpisodesBleedingEpisode>>,
  infusionsIds?: Maybe<Array<Scalars['ID']>>,
  infusions?: Maybe<Array<UserinfusionsInfusion>>
};


export type MutationUpdateOrCreateBleedingEpisodeArgs = {
  update: UpdateBleedingEpisode,
  create: CreateBleedingEpisode
};


export type MutationUpdateOrCreateInfusionArgs = {
  update: UpdateInfusion,
  create: CreateInfusion
};


export type MutationUpdateOrCreateUserArgs = {
  update: UpdateUser,
  create: CreateUser
};


export type MutationDeleteBleedingEpisodeArgs = {
  id: Scalars['ID']
};


export type MutationDeleteInfusionArgs = {
  id: Scalars['ID']
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']
};


export type MutationAddToUserBleedingEpisodeArgs = {
  userUserId: Scalars['ID'],
  bleedingEpisodesBleedingEpisodeId: Scalars['ID']
};


export type MutationAddToUserInfusionArgs = {
  userUserId: Scalars['ID'],
  infusionsInfusionId: Scalars['ID']
};


export type MutationRemoveFromUserBleedingEpisodeArgs = {
  userUserId: Scalars['ID'],
  bleedingEpisodesBleedingEpisodeId: Scalars['ID']
};


export type MutationRemoveFromUserInfusionArgs = {
  userUserId: Scalars['ID'],
  infusionsInfusionId: Scalars['ID']
};


export type MutationCreateUserArgs = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  weightInKg: Scalars['Int'],
  bleedingEpisodesIds?: Maybe<Array<Scalars['ID']>>,
  bleedingEpisodes?: Maybe<Array<UserbleedingEpisodesBleedingEpisode>>,
  infusionsIds?: Maybe<Array<Scalars['ID']>>,
  infusions?: Maybe<Array<UserinfusionsInfusion>>
};


export type MutationInvokeFunctionArgs = {
  input: InvokeFunctionInput
};

export type Node = {
  id: Scalars['ID'],
};

export type Query = {
  allBleedingEpisodes: Array<BleedingEpisode>,
  allInfusions: Array<Infusion>,
  allUsers: Array<User>,
  _allBleedingEpisodesMeta: _QueryMeta,
  _allInfusionsMeta: _QueryMeta,
  _allUsersMeta: _QueryMeta,
  BleedingEpisode?: Maybe<BleedingEpisode>,
  Infusion?: Maybe<Infusion>,
  User?: Maybe<User>,
  hello?: Maybe<HelloPayload>,
  user?: Maybe<User>,
  node?: Maybe<Node>,
};


export type QueryAllBleedingEpisodesArgs = {
  filter?: Maybe<BleedingEpisodeFilter>,
  orderBy?: Maybe<BleedingEpisodeOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryAllInfusionsArgs = {
  filter?: Maybe<InfusionFilter>,
  orderBy?: Maybe<InfusionOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryAllUsersArgs = {
  filter?: Maybe<UserFilter>,
  orderBy?: Maybe<UserOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Query_AllBleedingEpisodesMetaArgs = {
  filter?: Maybe<BleedingEpisodeFilter>,
  orderBy?: Maybe<BleedingEpisodeOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Query_AllInfusionsMetaArgs = {
  filter?: Maybe<InfusionFilter>,
  orderBy?: Maybe<InfusionOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Query_AllUsersMetaArgs = {
  filter?: Maybe<UserFilter>,
  orderBy?: Maybe<UserOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryBleedingEpisodeArgs = {
  id?: Maybe<Scalars['ID']>,
  startedAt?: Maybe<Scalars['DateTime']>
};


export type QueryInfusionArgs = {
  id?: Maybe<Scalars['ID']>,
  infusedAt?: Maybe<Scalars['DateTime']>
};


export type QueryUserArgs = {
  id?: Maybe<Scalars['ID']>
};


export type QueryHelloArgs = {
  name?: Maybe<Scalars['String']>
};


export type QueryNodeArgs = {
  id: Scalars['ID']
};

export type RemoveFromUserBleedingEpisodePayload = {
  bleedingEpisodesBleedingEpisode?: Maybe<BleedingEpisode>,
  userUser?: Maybe<User>,
};

export type RemoveFromUserInfusionPayload = {
  infusionsInfusion?: Maybe<Infusion>,
  userUser?: Maybe<User>,
};

export type Subscription = {
  BleedingEpisode?: Maybe<BleedingEpisodeSubscriptionPayload>,
  Infusion?: Maybe<InfusionSubscriptionPayload>,
  User?: Maybe<UserSubscriptionPayload>,
};


export type SubscriptionBleedingEpisodeArgs = {
  filter?: Maybe<BleedingEpisodeSubscriptionFilter>
};


export type SubscriptionInfusionArgs = {
  filter?: Maybe<InfusionSubscriptionFilter>
};


export type SubscriptionUserArgs = {
  filter?: Maybe<UserSubscriptionFilter>
};

export type UpdateBleedingEpisode = {
  affectedArea?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  startedAt?: Maybe<Scalars['DateTime']>,
  userId?: Maybe<Scalars['ID']>,
  user?: Maybe<BleedingEpisodeuserUser>,
};

export type UpdateInfusion = {
  id: Scalars['ID'],
  infusedAt?: Maybe<Scalars['DateTime']>,
  serialNumber?: Maybe<Scalars['String']>,
  units?: Maybe<Scalars['Int']>,
  userId?: Maybe<Scalars['ID']>,
  user?: Maybe<InfusionuserUser>,
};

export type UpdateUser = {
  firstName?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  lastName?: Maybe<Scalars['String']>,
  weightInKg?: Maybe<Scalars['Int']>,
  bleedingEpisodesIds?: Maybe<Array<Scalars['ID']>>,
  bleedingEpisodes?: Maybe<Array<UserbleedingEpisodesBleedingEpisode>>,
  infusionsIds?: Maybe<Array<Scalars['ID']>>,
  infusions?: Maybe<Array<UserinfusionsInfusion>>,
};

export type User = Node & {
  bleedingEpisodes?: Maybe<Array<BleedingEpisode>>,
  firstName: Scalars['String'],
  id: Scalars['ID'],
  infusions?: Maybe<Array<Infusion>>,
  lastName: Scalars['String'],
  weightInKg: Scalars['Int'],
  _bleedingEpisodesMeta: _QueryMeta,
  _infusionsMeta: _QueryMeta,
};


export type UserBleedingEpisodesArgs = {
  filter?: Maybe<BleedingEpisodeFilter>,
  orderBy?: Maybe<BleedingEpisodeOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type UserInfusionsArgs = {
  filter?: Maybe<InfusionFilter>,
  orderBy?: Maybe<InfusionOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type User_BleedingEpisodesMetaArgs = {
  filter?: Maybe<BleedingEpisodeFilter>,
  orderBy?: Maybe<BleedingEpisodeOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type User_InfusionsMetaArgs = {
  filter?: Maybe<InfusionFilter>,
  orderBy?: Maybe<InfusionOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type UserbleedingEpisodesBleedingEpisode = {
  affectedArea: Scalars['String'],
  startedAt: Scalars['DateTime'],
};

export type UserFilter = {
  AND?: Maybe<Array<UserFilter>>,
  OR?: Maybe<Array<UserFilter>>,
  firstName?: Maybe<Scalars['String']>,
  firstName_not?: Maybe<Scalars['String']>,
  firstName_in?: Maybe<Array<Scalars['String']>>,
  firstName_not_in?: Maybe<Array<Scalars['String']>>,
  firstName_lt?: Maybe<Scalars['String']>,
  firstName_lte?: Maybe<Scalars['String']>,
  firstName_gt?: Maybe<Scalars['String']>,
  firstName_gte?: Maybe<Scalars['String']>,
  firstName_contains?: Maybe<Scalars['String']>,
  firstName_not_contains?: Maybe<Scalars['String']>,
  firstName_starts_with?: Maybe<Scalars['String']>,
  firstName_not_starts_with?: Maybe<Scalars['String']>,
  firstName_ends_with?: Maybe<Scalars['String']>,
  firstName_not_ends_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  lastName?: Maybe<Scalars['String']>,
  lastName_not?: Maybe<Scalars['String']>,
  lastName_in?: Maybe<Array<Scalars['String']>>,
  lastName_not_in?: Maybe<Array<Scalars['String']>>,
  lastName_lt?: Maybe<Scalars['String']>,
  lastName_lte?: Maybe<Scalars['String']>,
  lastName_gt?: Maybe<Scalars['String']>,
  lastName_gte?: Maybe<Scalars['String']>,
  lastName_contains?: Maybe<Scalars['String']>,
  lastName_not_contains?: Maybe<Scalars['String']>,
  lastName_starts_with?: Maybe<Scalars['String']>,
  lastName_not_starts_with?: Maybe<Scalars['String']>,
  lastName_ends_with?: Maybe<Scalars['String']>,
  lastName_not_ends_with?: Maybe<Scalars['String']>,
  weightInKg?: Maybe<Scalars['Int']>,
  weightInKg_not?: Maybe<Scalars['Int']>,
  weightInKg_in?: Maybe<Array<Scalars['Int']>>,
  weightInKg_not_in?: Maybe<Array<Scalars['Int']>>,
  weightInKg_lt?: Maybe<Scalars['Int']>,
  weightInKg_lte?: Maybe<Scalars['Int']>,
  weightInKg_gt?: Maybe<Scalars['Int']>,
  weightInKg_gte?: Maybe<Scalars['Int']>,
  bleedingEpisodes_every?: Maybe<BleedingEpisodeFilter>,
  bleedingEpisodes_some?: Maybe<BleedingEpisodeFilter>,
  bleedingEpisodes_none?: Maybe<BleedingEpisodeFilter>,
  infusions_every?: Maybe<InfusionFilter>,
  infusions_some?: Maybe<InfusionFilter>,
  infusions_none?: Maybe<InfusionFilter>,
};

export type UserinfusionsInfusion = {
  infusedAt: Scalars['DateTime'],
  serialNumber?: Maybe<Scalars['String']>,
  units: Scalars['Int'],
};

export enum UserOrderBy {
  FirstName_Asc = 'firstName_ASC',
  FirstName_Desc = 'firstName_DESC',
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  LastName_Asc = 'lastName_ASC',
  LastName_Desc = 'lastName_DESC',
  WeightInKg_Asc = 'weightInKg_ASC',
  WeightInKg_Desc = 'weightInKg_DESC'
}

export type UserPreviousValues = {
  firstName: Scalars['String'],
  id: Scalars['ID'],
  lastName: Scalars['String'],
  weightInKg: Scalars['Int'],
};

export type UserSubscriptionFilter = {
  AND?: Maybe<Array<UserSubscriptionFilter>>,
  OR?: Maybe<Array<UserSubscriptionFilter>>,
  mutation_in?: Maybe<Array<_ModelMutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<UserSubscriptionFilterNode>,
};

export type UserSubscriptionFilterNode = {
  firstName?: Maybe<Scalars['String']>,
  firstName_not?: Maybe<Scalars['String']>,
  firstName_in?: Maybe<Array<Scalars['String']>>,
  firstName_not_in?: Maybe<Array<Scalars['String']>>,
  firstName_lt?: Maybe<Scalars['String']>,
  firstName_lte?: Maybe<Scalars['String']>,
  firstName_gt?: Maybe<Scalars['String']>,
  firstName_gte?: Maybe<Scalars['String']>,
  firstName_contains?: Maybe<Scalars['String']>,
  firstName_not_contains?: Maybe<Scalars['String']>,
  firstName_starts_with?: Maybe<Scalars['String']>,
  firstName_not_starts_with?: Maybe<Scalars['String']>,
  firstName_ends_with?: Maybe<Scalars['String']>,
  firstName_not_ends_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  lastName?: Maybe<Scalars['String']>,
  lastName_not?: Maybe<Scalars['String']>,
  lastName_in?: Maybe<Array<Scalars['String']>>,
  lastName_not_in?: Maybe<Array<Scalars['String']>>,
  lastName_lt?: Maybe<Scalars['String']>,
  lastName_lte?: Maybe<Scalars['String']>,
  lastName_gt?: Maybe<Scalars['String']>,
  lastName_gte?: Maybe<Scalars['String']>,
  lastName_contains?: Maybe<Scalars['String']>,
  lastName_not_contains?: Maybe<Scalars['String']>,
  lastName_starts_with?: Maybe<Scalars['String']>,
  lastName_not_starts_with?: Maybe<Scalars['String']>,
  lastName_ends_with?: Maybe<Scalars['String']>,
  lastName_not_ends_with?: Maybe<Scalars['String']>,
  weightInKg?: Maybe<Scalars['Int']>,
  weightInKg_not?: Maybe<Scalars['Int']>,
  weightInKg_in?: Maybe<Array<Scalars['Int']>>,
  weightInKg_not_in?: Maybe<Array<Scalars['Int']>>,
  weightInKg_lt?: Maybe<Scalars['Int']>,
  weightInKg_lte?: Maybe<Scalars['Int']>,
  weightInKg_gt?: Maybe<Scalars['Int']>,
  weightInKg_gte?: Maybe<Scalars['Int']>,
  bleedingEpisodes_every?: Maybe<BleedingEpisodeFilter>,
  bleedingEpisodes_some?: Maybe<BleedingEpisodeFilter>,
  bleedingEpisodes_none?: Maybe<BleedingEpisodeFilter>,
  infusions_every?: Maybe<InfusionFilter>,
  infusions_some?: Maybe<InfusionFilter>,
  infusions_none?: Maybe<InfusionFilter>,
};

export type UserSubscriptionPayload = {
  mutation: _ModelMutationType,
  node?: Maybe<User>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<UserPreviousValues>,
};


