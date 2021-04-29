import React from "react";
import data from "../../data/index";
import StatsList from "./stats/StatsList";
import UserListItem from "./users/UserListItem";
import FriendsList from "./friends/FriendsList";
import TransactionList from "./transactions/TransactionList";

const Main = () => {
  return (
    <main>
      <UserListItem user={data.user} />
      <StatsList stats={data.stats} />
      <FriendsList friends={data.friends} />
      <TransactionList transactions={data.transactions} />
    </main>
  );
};

export default Main;
