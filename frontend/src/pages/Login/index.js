import React from 'react';
import Logo from '../assets/logo.png'

export default function Login() {
  return (
    <>
      <img src={Logo} alt="Logo" />
      <form>
        <h2>SEU E-MAIL</h2>
        <input autoFocus type="email" placeholder="exemplo@email.com" />
        <h2>SUA SENHA</h2>
        <input type="password" placeholder="********" />
        <button type="submit">Acessar</button>
      </form>
    </>
  );
}
