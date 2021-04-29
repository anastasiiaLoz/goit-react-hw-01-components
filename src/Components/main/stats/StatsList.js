import React from "react";
import StatsListItem from "./StatsListItem";
import { StatsListContainer } from "./StatsListStyled";
import PropTypes from "prop-types";

const StatsList = ({ stats }) => {
  return (
    <StatsListContainer>
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {stats.map(statistic => (
          <StatsListItem statistic={statistic} key={statistic.id} />
        ))}
      </ul>
    </StatsListContainer>
  );
};

StatsList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default StatsList;
