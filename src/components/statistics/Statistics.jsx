import React from 'react';
import PropTypes from 'prop-types';
import randomColor from 'randomcolor';
import {
  StatsSection,
  StatsTitle,
  StatLiCon,
  StatLi,
  StatLab,
  StatPer,
} from './statistics.styles.js';

export const Statistics = ({ statsTitle, stats }) => {
  return (
    <>
      <StatsSection className="statistics">
        <StatsTitle className="title">{statsTitle}</StatsTitle>

        <StatLiCon className="stat-list">
          {stats.map(stats => (
            <StatLi randomColor={randomColor} key={stats.id} className="item">
              <StatLab className="label">{stats.label}</StatLab>
              <StatPer className="percentage">{stats.percentage}</StatPer>
            </StatLi>
          ))}
        </StatLiCon>
      </StatsSection>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
