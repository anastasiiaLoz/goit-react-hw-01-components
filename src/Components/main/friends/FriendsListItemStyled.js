import styled from "styled-components";

export const FriendsItemStyled = styled.li`
  display: flex;
  align-items: center;
  width: 300px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 1px rgb(201, 201, 201), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  padding: 20px;
  background-color: #fff;
  align-items: center;
  margin-bottom: 15px;

  .status {
    display: block;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: ${({ isOnline }) => (isOnline ? "green" : "red")};
  }
  .name {
    font-weight: 700;
    margin-left: 20px;
  }

  .avatar {
    margin-left: 20px;
  }
`;
