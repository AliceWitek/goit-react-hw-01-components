import React from 'react';
import propTypes from 'prop-types';
import {
    SocialProf,
    SocialCont,
    SocialAv,
    SocialName,
    SocialTag,
    SocialLoc,
    Stats,
    StatsLi,
}   from './social-profile.styles';

export const SocialProfile = ({
    userName,
    userTag,
    userLocation,
    userAvatar,
    userStats,
}) => {
    return (
        <SocialProf className="profile">
           <SocialCont className="description"> 
               <SocialAv className="avatar" alt="User avatar" src={userAvatar}/>
               <SocialName className="name">
                   {userName}
               </SocialName>
               <SocialTag className="tag">
                   @{userTag}
               </SocialTag>
               <SocialLoc classname="location">
                   {userLocation}
               </SocialLoc>
            </SocialCont>
        </SocialProf>
        
        <Stats className="stats">
            <StatsLi>

            </StatsLi>
        </Stats>
    );
}