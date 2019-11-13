import React from 'react';

//import { Wrapper } from '../_layouts/auth';

import Logo1 from '../assets/2DF0880E-0B1E-4E3C-A8C2-3304CA0B847B@1x.png'
import Logo2 from '../assets/223A88B0-3E04-4424-AC70-101F59035FC5@1x.png'

export default function Login() {
  return (
    <>
      <img src={Logo1} alt="Logo1" />
      <img src={Logo2} alt="Logo2" />
      <h1>GYMPOINT</h1>
      <form>
        <h2>SEU E-MAIL</h2>
        <input type="email" placeholder="exemplo@email.com" />
        <h2>SUA SENHA</h2>
        <input type="password" placeholder="********" />

        <button type="submit">Acessar</button>

      </form>

    </>
  );
}
