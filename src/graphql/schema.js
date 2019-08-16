'use script';

const GraphQL = require('graphql');
const { GraphQLObjectType, GraphQLSchema } = GraphQL;
const PostQuery = require('./queries/Post.js');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'default query for our app',
  fields: {
    posts: PostQuery.index()
  }
});

module.exports = new GraphQLSchema({ query: RootQuery });
