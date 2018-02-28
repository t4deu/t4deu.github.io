---
title: Mock a GraphQL API using graphql-tools
categories:
  - api
tags:
  - GraphQL
---

Hi! Here a step by step guide on how to setup a mock server so you can focus on the frontend development, even if there is no backend available!

## Create the node package
```sh
$ mkdir mymockserver && cd mymockserver
$ yarn init
```

## Install the necessary modules
```sh
yarn add --save apollo-server-express graphql-tools graphql express body-parser casual
```
## Define  your schema
Here I'm using some Posts and Authors as sample
```js
// types.js
const typeDefs = `
  type Author {
    id: Int!
    name: String
    posts: [Post]
  }

  type Post {
    id: Int!
    title: String
    content: String
    views: Int
    author: Author
  }

  # The schema allows query posts and author:
  type Query {
    author(id: Int!): Author
    posts: [Post]
  }
`;

export default typeDefs;

```

## Customize the mocks
Use this object to describes your desired mocking logic, set defaul values, 
randomizing the number of entries returned in lists.

```js
// mocks.js
import casual from 'casual';
import { MockList } from 'graphql-tools';

export default {
  // Here you could customize the mocks. 
  // If you leave it empty, the default is used.
  // You can read more about mocking here: http://bit.ly/2pOYqXF

  // Use functions to specific default values per type in the schema, for example
  Int: () => 7,
  String: () => 'Default Message',

  // Also customize your types and their fields too!
  Post: () => ({
    // Use casual to generate cool title for the posts
    title: casual.title,
    // and set the views range
    views: casual.integer(0,200),
  }),
  Author: () => ({
    // Use casual for names too
    name: casual.name,
    // Returns 5 posts 
    posts: () => new MockList(5),
  }),

  Query: () => ({
    // By default only two mocks are generated, here we use
    // graphql-tools MockList object to vary between 1 and 7 posts
    posts: () => new MockList([1, 7]),
  }),
}

```

## Wrap everything up

Attention for the `addMockFunctionsToSchema`, it's the one that modifies 
the schema in place to return mock data for any valid query that is sent to the server.

```js
// index.js
import express from 'express';
import {
  graphqlExpress,
  graphiqlExpress
} from 'apollo-server-express';
import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
  MockList 
} from 'graphql-tools';
import bodyParser from 'body-parser';
// The GraphQL schema in string form
import typeDefs from './types';
// The customised mocks
import mocks from './mocks';

// Put together a schema
const schema = makeExecutableSchema({ typeDefs });

// This function call adds the mocks to your schema!
addMockFunctionsToSchema({ schema, mocks });

// Initialize the app
const app = express();

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  query: `# Welcome to GraphiQL
query author {
  author(id: 1) {
    name
    posts {
      title
      content
      views
    }
  }
}

query posts {
  posts {
    title
    content
    views
    author {
      name
    }
  }
}`
}));

// Start the server
app.listen(3000, () => {
  console.log('Go to http://localhost:3000/graphiql to run queries!');
});

```

Now start the engine

```sh
$ babel-node index.js
```


## Closing
This was a fast one! I kept dry on purpose, but here a list of places where you can find more info on mocking:

* [Oficial Doc](https://www.apollographql.com/docs/graphql-tools/mocking.html)
* [Mocking your server is easy with GraphQL](http://graphql.org/blog/mocking-with-graphql/)
* [Mocking GraphQL with graphql-tools](https://medium.freecodecamp.org/mocking-graphql-with-graphql-tools-42c2dd9d0364)

### [Here is the source of the project, Enjoy!](https://github.com/t4deu/graphql-mock-sample)

