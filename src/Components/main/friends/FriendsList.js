import React from "react";
import FriendsListItem from "./FriendsListItem";
import { FriendsListContainer } from "./FriendsListStyled";

const FriendsList = ({ friends }) => {
  return (
    <FriendsListContainer className="friend-list">
      {friends.map(friend => (
        <FriendsListItem friend={friend} key={friend.id} />
      ))}
    </FriendsListContainer>
  );
};

export default FriendsList;
