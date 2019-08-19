import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import {ArtistType, GetPopularArtistsVars, GetPopularArtistsType, GetFollowArtistPayload, GetFollowArtistVars, GetMe} from 'types'
import { Link } from 'react-router-dom';
import routeWithParams from 'utils/routeWithParams';
import { artist } from 'routes';
import { useMutation } from '@apollo/react-hooks';
import FOLLOW_ARTIST from 'modules/apollo/mutations/followArtist';
import GET_ME from 'modules/apollo/queries/getMe';
import { ApolloError } from 'apollo-client';
import GET_POPULAR_ARTISTS from 'modules/apollo/queries/getPopularArtists';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function UserCard (props: ArtistType) {
  const classes = useStyles();
  const [follow, {data}] = useMutation<GetFollowArtistPayload, {input: GetFollowArtistVars}>(
    FOLLOW_ARTIST, {
    variables: {
      input: {
        artist_id: props.id,
        unfollow: props.is_followed,
        clientMutationId: "5d590a8e729f74000e5f9986"
      }
    },
    refetchQueries: [
      {query: GET_ME}
    ],
    optimisticResponse: {
      followArtist: {
        artist: {
          ...props,
          is_followed: !props.is_followed
        }
      }
    },
    // update: (client, data: GetFollowArtistPayload) => {
      // try {
        // let meData = client.readQuery<GetMe>({query: GET_ME})
        // if(meData && data.followArtist.artist) {
        //   meData.me.follow_artists.artists.push(data.followArtist.artist)
        //   client.writeQuery<GetMe>({
        //     query: GET_ME,
        //     data: meData
        //   })
        // }
      // } catch (error) {
        // alert(JSON.stringify({state: "there is error", ...error}, null, 2))
      // }
    // },
    awaitRefetchQueries: false,
    // onCompleted: (data) => {alert(JSON.stringify(data, null, 2))},
    onError: (error: ApolloError) => {alert(JSON.stringify(error, null, 2))}
  })

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.imageUrl}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.bio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small" color="primary" variant="contained" fullWidth
          component={Link}
          to={routeWithParams(artist, {id: props.id})}
        >
          Learn More
        </Button>
        <Button size="small" color="secondary" variant="outlined" fullWidth onClick={() => follow()}>
          {props.is_followed && "un"}follow
        </Button>
      </CardActions>
    </Card>
  );
}