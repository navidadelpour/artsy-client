import gql from "graphql-tag";

const TEST = gql`
query ($size: Int) {
  popular_artists(size: $size) {
    artists {
      name
      id
    }
  }
}
`
export default TEST 