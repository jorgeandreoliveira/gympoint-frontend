import styled from 'styled-components';
//import { Link } from 'react-router-dom';
import { Input } from '@rocketseat/unform';

export const Container = styled.div`
  height:100px;
`;

export const Content = styled.div`
  display: flex;
  height: 64px;  
  justify-content: space-between;
  align-items: center;
  margin-left: 120px;
    
  h1 {
    color: #444;
    font-size: 24px;
    margin-left: 150px;
  }  
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 10px;
  padding-left: 10px;
  align-items: center;
  justify-content: center;  

  div {
    text-align: right;
    margin-right: 200px;
    
  }`;

  export const ButtonVoltar = styled.button`
    background: #DDD;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    width: 112px;
    height: 36px;
    border-radius: 4px;
    margin-right: 10px;
  `;

  export const ButtonSalvar = styled.button`
    background: #EE4D64;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    width: 112px;
    height: 36px;
    border-radius: 4px;
  `;

export const List = styled.div`
  height: 307px;
  width: 900px;
  background: #FFF;
  border-radius: 4px;
  margin-left: 270px;
  margin-right: 270px;

  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #444;
    padding: 30px 0 5px 30px;
  }

  Select {
    background: #FFF;
    border: 1px solid #DDDDDD;
    height: 45px;
    width: 840px;
    border-radius: 4px;
    margin-left: 30px;

  }

  div {

    display: flex;

    Select {
    background: #FFF;
    border: 3px solid #DDDDDD;
    
    height: 45px;    
    border-radius: 4px;   

  } 
    
    h1 {
      margin-right: 100px;
    }

    input {
    
      height: 45px;
      background: #FFFFFF;
      border: 1px solid #DDDDDD;
      box-sizing: border-box;
      border-radius: 4px;
      justify-content: space-between;
      margin-left: 30px;
    }

    .disabled {
      background: #F5F5F5;
      
    }

  }
`;

export const Nome = styled(Input)`
  width: 840px;
  height: 45px;
  background: #FFFFFF;
  border: 1px solid #DDDDDD;
  box-sizing: border-box;
  border-radius: 4px;
  margin-left: 30px;
`