const defaultPort = 4000;

interface Environment {
  apollo: {
    introspection: boolean,
    playground: boolean
  },
  wikipediaAPI: {
    baseURL: string,
  },
  port: number|string;
}

export const environment: Environment = {
  apollo: {
    introspection: process.env.APOLLO_INTROSPECTION === 'true',
    playground: process.env.APOLLO_PLAYGROUND === 'true'
  },
  wikipediaAPI: {
    baseURL: process.env.WIKIPEDIA_BASE_URL || 'https://en.wikipedia.org/w/api.php',
  },
  port: process.env.PORT || defaultPort
};