# graphql-101

## dev@npm

```sh
npm i
npm run dev
```

## dev@yarn

```sh
yarn
yarn dev
```

## Example

https://graphql-101.herokuapp.com/

### Sample Queries

#### Get Posts

```graphql
{ posts { _id title content comments { _id postId content } } }
```

#### Get Post

```graphql
{ post(_id: \"5bed274c014e45d7a93046c0\") { _id title content comments { _id postId content } } }
```

#### GetComment

```graphql
{ comment(_id: \"5bed282760666dd83f7f017c\") { _id postId content post { _id title content } } }
```

#### Create Post

```graphql
mutation { createPost(title:\"hello\", content:\"world\") { _id title content comments { content } } }
```

#### Create Comment

```graphql
mutation { createComment(postId: \"5bed2a4f564b4fd99fa8041d\", content: \"deneme123\") { _id content postId } }
```

## Slide

https://docs.google.com/presentation/d/1dmreDWqJG4NTGQf2LCWIXtIC2f0BFK6lJ_1qQBcgGXE

## Postman

https://www.getpostman.com/collections/a713446844651b5e7e11
