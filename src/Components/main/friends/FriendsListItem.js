import React from "react";
import PropTypes from "prop-types";
import { FriendsItemStyled } from "./FriendsListItemStyled";

const FriendsListItem = ({ friend }) => {
  return (
    <>
      <FriendsItemStyled key={friend.id} isOnline={friend.isOnline}>
        <span className="status">{friend.isOnline}</span>
        <img className="avatar" src={friend.avatar} alt="" width="48" />
        <p className="name">{friend.name}</p>
      </FriendsItemStyled>
    </>
  );
};

export default FriendsListItem;
