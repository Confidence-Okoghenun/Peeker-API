export const config = {
  secrets: {
    jwt: process.env.jwt_key
  },
  dbUrl:
    'mongodb+srv://cloud:cloud@cloud-r4vra.mongodb.net/peeker?retryWrites=true&w=majority'
}
