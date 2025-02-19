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
import {MeType, ArtistType} from 'types'
import { Link } from 'react-router-dom';
import routeWithParams from 'utils/routeWithParams';
import { artist } from 'routes';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MeCard (props: MeType) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.email}
          </Typography>
          <br/>
          <ul>
          {props.follow_artists && props.follow_artists.artists.map((artist: ArtistType) => (
            <li key={artist.name}>{artist.name}</li>
          ))}
          </ul>
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
      </CardActions>
    </Card>
  );
}