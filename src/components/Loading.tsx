import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    progress: {
      position: "absolute",
      left: "50%",
      top: "50%",
    }
  }),
);

export default function Loading () {
  const classes = useStyles();
  return <CircularProgress className={classes.progress} />
}
