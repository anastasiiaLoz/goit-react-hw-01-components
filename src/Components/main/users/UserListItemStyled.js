import styled from "styled-components";

export const UserListContainer = styled.div`
  width: 250px;
  height: 300px;
  padding-top: 20px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 1px rgb(201, 201, 201), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  margin: auto;
  border-radius: 4px;
  margin-top: 30px;
  background-color: #fff;

  .userImg {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .userImg {
    display: block;
    margin: 0 auto;
  }

  .description {
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    text-align: center;
    font-size: 20px;
    padding-top: 10px;
  }

  p {
    color: grey;
    margin-top: 10px;
    font-weight: 500;
    margin-bottom: 13px;
  }
`;

export const UserCardBottomList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;

  .stats {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    padding: 10px;

    border-top: 1px solid grey;
    background-color: rgb(224, 224, 224);

    :not(:last-child) {
      border-right: 1px solid grey;
    }

    .label {
      font-size: 12px;
      font-weight: 600;
      color: grey;
      text-align: center;
      padding-bottom: 10px;
    }

    .quantity {
      text-align: center;
      font-weight: 700;
    }

    .location {
      margin-bottom: 15px;
    }
  }
`;
