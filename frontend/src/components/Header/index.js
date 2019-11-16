import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Profile } from './styles';

import Logo from '~/pages/assets/logo2.png';

export default function Header() {
  return (
    <Container>
      <Content>
      <nav>
        <img src={Logo} alt="Logo" />
        <h1>GYMPOINT</h1>        
        <Link to="/Alunos">ALUNOS</Link>
        <Link to="/Planos">PLANOS</Link>
        <Link to="/Matriculas">MATRÍCULAS</Link>
        <Link to="/Auxilio">PEDIDOS DE AUXÍLIO</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Administrador</strong>
              <Link to="/Logout">sair do sistema</Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
