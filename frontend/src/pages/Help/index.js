import React, { Component } from 'react';
import api from '~/services/api';

import { Container, Content, List } from './styles';
import ModalSetup from "~/components/Modal";
import AnswerQuestion from '~/pages/Help/components/AnswerQuestion';

export default class Help extends Component {
  
  constructor() {
    super();
    this.state = {
      helps: [],
      isModalOpen: false,
      help: {}
    }

    this.handleModalOpen = this.handleModalOpen.bind(this);
}

async handleModalOpen (help) {
  this.setState({
    isModalOpen: !this.state.isModalOpen
  });

  const response = await api.get(`/help/${help.id}`)

  this.setState({
    help: response.data
  });
}

dismissable =()=> {

  this.setState({
  isModalOpen: false})
}
  
async componentDidMount() {

  const response = await api.get("/help");

  this.setState({
    helps: response.data
  });

}

renderTableHeader()
{
  return (
  <tr>
    <th>ALUNO</th>
    <th></th>
  </tr>
  )
}

renderTableData(isModalOpen, children) {  
  
  return this.state.helps.map((help, index) => {
     const { id } = help
     return (
        <tr key={id}>
           <td>{help.Student.nome}</td>
           <td>
             <button onClick={() => this.handleModalOpen({id})}>responder</button>
             <ModalSetup
                visible={isModalOpen}
                dismiss={this.dissmissable}
                children={children} 
            />
           </td>
        </tr>
     )
  })
}

  render () {
    const {isModalOpen} = this.state;
    
    let children;
    if(isModalOpen){
        children =(
          <AnswerQuestion help={this.state.help}/>          
        );
      }

    return(
      <Container>
      <Content>
      <nav>
        <h1>Pedidos de auxílio</h1>        
        </nav>
      </Content>
      <List>
        <tbody>
          {this.renderTableHeader()}
          {this.renderTableData(this.state.isModalOpen, children)}
        </tbody>
      </List>      
    </Container>
    )
  }
}