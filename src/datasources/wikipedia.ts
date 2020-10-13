import { RESTDataSource } from 'apollo-datasource-rest';
import { environment } from '../environment';
import { SearchArticleResponse } from '../generated/graphql'


class WikipediaAPI extends RESTDataSource {
  baseURL: string;

  constructor() {
    super();
    this.baseURL = environment.wikipediaAPI.baseURL;
  }
  
  async searchArticle(page: string) {
    const response: SearchArticleResponse = await this.get('launches', {
      action: 'parse',
      format: 'json',
      formatversion: 2,
      page,
    });
    console.log('response', response);
    return response;
  }

}

export default WikipediaAPI;
