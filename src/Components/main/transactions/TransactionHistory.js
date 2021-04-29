import React from "react";
import { TransactionHistoryStyled } from "./TransactionHistoryStyled";
import PropTypes from "prop-types";

const TransactionHistory = ({ transaction }) => {
  return (
    <>
      <TransactionHistoryStyled>
        <td>{transaction.type}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.currency}</td>
      </TransactionHistoryStyled>
    </>
  );
};

TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string
}.isRequired;

export default TransactionHistory;
