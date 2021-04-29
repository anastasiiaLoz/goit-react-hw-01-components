import styled from "styled-components";

export const StatsListContainer = styled.section`
  width: 500px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 1px rgb(201, 201, 201), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  background-color: #fff;
  border-radius: 3px;
  margin: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  }

  .title{
    text-transform: uppercase;
    margin:0 auto;
    background-color: whitesmoke;
    width:100%;
    padding:40px 0;
    text-align: center;
  }

.stat-list{
    display:flex;
    list-style:none;
    margin:0;
    padding:0;
    width:100%;
    justify-content: space-around;
}
`;
