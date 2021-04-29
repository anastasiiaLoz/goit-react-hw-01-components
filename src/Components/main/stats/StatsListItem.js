import React from "react";
import { StatsItemStyled } from "./StatsItemStyled";
import { StatsListContainer } from "./StatsListStyled";
import PropTypes from "prop-types";

const StatsListItem = ({ statistic }) => {
  return (
    <>
      <StatsItemStyled className="item" key={statistic.id}>
        <span className="label">{statistic.label}</span>
        <span className="percentage">{statistic.percentage}</span>
      </StatsItemStyled>
    </>
  );
};

StatsListItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number
}.isRequired;

export default StatsListItem;
