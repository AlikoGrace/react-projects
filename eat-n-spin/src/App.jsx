import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((prevFriends) => [...prevFriends, friend]);
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend((current) => (current?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {}

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelection={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />

        {showAddFriend && <FormAddFriend onhandleAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "close" : "Add friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

function FriendList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id; // Use optional chaining here
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt="friend" />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}
        </p>
      )}
      {friend.balance == 0 && <p>You and {friend.name} are even</p>}
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "close" : "select "}
      </Button>
    </li>
  );
}

function FormAddFriend({ onhandleAddFriend }) {
  const [name, setName] = useState();
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = { image: `${image}?=${id}`, id, name, balance: 0 };
    console.log(newFriend);
    onhandleAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <>
      <form className="form-add-friend" onSubmit={handleSubmit}>
        <label>😍Friend name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>🖼️Image url</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Button>Add</Button>
      </form>
    </>
  );
}

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill();
  }
  return (
    <form action="" className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a Bill with {selectedFriend.name}</h2>
      <label htmlFor=""> 🤑 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label htmlFor=""> 🫰 Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />
      <label htmlFor=""> 🫰 {selectedFriend.name}s expense</label>
      <input type="text" disabled value={paidByFriend} />
      <label htmlFor=""> 💵 Who is paying the bill</label>
      <select
        name=""
        id=""
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="you">you</option>
        <option value="Your ">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
