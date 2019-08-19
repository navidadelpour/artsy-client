import gql from "graphql-tag";

const GET_SEARCH = gql`
query($query: String!) {
  search(query: $query, entities:ARTIST, first: 5) {
    edges {
      node {
        displayLabel
        imageUrl
        href
      }
    }
  }
}
`

export default GET_SEARCH