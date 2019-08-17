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
import {ArtworkType} from 'types'
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

export default function ArtworkCard (props: ArtworkType) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.imageUrl}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.category}
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
      </CardActions>
    </Card>
  );
}