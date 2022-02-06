import React, { useEffect, useState } from "react";
import { useFirestore } from "./../../hooks/useFirestore";

const Transaction = ({ uid }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const { addDocument, response } = useFirestore("transactions");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({ uid, name, amount });
  };

  useEffect(() => {
    if (response.success) {
      setAmount("");
      setName("");
    }
  }, [response.success]);
  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction Name:</span>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Amount :</span>
          <input
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </label>
        <button className="btn">Add</button>
      </form>
    </>
  );
};

export default Transaction;
