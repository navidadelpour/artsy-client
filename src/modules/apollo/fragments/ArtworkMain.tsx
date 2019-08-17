import gql from "graphql-tag";

const ARTWORK_MAIN = gql`
fragment artworkMain on Artwork {
  imageUrl
  title
  category
}
`

export default ARTWORK_MAIN