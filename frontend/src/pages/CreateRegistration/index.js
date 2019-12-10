import React, {Component} from 'react';
import { Form, Input, Select } from '@rocketseat/unform';
//import * as Yup from 'yup';
import api from "../../services/api";
import history from '../../services/history';
//import { parseISO, format } from 'date-fns';


import { Container, Content, Profile, ButtonVoltar, ButtonSalvar,
List } from './styles';

/* const schema = Yup.object().shape({
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
 */
export default class CreatePlan extends Component {

  constructor() {
    super();
    this.state = {
      registration: {},
      students: [],
      plans: []
    }
  }

  async componentDidMount() {

    const { match } = this.props;

    if (match.params.id) {
      const response = await api.get(`/registrations/${match.params.id}`)

      this.setState({
        registration: response.data
      });

            

      console.log(this.state.registration);
    }
    else {

      const responseStudents = await api.get("/students");

      const students = responseStudents.data.map(v => ({ id: v.id, title: v.nome }));

      this.setState({
        students: students
      });

      const responsePlans = await api.get("/plans");

      const plans = responsePlans.data.map(v => ({ id: v.id, title: v.title }));

      this.setState({
        plans: plans
      });

    }
  }

  async handleSubmit(data) {

    const { student_id, plan_id, start_date } = data;
    
    //console.log(data);
    
    /* const [date, month, year] = start_date.split('/').map(n => parseInt(n))
    const dateformated = new Date(year, month - 1, date, 
        new Date().getHours(), new Date().getMinutes()); */

    const response = await api.post("/registrations", { 
      student_id, plan_id, start_date
    });

    const registration = response.data;

     this.setState({
      registration: registration
    });
 


    console.log(this.state.registration);
 
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
      <Form onSubmit={this.handleSubmit} initialData={this.state.registration}>
        <Content>    
          <h1>Cadastro de matrícula</h1>        
          <aside>
            <Profile>
              <div>
                <ButtonVoltar onClick={() => history.push("/Matriculas")}>Voltar</ButtonVoltar>
                <ButtonSalvar type="submit">Salvar</ButtonSalvar>
              </div>
            </Profile>
          </aside>        
        </Content>      
        <List>
          <h1>ALUNO</h1>
          <Select name="student_id" options={this.state.students} />
            <div>
              <h1>PLANO</h1>
              <h1>DATA DE INÍCIO</h1>
              <h1>DATA DE TÉRMINO</h1>          
              <h1>VALOR FINAL</h1>          
              </div>
            <div>  
              <Select name="plan_id" options={this.state.plans} />
              <Input name="start_date"></Input>
              <Input className="disabled" name="end_date" 
                value={this.state.registration.end_date} disabled={true}></Input>
              <Input className="disabled" name="price" 
                value={this.state.registration.price}disabled={true}></Input>
          </div>
        </List>
      </Form>    
  </Container>
  )}
}