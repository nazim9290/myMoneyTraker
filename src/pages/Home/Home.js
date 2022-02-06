import React from "react";
import style from "./Home.module.css";
import Transaction from "./Transaction";
import { useAuthContext } from "./../../hooks/useAuthContext";
import { useCollection } from "./../../hooks/useCollection";
import TransactionList from "./TransactionList";

const Home = () => {
  const { user } = useAuthContext();
  const { document, error } = useCollection(
    "transactions",
    ["uid", "==", user.uid],
    ["createdAt", "desc"]
  );
  return (
    <div className={style.container}>
      <div className={style.content}>
        {error && <p>{error}</p>}
        {document && <TransactionList transactions={document} />}
      </div>
      <div className={style.sidebar}>
        <Transaction uid={user.uid} />{" "}
      </div>
    </div>
  );
};

export default Home;
