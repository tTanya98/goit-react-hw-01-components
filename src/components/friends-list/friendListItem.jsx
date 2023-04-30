import PropTypes from 'prop-types';
import sty from './friendListItemStyle.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={sty.item}>
        <span className={sty.status} style = {{ background: (isOnline? "green" : "red") }}></span>
        <img className={sty.avatar} src={avatar} alt="User avatar" width="45" />
        <p className={sty.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  
};