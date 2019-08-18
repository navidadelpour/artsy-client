export type ArtistType = {
  id: string
  name: string
  bio: string
  imageUrl: string
  hometown: string
  gender: string
  is_followed: boolean
  artworks: Array<ArtworkType>
}

export type ArtworkType = {
  id: string
  imageUrl: string
  title: string
  category: string
}

export type MeType = {
  id: string,
  name: string,
  email: string,
  follow_artists: {
    artists: Array<ArtistType>
  }
}

export type GetPopularArtistsType = {
  popular_artists: {
    artists: Array<ArtistType>
  }
}

export type GetPopularArtistsVars = {
  size: number
}

export type GetArtistType = {
  artist: ArtistType
}

export type GetArtistVars = {
  artworks_size: number,
  id: string
}

export type GetMe = {
  me: MeType
}

export type GetFollowArtistPayload = {
  followArtist: {
    artist: ArtistType,
  }
};

export type GetFollowArtistVars = {
  artist_id: string,
  unfollow: boolean,
  clientMutationId: string,
}
