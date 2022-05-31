import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import {SocialProfile} from './components/social-profile/SocialProfile.jsx';
import user from './components/social-profile/user.json';

import {Statistics} from './components/statistics/Statistics.jsx';
import data from './components/statistics/data.json';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App>
            <SocialProfile 
                userName = {user.username}
                userAvatar = {user.avatar}
                userTag = {user.tag}
                userLocation = {user.location}
                userStats = {user.stats}
            />
            
            <Statistics title="Upload stats" stats={data} />
            <Statistics stats={data} />
                         
            
        </App>
    </React.StrictMode>
);