import React from "react";
import TransactionHistory from "./TransactionHistory";
import { TransactionListStyled } from "./TransactionListStyled";

const TransactionList = ({ transactions }) => {
  return (
    <TransactionListStyled>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <TransactionHistory transaction={transaction} key={transaction.id} />
        ))}
      </tbody>
    </TransactionListStyled>
  );
};

export default TransactionList;
