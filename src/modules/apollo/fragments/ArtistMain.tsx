import gql from "graphql-tag";

const ATRIST_MAIN = gql`
fragment artistMain on Artist {
  name
  bio
  imageUrl
  id
}
`


export default ATRIST_MAIN