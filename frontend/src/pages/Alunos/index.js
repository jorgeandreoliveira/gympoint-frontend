import React, { Component } from 'react';
import api from '~/services/api';
import history from '~/services/history';

import { Container, Content, Profile, List, LinkEditar, 
  LinkApagar, TdCenter } from './styles';

let ALUNOS_INITAL_STATE = [];

export default class Alunos extends Component {
  
  constructor() {
    super();
    this.state = {
      alunos: [],
      filter: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
}
  
async componentDidMount() {

  const response = await api.get("/students");

  this.setState({
    alunos: response.data
  });

  ALUNOS_INITAL_STATE = this.state.alunos;

}

renderTableHeader()
{
  return (
  <tr>
    <th>NOME</th>
    <th>EMAIL</th>
    <th>IDADE</th>
    <th></th>
    <th></th>
  </tr>
  )
}

renderTableData() {  
  
  return this.state.alunos.map((aluno, index) => {
     const { id, nome, email, idade } = aluno
     return (
        <tr key={id}>
           <td>{nome}</td>
           <td>{email}</td>
           <TdCenter>{idade}</TdCenter>
           <td>
             <LinkEditar to={`/CadastrarAluno/${aluno.id}`}>editar</LinkEditar>
           </td>
           <td>
             <LinkApagar to="" onClick={() => this.handleDelete(`${aluno.id}`)}>apagar</LinkApagar>
           </td>
        </tr>
     )
  })
}

handleDelete(id) {
  
  api.delete(`/students/${id}`);

  /* const response = api.get("/students");

  this.setState({
    alunos: response.data
  });

  this.renderTableData(); */
}

handleChange(e) {
  
  const filter = e.target.value;

  if (filter === '')
  {
    this.setState({alunos: ALUNOS_INITAL_STATE});
    return;
  }

  const listAlunos = this.state.alunos.filter(
   aluno => aluno.nome.indexOf(filter) > -1);
   
   if (listAlunos.length > 0)    
      this.setState({alunos: listAlunos});    
    else    
      this.setState({alunos: ALUNOS_INITAL_STATE});
  }

  render () {

    return(
      <Container>
      <Content>
      <nav>
        <h1>Gerenciando alunos</h1>        
        </nav>
        <aside>
          <Profile>
            <div>
              <button onClick={() => history.push("/CadastrarAluno")}>+ CADASTRAR</button>
              <input onChange={this.handleChange} placeholder="Buscar aluno"/> 
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
