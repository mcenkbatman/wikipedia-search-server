export default {
  Query: {
    searchArticle: async (_: any, { page } : { page: string }, { dataSources } : any) => {
      return await dataSources.WikipediaAPI.searchArticle(page)
    },
  },
};