import s from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={s.box}>
      <div className={s.card}>
        <img className={s.profileImg} src={image} alt="User avatar" />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.list}>
        <li className={s.item}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={s.item}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={s.item}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
