import React, { Fragment, useState } from 'react';
import CustomAppBar from 'components/CustomAppBar';
import { useQuery } from '@apollo/react-hooks';
import GET_POPULAR_ARTISTS from 'modules/apollo/queries/getPopularArtists';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import UserCard from 'components/UserCard';
import Loading from 'components/Loading';
import { GetPopularArtistsType, GetPopularArtistsVars, ArtistType, GetMe } from 'types';
import GET_ME from 'modules/apollo/queries/getMe';
import MeCard from 'components/MeCard';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }
  }),
);

export default function HomePage () {
  const classes = useStyles();
  const [num, setNum] = useState(0)
  const {loading, error, data, fetchMore} = useQuery<GetPopularArtistsType, GetPopularArtistsVars>(
    GET_POPULAR_ARTISTS, {
    variables: {
      size: 3
    },
    onCompleted: (data) => setNum(3)
  })

  const onFetchMore = () => {
    fetchMore(
    {
      query: GET_POPULAR_ARTISTS,
      variables: {
        size: num + 3
      },
      updateQuery: (prev, {fetchMoreResult}) => {
        console.log({prev, fetchMoreResult})
        if(!fetchMoreResult) return prev
        setNum(num + 3)
        return {
          ...prev,
          popular_artists: {
            ...prev.popular_artists,
            artists: {
              ...prev.popular_artists.artists,
              ...fetchMoreResult.popular_artists.artists.slice(num, num + 3)
            }
          }
        }
      },
    })
  }

  const {data: meData} = useQuery<GetMe> (GET_ME)

  if(loading) return <Loading/>
  if(error) return <p>{error.message}</p>

  if(data)
  return (
    <Fragment>
      <CustomAppBar/>
      <div className={classes.root}>
        <div style={{ padding: 20, paddingLeft: "10%", paddingRight: "10%" }}>
          <Grid container spacing={3}>
            <Grid container item xs={8} spacing={3}>
              {data.popular_artists.artists
              .filter((artist: ArtistType) => artist.name !== "Banksy")
              .map((artist: ArtistType) => (
                <Grid item xs={4} key={artist.id}>
                  <UserCard {...artist}/>
                </Grid>
              ))}
              <Button size="small" color="default" variant="outlined" fullWidth onClick={onFetchMore}>
                Fetch More
              </Button>
            </Grid>
            <Grid item xs={4}>
              {meData && <MeCard {...meData.me}/>}
            </Grid>
          </Grid>
        </div>
      </div>
    </Fragment>
  )
}
