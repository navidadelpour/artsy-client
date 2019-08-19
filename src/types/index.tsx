export type ArtistType = {
  __typename?: 'Artist',
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
  __typename?: 'Artwork',
  id: string
  imageUrl: string
  title: string
  category: string
}

export type MeType = {
  __typename?: 'Me',
  id: string,
  name: string,
  email: string,
  follow_artists: {
    artists: Array<ArtistType>
  }
}

export type GetPopularArtistsType = {
  popular_artists: {
    __typename?: 'PopularArtists',
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

export type GetSearch = {
  search: {
    edges: Array<{
      node: Searchable
    }>
  }
}

export type GetSearchVars = {
  query: string
}

export type Searchable = {
  displayLabel: string
  imageUrl: string
  href: string
}