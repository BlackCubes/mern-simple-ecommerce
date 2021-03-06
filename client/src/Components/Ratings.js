import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import { RatingIconStyled, RatingsStyled, SvgStyled } from '../common';

const StarIcon = ({ fill = 'none', offset, index = 1 }) => (
  <SvgStyled
    fill={offset ? `url(#starPercent${index})` : fill}
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <defs>
      <linearGradient
        y2="0%"
        x2="100%"
        y1="0%"
        x1="0%"
        id={`starPercent${index}`}
      >
        <stop stopColor="#ffe23e" offset={offset || '0%'} id="starFill1" />
        <stop stopColor="transparent" offset="0%" id="starFill2" />
      </linearGradient>
    </defs>

    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </SvgStyled>
);

const RatingIcons = ({
  index,
  rating,
  hoverRating,
  onMouseEnter,
  onMouseLeave,
  onSaveRating,
  cursortype,
}) => {
  const fill = useMemo(() => {
    if (hoverRating >= index) return '#ffe23e';
    if (!hoverRating && rating >= index) return '#ffe23e';
    return 'none';
  }, [rating, hoverRating, index]);

  return (
    <RatingIconStyled
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onSaveRating(index)}
      cursortype={cursortype}
    >
      <StarIcon fill={fill} />
    </RatingIconStyled>
  );
};

const RatingsInput = ({ cursortype, onRatingsChange }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const onMouseEnter = (index) => setHoverRating(index);
  const onMouseLeave = () => setHoverRating(0);
  const onSaveRating = (index) => {
    setRating(index);
    onRatingsChange(index);
  };

  return (
    <RatingsStyled>
      {[1, 2, 3, 4, 5].map((index) => (
        <RatingIcons
          key={index}
          index={index}
          rating={rating}
          hoverRating={hoverRating}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onSaveRating={onSaveRating}
          cursortype={cursortype}
        />
      ))}
    </RatingsStyled>
  );
};

const RatingsStatic = ({ rating = 0 }) => {
  const fill = (index) =>
    useMemo(() => {
      if (rating >= index) return '#ffe23e';
      return 'none';
    }, [rating, index]);

  const offset = (index) => {
    if (rating >= index) return '100%';
    if (rating < index) return `${(rating / index) * 100}%`;
    return '0%';
  };

  return (
    <RatingsStyled className="ratings-static">
      {[1, 2, 3, 4, 5].map((index) => (
        <StarIcon
          key={index}
          fill={fill(index)}
          offset={offset(index)}
          index={index}
        />
      ))}
    </RatingsStyled>
  );
};

StarIcon.propTypes = {
  fill: PropTypes.string,
  offset: PropTypes.string,
  index: PropTypes.number,
};

StarIcon.defaultProps = {
  fill: 'none',
  offset: null,
  index: 1,
};

RatingIcons.propTypes = {
  index: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  hoverRating: PropTypes.number.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onSaveRating: PropTypes.func.isRequired,
  cursortype: PropTypes.string,
};

RatingIcons.defaultProps = {
  cursortype: null,
};

RatingsInput.propTypes = {
  cursortype: PropTypes.string,
  onRatingsChange: PropTypes.func.isRequired,
};

RatingsInput.defaultProps = {
  cursortype: null,
};

RatingsStatic.propTypes = {
  rating: PropTypes.number,
};

RatingsStatic.defaultProps = {
  rating: 0,
};

export { RatingsInput, RatingsStatic };
