import React from "react";
import { useFirestore } from "../../hooks/useFirestore";

import style from "./Home.module.css";
const TransactionList = ({ transactions }) => {
  const { deleteDocument } = useFirestore("transactions");
  return (
    <ul className={style.transactions}>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <p className={style.name}>{transaction.name}</p>
          <p className={style.amount}>${transaction.amount}</p>
          <button onClick={() => deleteDocument(transaction.id)}>x</button>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
