import React, { Component } from 'react';
import api from '~/services/api';
import history from '~/services/history';

import { Container, Content, Profile, List, LinkEditar, 
  LinkApagar, TdCenter } from './styles';

export default class Alunos extends Component {
  
  constructor() {
    super();
    this.state = {
      plans: []
    }

    
    this.handleDelete = this.handleDelete.bind(this);
}
  
async componentDidMount() {

  const response = await api.get("/plans");

  this.setState({
    plans: response.data
  });
}

renderTableHeader()
{
  return (
  <tr>
    <th>TÍTULO</th>
    <th>DURAÇÃO</th>
    <th>VALOR p/ MÊS</th>
    <th></th>
    <th></th>
  </tr>
  )
}

renderTableData() {  
  
  return this.state.plans.map((plan, index) => {
     const { id, title, duration, price } = plan
     return (
        <tr key={id}>
           <td>{title}</td>
           <TdCenter>{duration} mês(es)</TdCenter>
           <TdCenter>R${price},00</TdCenter>
           <td>
             <LinkEditar to={`/CadastrarPlano/${plan.id}`}>editar</LinkEditar>
           </td>
           <td>
             <LinkApagar to="" onClick={() => this.handleDelete(`${plan.id}`)}>apagar</LinkApagar>
           </td>
        </tr>
     )
  })
}

handleDelete(id) {
  
  api.delete(`/plans/${id}`);
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
              <button onClick={() => history.push("/CadastrarPlano")}>+ CADASTRAR</button>
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
