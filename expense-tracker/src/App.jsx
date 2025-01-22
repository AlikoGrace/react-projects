import { useState } from "react";

export default function App() {
  const [showAddTransactions, setShowAddTransactions] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [balance, setBalance] = useState(0);

  function handleShowAddTransactions() {
    setShowAddTransactions((showAddTransactions) => !showAddTransactions);
  }

  function handleAddTransaction(transaction) {
    setTransactions((transactions) => [...transactions, transaction]);
    const { amount, transactionType } = transaction;
    if (transactionType === "expense") {
      setExpense((prevExpense) => prevExpense + amount);
      setBalance((prevBalance) => prevBalance - amount);
    } else if (transactionType === "income") {
      setIncome((prevIncome) => prevIncome + amount);
      setBalance((prevBalance) => prevBalance + amount);
    }
  }

  function handleDeleteTransaction(id) {
    setTransactions((transactions) =>
      transactions.filter((transaction) => transaction.id != id)
    );
  }

  return (
    <div className="main">
      <Tracker
        showAddTransactions={showAddTransactions}
        onHandleShowAddTransactions={handleShowAddTransactions}
        onHandleAddTransaction={handleAddTransaction}
        transactions={transactions}
        onHandleDeleteTransaction={handleDeleteTransaction}
        expense={expense}
        income={income}
        balance={balance}
      />
    </div>
  );
}

function AddTransaction({ onHandleAddTransaction }) {
  const [amount, setAmount] = useState("");
  const [details, setDetails] = useState("");
  const [transactionType, setTransactionType] = useState("");

  // function handleTransaction(transaction) {
  //   const { amount, transactionType } = transaction;

  //   if (transactionType === "expense") {
  //     setExpense((prevExpense) => {
  //       const newExpense = prevExpense + amount;
  //       console.log("Updated expense:", newExpense);
  //       return newExpense;
  //     });
  //   } else if (transactionType === "income") {
  //     setIncome((prevIncome) => {
  //       const newIncome = prevIncome + amount;
  //       console.log("updated income:", newIncome);
  //       return newIncome;
  //     });
  //   }
  // }

  function handleSubmit(e) {
    e.preventDefault();

    if (!amount || !details || !transactionType) {
      alert("Please fill out all fields!");
      return;
    }

    const newTransaction = {
      amount,
      details,
      transactionType,
      id: Date.now().toString(),
    };
    onHandleAddTransaction(newTransaction);

    setAmount("");
    setDetails("");
    setTransactionType("");
  }
  return (
    <form className="add-transaction-container" onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Enter Amount"
        className="add-transaction-input"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <input
        type="text"
        placeholder="Enter Details"
        className="add-transaction-input"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />
      <div className="radio-container">
        <div className="radio-btn">
          <input
            type="radio"
            id="expense"
            name="type"
            value="expense"
            checked={transactionType == "expense"}
            onChange={(e) => setTransactionType(e.target.value)}
          />
          <label htmlFor="" className="radio-label">
            Expense
          </label>
        </div>
        <div className="radio-btn">
          <input
            type="radio"
            id="income"
            name="type"
            value="income"
            checked={transactionType == "income"}
            onChange={(e) => setTransactionType(e.target.value)}
          />
          <label htmlFor="" className="radio-label">
            Budget
          </label>
        </div>
      </div>
      <button className="submit-btn">Add Transaction</button>
    </form>
  );
}

function OverviewComponent({
  onHandleShowAddTransactions,
  showAddTransactions,
  balance,
}) {
  return (
    <div className="overview-container">
      <h2 className="balance">
        Balance <span>${balance}</span>
      </h2>

      <button className="add-btn" onClick={onHandleShowAddTransactions}>
        {showAddTransactions ? "cancel" : "Add"}
      </button>
    </div>
  );
}

function Tracker({
  showAddTransactions,
  onHandleShowAddTransactions,
  onHandleAddTransaction,
  transactions,
  onHandleDeleteTransaction,
  expense,
  income,
  balance,
}) {
  return (
    <div className="tracker-container">
      <h1 className="tracker-heading">Expense Tracker</h1>
      <OverviewComponent
        showAddTransactions={showAddTransactions}
        onHandleShowAddTransactions={onHandleShowAddTransactions}
        balance={balance}
      />
      {showAddTransactions && (
        <AddTransaction onHandleAddTransaction={onHandleAddTransaction} />
      )}

      <div className="transaction-details">
        <div className="expense-box">
          <p>
            Expense <span>${expense}</span>
          </p>
        </div>
        <div className="income-box">
          <p>
            Budget <span>${income}</span>
          </p>
        </div>
      </div>
      <TransactionsContainer
        transactions={transactions}
        onHandleDeleteTransaction={onHandleDeleteTransaction}
      />
    </div>
  );
}

function TransactionsContainer({ transactions, onHandleDeleteTransaction }) {
  return (
    <ul className="add-transactions-container">
      <h2 className="heading">Transactions</h2>
      <input type="text" className="search-input" placeholder="search here" />
      {transactions.map((transaction) => (
        <TransactionItems
          key={transaction.id}
          transaction={transaction}
          onHandleDeleteTransaction={onHandleDeleteTransaction}
        />
      ))}
    </ul>
  );
}

function TransactionItems({ transaction, onHandleDeleteTransaction }) {
  return (
    <li className="transaction-item">
      <span>{transaction.details}</span>
      <span>{transaction.amount}</span>
      <button
        className="remove-btn"
        onClick={() => onHandleDeleteTransaction(transaction.id)}
      >
        Remove
      </button>
    </li>
  );
}
