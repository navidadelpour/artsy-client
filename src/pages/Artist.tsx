import React, { Fragment } from 'react';
import CustomAppBar from 'components/CustomAppBar';
import {ArtistType, GetArtistType, GetArtistVars} from 'types'
import {match} from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks';
import GET_ARTIST from 'modules/apollo/queries/getArtist';
import Loading from 'components/Loading';
import { makeStyles, Theme, createStyles, Grid, Paper } from '@material-ui/core';
import UserCard from 'components/UserCard';
import { ArtworkType } from 'types/index'
import ArtworkCard from 'components/ArtworkCard';

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

export type UrlParams = {
  id: string
}

export type Props = {
  artist: ArtistType
  match: match<UrlParams>
}

export default function Artist (props: Props) {
  const classes = useStyles()
  const {loading, error, data} = useQuery<GetArtistType, GetArtistVars>(
    GET_ARTIST, {
      variables: {
        artworks_size: 6,
        id: props.match.params.id
      }
    }
  )

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
              {data.artist.artworks.map((artwork : ArtworkType) => (
                <Grid item xs={4}>
                  <ArtworkCard {...artwork}/>
                </Grid>
              ))}
            </Grid>
            <Grid item xs={4}>
              <Grid item xs={12}>
                <UserCard {...data.artist}/>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </Fragment>
  )
}
