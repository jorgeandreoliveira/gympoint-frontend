import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #EE4D64;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 340px;
  height: 430px;
  text-align: center;
  background: #ffffff;

  img {
    margin-top: 30px;
    height: 53px;
    width: 62px;
  }

  h1 {
    font-size:29px;
    margin-top: 20px;
    color: #EE4D64;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
  }

  h2 {
    text-align: left;
    font-size: 12px;
    padding-bottom: 5px;
    font-family: Roboto, sans-serif;
    padding-left: 20px;
    color: #444;
  }


  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    
    input {
      font-size: 16px;
      font-family: 'Roboto';
      border-radius: 4px;
      border-width: 1px;
      border-style: solid;
      height: 44px;
      width: 300px;
      margin: 3px 20px 10px;
      padding-left: 10px;      
    }

    button {
      margin-left: 20px;
      margin-top: 10px;
      height: 44px;
      width: 300px;
      background: #EE4D64;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      color: #fff;
    }
  }
`;