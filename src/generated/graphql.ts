import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ArticleCategory = {
  __typename?: 'ArticleCategory';
  sortkey: Scalars['String'];
  category: Scalars['String'];
  hidden: Scalars['Boolean'];
};

export type ArticleSection = {
  __typename?: 'ArticleSection';
  toclevel: Scalars['Int'];
  level: Scalars['Int'];
  line: Scalars['String'];
  number: Scalars['String'];
  index: Scalars['String'];
  anchor: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** Test Message.  */
  searchArticle: SearchArticleResponse;
};


export type QuerySearchArticleArgs = {
  page?: Maybe<Scalars['String']>;
};

export type SearchArticleParse = {
  __typename?: 'SearchArticleParse';
  title: Scalars['String'];
  categories: Array<Maybe<ArticleCategory>>;
  sections: Array<Maybe<ArticleSection>>;
};

export type SearchArticleResponse = {
  __typename?: 'SearchArticleResponse';
  parse?: Maybe<SearchArticleParse>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  SearchArticleResponse: ResolverTypeWrapper<SearchArticleResponse>;
  SearchArticleParse: ResolverTypeWrapper<SearchArticleParse>;
  ArticleCategory: ResolverTypeWrapper<ArticleCategory>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ArticleSection: ResolverTypeWrapper<ArticleSection>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  String: Scalars['String'];
  SearchArticleResponse: SearchArticleResponse;
  SearchArticleParse: SearchArticleParse;
  ArticleCategory: ArticleCategory;
  Boolean: Scalars['Boolean'];
  ArticleSection: ArticleSection;
  Int: Scalars['Int'];
};

export type ArticleCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleCategory'] = ResolversParentTypes['ArticleCategory']> = {
  sortkey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleSectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleSection'] = ResolversParentTypes['ArticleSection']> = {
  toclevel?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  line?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  anchor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  searchArticle?: Resolver<ResolversTypes['SearchArticleResponse'], ParentType, ContextType, RequireFields<QuerySearchArticleArgs, never>>;
};

export type SearchArticleParseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchArticleParse'] = ResolversParentTypes['SearchArticleParse']> = {
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  categories?: Resolver<Array<Maybe<ResolversTypes['ArticleCategory']>>, ParentType, ContextType>;
  sections?: Resolver<Array<Maybe<ResolversTypes['ArticleSection']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchArticleResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchArticleResponse'] = ResolversParentTypes['SearchArticleResponse']> = {
  parse?: Resolver<Maybe<ResolversTypes['SearchArticleParse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  ArticleCategory?: ArticleCategoryResolvers<ContextType>;
  ArticleSection?: ArticleSectionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SearchArticleParse?: SearchArticleParseResolvers<ContextType>;
  SearchArticleResponse?: SearchArticleResponseResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
