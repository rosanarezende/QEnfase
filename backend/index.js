const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { makeExecutableSchema } = require('graphql-tools')
const { importSchema } = require('graphql-import')

const resolvers = require('./resolvers')
const schemaPath = './schema/index.graphql'

const schema = makeExecutableSchema({
    typeDefs: importSchema(schemaPath),
    resolvers
})

const app = express()
app.use('/api', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => console.log('Executando...'))
