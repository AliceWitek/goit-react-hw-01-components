import React from 'react';
import PropTypes from 'prop-types';
import {
    SocialProf,
    SocialCont,
    SocialAv,
    SocialName,
    SocialTag,
    SocialLoc,
    Stats,
    StatsLi,
    StatsLab,
    StatsQ,
}   from './social-profile.styles';

export const SocialProfile = ({
    userName,
    userTag,
    userLocation,
    userAvatar,
    userStats,
}) => {
    return (<>
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
        

        <Stats className="stats">
            <StatsLi>
                <StatsLab className="label">
                    Followers
                </StatsLab>
                <StatsQ className="quantity">
                    {userStats.followers}
                </StatsQ>
            </StatsLi>
            <StatsLi>
                <StatsLab className="label">
                    Views
                </StatsLab>
                <StatsQ className="quantity">
                    {userStats.views}
                </StatsQ>  
            </StatsLi>
            <StatsLi>
                <StatsLab className="label">
                    Likes
                </StatsLab>
                <StatsQ className="quantity">
                    {userStats.likes}
                </StatsQ>
            </StatsLi>
        </Stats>
    </SocialProf>
        </>
    );
}

SocialProfile.propTypes = {
    stats: PropTypes.object.isRequired,
    userName: PropTypes.string,
    tag: PropTypes.string,


}