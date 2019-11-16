import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Alunos from '../pages/Alunos';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/Login" component={Login} />
      <Route path="/Alunos" component={Alunos} isPrivate/>
    </Switch>
  );
}