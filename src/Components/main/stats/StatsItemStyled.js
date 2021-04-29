import styled from "styled-components";

export const StatsItemStyled = styled.li`
  border: 1px solid #928e8e;
  height: 65px;
  width: 100%;
  align-items: center;
  background-color: #d2efc3;
  display: flex;
  flex-direction: column;
  padding: 10px;

  :nth-child(1) {
    background-color: ${"#" + Math.floor(Math.random() * 14567654).toString(16)};
  }
  :nth-child(2) {
    background-color: ${"#" + Math.floor(Math.random() * 16942590).toString(16)};
  }
  :nth-child(3) {
    background-color: ${"#" + Math.floor(Math.random() * 17567832).toString(16)};
  }
  :nth-child(4) {
    background-color: ${"#" + Math.floor(Math.random() * 18540123).toString(16)};
  }
  :nth-child(5) {
    background-color: ${"#" + Math.floor(Math.random() * 19684205).toString(16)};
  }
`;
