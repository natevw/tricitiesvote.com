import React from 'react';

const CompareCandidateStatement = props => {
  const { jurisdiction, position, name, lastname, image, comment } = props;
  const posClass = `pos ${jurisdiction} ${position}`
  return (
    <div className={posClass}>
      <img alt={name} src={image} />
      <h5>{lastname}</h5>
      <div className="more">
        <span className="close"></span>
        <p className="comment">{comment}</p>
      </div>
    </div>
  )
}

export default CompareCandidateStatement;
