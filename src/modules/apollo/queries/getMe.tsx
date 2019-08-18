import gql from "graphql-tag";

const GET_ME = gql`
query{
  me{
    id
    name
    email
    follow_artists {
      artists{
        name
      }
    }
  }
}
`

export default GET_ME