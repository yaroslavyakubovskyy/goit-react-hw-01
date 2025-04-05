import FriendListItem from '../FriendListItem/FriendListItem';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.list}>
      {friends.map(({ id, ...rest }) => {
        return (
          <li key={id}>
            <FriendListItem {...rest} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
