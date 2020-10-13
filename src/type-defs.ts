import { gql } from 'apollo-server';

export default gql`
  type Query {
    """
    Test Message. 
    """
    searchArticle(page: String): SearchArticleResponse!
  }
  
  type SearchArticleResponse {
    parse: SearchArticleParse
  }

  type SearchArticleParse {
    title: String
    categories: [ArticleCategory]
    sections: [ArticleSection]
  }

  type ArticleCategory {
    sortkey: String
    category: String
    hidden: Boolean
  }

  type ArticleSection {
    toclevel: Int
    level: Int
    line: String
    number: String
    index: String
    anchor: String
  }
  
`;
