import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from "../../services/api";
import history from '../../services/history';


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

export default function CadastrarAluno() {

  async function handleSubmit(data) {
    
    const { nome, email, idade, peso, altura } = data;

    await api.post("/students", { 
      nome, email, idade, peso, altura 
    });
   
    history.push("/Alunos");
  }  

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Content>    
          <h1>Cadastro de aluno</h1>        
          <aside>
            <Profile>
              <div>
                <ButtonVoltar>Voltar</ButtonVoltar>
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
  );
}
