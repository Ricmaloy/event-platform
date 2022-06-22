import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o818ui158x01xi45jk9esv/master',
  cache: new InMemoryCache()
});
