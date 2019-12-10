import React, { Component } from 'react';
import api from '~/services/api';
import history from '~/services/history';

import { Container, Content, Profile, List, LinkEditar, 
  LinkApagar, TdCenter } from './styles';

export default class Registration extends Component {
  
  constructor() {
    super();
    this.state = {
      registrations: []
    }

    
    this.handleDelete = this.handleDelete.bind(this);
}
  
async componentDidMount() {

  const response = await api.get("/registrations");

  //console.log(response.data);

  this.setState({
    registrations: response.data
  });
}

renderTableHeader()
{
  return (
  <tr>
    <th>ALUNO</th>
    <th>PLANO</th>
    <th>INÍCIO</th>
    <th>TÉRMINO</th>
    <th>ATIVA</th>
    <th></th>
    <th></th>
  </tr>
  )
}

renderTableData() {  
  
  return this.state.registrations.map((registration, index) => {
     const { id } = registration
     return (
        <tr key={id}>
           <td>{registration.Student.nome}</td>
           <TdCenter>{registration.Plan.title}</TdCenter>
           <TdCenter>{registration.start_date}</TdCenter>
           <TdCenter>{registration.end_date}</TdCenter>
           <TdCenter>{registration.active}</TdCenter>
           <td>
             <LinkEditar to={`/CadastrarMatricula/${registration.id}`}>editar</LinkEditar>
           </td>
           <td>
             <LinkApagar to="/Matriculas" onClick={() => this.handleDelete(`${registration.id}`)}>apagar</LinkApagar>
           </td>
        </tr>
     )
  })
}

handleDelete(id) {
  
  api.delete(`/registrations/${id}`);

  //history.push('/Matriculas');
}

  render () {

    return(
      <Container>
      <Content>
      <nav>
        <h1>Gerenciando matrículas</h1>        
        </nav>
        <aside>
          <Profile>
            <div>
              <button onClick={() => history.push("/CadastrarMatricula")}>+ CADASTRAR</button>
            </div>
          </Profile>
        </aside>        
      </Content>
      <List>
        <tbody>
          {this.renderTableHeader()}
          {this.renderTableData()}
        </tbody>
      </List>      
    </Container>
    )
  }
}
