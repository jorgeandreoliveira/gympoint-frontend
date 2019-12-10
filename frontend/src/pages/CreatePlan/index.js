import React, {Component} from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from "../../services/api";
import history from '../../services/history';


import { Container, Content, Profile, ButtonVoltar, ButtonSalvar,
List, Nome } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('Título é obrigatório'),
  duration: Yup
    .number()
    .integer()
    .required('Duração é obrigatório')
    .positive('Duração inválida'),
  price: Yup
    .number()
    .integer()
    .required('Valor é obrigatóri0')
    .positive('Valor inválido'),
});

export default class CreatePlan extends Component {

  constructor() {
    super();
    this.state = {
      plan: {},
    }
  }

  async componentDidMount() {

    const { match } = this.props;

    if (match.params.id) {
      const response = await api.get(`/plans/${match.params.id}`)

      this.setState({
        plan: response.data
      });
    }

    console.log(this.state.plan);
  }

  async handleSubmit(data) {

    //const { id, title, duration, price } = data;
    console.log('entrei');
    console.log(this.state.plan);

    /* if (this.state) {
      await api.put(`/plans/${this.state.plan.id}`, {   
        title, duration, price
      });
    }
    else {   
      await api.post("/plans", { 
        title, duration, price
      });
    }
   
     history.push("/Planos");*/
  }  
    
  render() {
  return(
    <Container>
      <Form schema={schema} onSubmit={this.handleSubmit} initialData={this.state.plan}>
        <Content>    
          <h1>Cadastro de plano</h1>        
          <aside>
            <Profile>
              <div>
                <ButtonVoltar onClick={() => history.push("/Planos")}>Voltar</ButtonVoltar>
                <ButtonSalvar type="submit">Salvar</ButtonSalvar>
              </div>
            </Profile>
          </aside>        
        </Content>      
        <List>
          <h1>TÍTULO DO PLANO</h1>
          <Nome name="title"></Nome>
            <div>
              <h1>DURAÇÃO (em meses)</h1>
              <h1>PREÇO MENSAL</h1>
              <h1>PREÇO TOTAL</h1>          
              </div>
            <div>  
              <Input name="duration"></Input>
              <Input name="price"></Input>
              <Input name="total_price"></Input>
          </div>
        </List>
      </Form>    
  </Container>
  )}
}