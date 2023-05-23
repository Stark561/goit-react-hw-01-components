import PropTypes from 'prop-types';
import { FriendsItem } from './FriendsItem';
import s from './Friends.module.css';

export const FriendsList = ({ list }) => {
  return (
    <ul className={s.friendList}>
      {list.map(listItem => {
        return <FriendsItem  {...listItem} key={listItem.id} />;
      })}
    </ul>
  );
};

FriendsList.prototype = {
  list: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
    })
  ),
};