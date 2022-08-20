import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
export const FriendsList = (
) => {
  return (
    <>
      <ul className={styles.friendList}>
        <li className={styles.item}>
          <span className={styles.status}></span>
            <img className={styles.avatar} alt="User avatar" src="" />
            <p className={styles.name}></p>
        </li>
      </ul>
    </>
  );
};

export default FriendsList;

FriendsList.propTypes= {

}