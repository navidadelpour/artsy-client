import gql from "graphql-tag";
import ARTIST_MAIN from 'modules/apollo/fragments/ArtistMain'

const FOLLOW_ARTIST = gql`
mutation($input: FollowArtistInput!) {
  followArtist(input: $input){
    artist {
      ...artistMain
    }
  }
}
${ARTIST_MAIN}
`

export default FOLLOW_ARTIST