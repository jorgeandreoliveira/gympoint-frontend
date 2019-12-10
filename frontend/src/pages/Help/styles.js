import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height:100px;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 120px;

  nav {
    display: flex;
    align-items: center;
    
    h1 {
      color: #444;
      font-size: 24px;
      margin-right: 10px;
      padding-right: 50px;
    }
  }
`;


export const TdCenter = styled.td`

  text-align: center;
`;

export const List = styled.table`

  background: #FFF;

  th, td {
    padding: 0 0 8px 150px;
  }
  th {
    text-align: left;
  }
  td {
    font-size: 16px;    
  }
`
export const LinkResponder = styled(Link)`
  font-size:15px;
  color:#4d85ee;
 
`