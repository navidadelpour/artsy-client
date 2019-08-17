import gql from "graphql-tag";
import ARTIST_MAIN from 'modules/apollo/fragments/ArtistMain'
import ARTWORK_MAIN from 'modules/apollo/fragments/ArtworkMain'

const GET_ARTIST = gql`
query ($artworks_size: Int, $id: String!) {
  artist(id: $id) {
    hometown
    gender
    ...artistMain
    artworks(size: $artworks_size) {
      ...artworkMain
    }
  }
}
${ARTIST_MAIN}
${ARTWORK_MAIN}
`

export default GET_ARTIST