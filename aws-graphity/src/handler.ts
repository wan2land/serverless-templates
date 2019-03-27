import "source-map-support/register"

import { ApolloServer } from "apollo-server-lambda"
import { APIGatewayEvent, APIGatewayProxyHandler, Context } from "aws-lambda"
import { createSchema } from "graphity"

import { TodoResolver } from "./resolvers/todo-resolver"


const pkg = require("../package.json") // eslint-disable-line


export const home: APIGatewayProxyHandler = async (event, ctx) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: pkg.name,
      version: pkg.version,
      event,
      env: process.env,
    }),
  }
}


const server = new ApolloServer({
  schema: createSchema([
    TodoResolver,
  ]),
})
const handler = server.createHandler()

export async function graphql(event: APIGatewayEvent, ctx: Context) {
  return await new Promise((resolve, reject) => {
    handler(event, ctx, (error, data) => {
      return error ? reject(error) : resolve(data)
    })
  })
}
