import { ApolloServer } from 'apollo-server';

import { environment } from './environment';

import resolvers from './resolvers';
import typeDefs from './type-defs';
import { WikipediaAPI } from './datasources'

const server = new ApolloServer({
  resolvers,
  typeDefs,
  introspection: environment.apollo.introspection,
  playground: environment.apollo.playground,
  dataSources: () => ({
    WikipediaAPI: new WikipediaAPI(),
  }),
});

server.listen({ port: environment.port })
  .then(({ url }) => console.log(`Server ready at ${url}. `));

// I couldn't make this one work and didn't want to spend more time on it.
if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.stop());
}