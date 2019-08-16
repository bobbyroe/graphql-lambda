'use strict';
const GraphQL = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = GraphQL;
const PostType = new GraphQL.GraphQLObjectType({
  name: 'Post',
  description: 'Post Type, For all the posts present in Reddit.',
  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'ID of the post'
    },
    title: {
      type: GraphQLString,
      description: 'title of the post'
    },
    url: {
      type: GraphQLString,
      description: 'url of the post'
    },
    author: {
      type: GraphQLString,
      description: 'author of the post'
    },
    ups: {
      type: GraphQLInt,
      description: 'upvotes of the post'
    },
    downs: {
      type: GraphQLString,
      description: 'downvotes of the post'
    },
    content: {
      type: GraphQLString,
      description: 'Markdown content of the post'
    }
  })
});

module.exports = PostType;
