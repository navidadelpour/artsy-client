import gql from "graphql-tag";
import ARTIST_MAIN from 'modules/apollo/fragments/ArtistMain'

const GET_POPULAR_ARTISTS = gql`
query ($size: Int) {
  popular_artists(size: $size) {
    artists {
      ...artistMain
    }
  }
}
${ARTIST_MAIN}
`

export default GET_POPULAR_ARTISTS