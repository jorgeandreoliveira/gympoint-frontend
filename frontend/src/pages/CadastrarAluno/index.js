import React, {Component} from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from "~/services/api";
import history from '~/services/history';


import { Container, Content, Profile, ButtonVoltar, ButtonSalvar,
List, Nome, Email } from './styles';

const schema = Yup.object().shape({
  nome: Yup.string().required('Nome é obrigatório'),
  email: Yup
    .string()
    .email('Informe um e-mail válido')
    .required('e-mail é obrigatório'),
  idade: Yup
    .number()
    .integer()
    .required('Idade é obrigatória')
    .positive('Idade inválida'),
});



export default class CadastrarAluno extends Component {

  constructor() {
    super();
    this.state = {
      aluno: {},
    }
  }

  async componentDidMount() {

    const { match } = this.props;
    
    if (match.params.id) {
      const response = await api.get(`/students/${match.params.id}`)

      this.setState({
        aluno: response.data
      });
    }
  }

  async handleSubmit(data) {
    
    const { nome, email, idade, peso, altura } = data;

    if (this.state) {
      await api.put(`/students/${this.state.aluno.id}`, {   
        nome, email, idade, peso, altura  
      });
    }
    else {  
      await api.post("/students", { 
        nome, email, idade, peso, altura 
      });
    }
   
    history.push("/Alunos");
  }  
    
  render() {
  return(
    <Container>
      <Form schema={schema} onSubmit={this.handleSubmit} initialData={this.state.aluno}>
        <Content>    
          <h1>Cadastro de aluno</h1>        
          <aside>
            <Profile>
              <div>
                <ButtonVoltar onClick={() => history.push("/Alunos")}>Voltar</ButtonVoltar>
                <ButtonSalvar type="submit">Salvar</ButtonSalvar>
              </div>
            </Profile>
          </aside>        
        </Content>      
        <List>
          <h1>NOME COMPLETO</h1>
          <Nome name="nome"></Nome>
          <h1>ENDEREÇO DE E-MAIL</h1>
          <Email name="email" type="email"></Email>
            <div>
              <h1>IDADE</h1>
              <h1>PESO (em Kg)</h1>
              <h1>ALTURA</h1>          
              </div>
            <div>  
              <Input name="idade"></Input>
              <Input name="peso"></Input>
              <Input name="altura"></Input>
          </div>
        </List>
      </Form>    
  </Container>
  )}
}