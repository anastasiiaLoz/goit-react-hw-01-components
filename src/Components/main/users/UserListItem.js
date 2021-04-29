import React from "react";
import PropTypes from "prop-types";
import { UserCardBottomList, UserListContainer } from "./UserListItemStyled";

const UserListItem = ({ user }) => {
  return (
    <UserListContainer>
      <div classNamee="profile">
        <div className="description">
          <img className="userImg" src={user.avatar} alt={user.name} />
          <h2>{user.name}</h2>

          <p>{user.tag}</p>
          <p className="location">{user.location}</p>

          <UserCardBottomList>
            <li className="stats">
              <span class="label">Followers</span>
              <span class="quantity">{user.stats.followers}</span>
            </li>
            <li className="stats">
              <span class="label">Views</span>
              <span class="quantity">{user.stats.views}</span>
            </li>
            <li className="stats">
              <span class="label">Likes</span>
              <span class="quantity">{user.stats.likes}</span>
            </li>
          </UserCardBottomList>
        </div>
      </div>
    </UserListContainer>
  );
};

UserListItem.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.shape({
      avatar: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number
    })
  }).isRequired
};

export default UserListItem;
