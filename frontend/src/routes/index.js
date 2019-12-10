import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '~/pages/Login';
import Alunos from '~/pages/Alunos';
import CadastrarAluno from '~/pages/CadastrarAluno';
import Plan from '~/pages/Plan';
import CreatePlan from '~/pages/CreatePlan';
import Registration from '~/pages/Registration'; 
import CreateRegistration from '~/pages/CreateRegistration';
import Help from '~/pages/Help';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/Login" component={Login} />
      <Route path="/Alunos" component={Alunos} isPrivate/>
      <Route path="/CadastrarAluno" exact component={CadastrarAluno} isPrivate/>
      <Route path="/CadastrarAluno/:id" component={CadastrarAluno} isPrivate/>
      <Route path="/Planos" component={Plan} isPrivate/>
      <Route path="/CadastrarPlano" exact component={CreatePlan} isPrivate/>
      <Route path="/CadastrarPlano/:id" component={CreatePlan} isPrivate/>
      <Route path="/Matriculas" exact component={Registration} isPrivate/>
      <Route path="/CadastrarMatricula" exact component={CreateRegistration} isPrivate/>
      <Route path="/CadastrarMatricula/:id" exact component={CreateRegistration} isPrivate/>
      <Route path="/Auxilio" exact component={Help} isPrivate/>
    </Switch>
  );
}