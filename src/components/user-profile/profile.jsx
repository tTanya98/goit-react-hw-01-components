import PropTypes from 'prop-types'; 
import sty from './profile-styles.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    const { followers, views, likes } = stats;
    return (
      <div className={sty.profile}>
        <div className={sty.description}>
          <img src={avatar} alt="User avatar" className={sty.avatar} />
          <p className={sty.name}>{username}</p>
          <p className={sty.tag}>@{tag}</p>
          <p className={sty.location}>{location}</p>
        </div>
  
        <ul className={sty.stats}>
          <li>
            <span className={sty.label}>Followers</span>
            <span className={sty.quantity}>{followers}</span>
          </li>
          <li>
            <span className={sty.label}>Views</span>
            <span className={sty.quantity}>{views}</span>
          </li>
          <li>
            <span className={sty.label}>Likes</span>
            <span className={sty.quantity}>{likes}</span>
          </li>
        </ul>
      </div>
    );
  };
  
  Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  };