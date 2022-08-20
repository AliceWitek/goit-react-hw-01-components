import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { SocialProfile } from './components/social-profile/SocialProfile.jsx';
import user from './components/social-profile/user.json';

import { Statistics } from './components/statistics/Statistics.jsx';
import data from './components/statistics/data.json';
import styles from './components/App.module.css';

import FriendsList from './components/friends-list/FriendList.jsx';
import friends from './components/friends-list/friends.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className={styles.app}>
      <SocialProfile
        userName={user.username}
        userAvatar={user.avatar}
        userTag={user.tag}
        userLocation={user.location}
        userStats={user.stats}
      />

      <Statistics statsTitle="Upload stats" stats={data} />
      <FriendsList 
        avatar={friends.avatar}
        name={friends.name}
        isOnline={friends.isOnline}
      />
    </div>

  </React.StrictMode>
);
