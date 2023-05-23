import PropTypes from 'prop-types';
import e from './Profile.module.css';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={e.profile}>
      <div className={e.description}>
        <img src={avatar} alt={username} className={e.avatar} />
        <p className={e.name}>{username}</p>
        <p className={e.tag}>{tag}</p>
        <p className={e.location}>{location}</p>
      </div>

      <ul className={e.stats}>
        <li className={e.statsItem}>
          <span className={e.label}>Followers</span>
          <span className={e.quantity}>{followers}</span>
        </li>
        <li className={e.statsItem}>
          <span className={e.label}>Views</span>
          <span className={e.quantity}>{views}</span>
        </li>
        <li className={e.statsItem}>
          <span className={e.label}>Likes</span>
          <span className={e.quantity}>{likes}</span>
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
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};