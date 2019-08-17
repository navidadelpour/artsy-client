import React, { Fragment } from 'react';
import CustomAppBar from 'components/CustomAppBar';
import { useQuery } from '@apollo/react-hooks';
import GET_POPULAR_ARTISTS from 'modules/apollo/queries/getPopularArtists';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import UserCard from 'components/UserCard';
import {ArtistType} from 'types'
import Loading from 'components/Loading';

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
  const {loading, error, data} = useQuery(
    GET_POPULAR_ARTISTS, {
    variables: {
      size: 7
    }
  })

  if(loading) return <Loading/>
  if(error) return <p>{error.message}</p>

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
                <Grid item xs={4}>
                  <UserCard {...artist}/>
                </Grid>
              ))}
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}></Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </Fragment>
  )
}
