import styled from "styled-components";

export const TransactionListStyled = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: center;
  margin-top: 30px;
  border: 1px solid grey;


  th {
    padding: 10px;
    text-align: left;
    border: 1px solid grey;
    background: lightblue;
    text-align: center;
    
  }
  tbody tr:nth-child(odd) {
    background: white;
    padding: 40px;
    
  }

  tbody tr:nth-child(even) {
    background: lightgrey;
`;
