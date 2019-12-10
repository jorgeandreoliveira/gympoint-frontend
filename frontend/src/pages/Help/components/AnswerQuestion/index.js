import React, { Component } from 'react';
import { Container, Header, Responder, Content } from './styles';
import api from "~/services/api";

export default class AnswerQuestion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
 handleSubmit(id) {

    const answer = this.state.value;

    const response = api.put(`/help/${id}`, {
      answer
    });
}

handleChange(event) {
  
  this.setState({value: event.target.value});
}

  render() {
  return (
    <>
    <Container>
    <Header>PERGUNTA DO ALUNO</Header>
    <label>{this.props.help.question}</label>
    <Header>SUA RESPOSTA</Header>
    <form>
      <Content value={this.state.value} onChange={this.handleChange}></Content>
    </form>
    <Responder onClick={() => this.handleSubmit(`${this.props.help.id}`)}>Responder aluno</Responder>
    </Container>
    </>
  )}
}
