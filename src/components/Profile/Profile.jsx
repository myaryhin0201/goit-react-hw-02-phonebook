import './Profile.scss';
import PropTypes from 'prop-types';
const imageDefault = `https://martialartsplusinc.com/wp-content/uploads/2017/04/default-image-620x600.jpg`;
const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className="profileList">
    <div className="profile">
      <div className="description">
        <img src={avatar} alt={name} className="avatar" width="250" />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats">
        {Object.keys(stats).map(stat => (
          <li key={stat}>
            <span className="label">{stat}</span>
            <span className="quantity">{stats[stat]}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
Profile.defaultProps = {
  avatar: imageDefault,
};
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  avatar: PropTypes.string,
};
export default Profile;
