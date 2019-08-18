import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import * as routes from './index'
import HomePage from 'pages/HomePage';
import Artist from 'pages/Artist';

const RoutesContainer = () => {
  return (
    <BrowserRouter>
      <Route exact path={routes.index} component={HomePage as any}/>
      <Route exact path={routes.artist} component={Artist as any}/>
    </BrowserRouter>
  )
}

export default RoutesContainer