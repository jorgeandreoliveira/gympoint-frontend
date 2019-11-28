import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Alunos from '../pages/Alunos';
import CadastrarAluno from '../pages/CadastrarAluno'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/Login" component={Login} />
      <Route path="/Alunos" component={Alunos} isPrivate/>
      <Route path="/CadastrarAluno" component={CadastrarAluno} isPrivate/>
    </Switch>
  );
}