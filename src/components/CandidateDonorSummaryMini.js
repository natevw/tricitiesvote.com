import React from 'react';

const usd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 20,
});

const CandidateDonorSummaryMini = props => {
  const { fundraising } = props;
  // console.log(props);
  if (!fundraising) {
    return '';
  }
  return (
    <div className="donor-summary">
      <p>
        💰 {usd.format(fundraising.total_raised)} {' '}
        from {fundraising.unique_donors}
        <span
          className="why-plus"
          title="Why 'plus'? Sometimes multiple very small individual contributions are lumped together in one batch."
        >
          +
        </span>{' '} donors.
      </p>
    </div>
  );
};

export default CandidateDonorSummaryMini;
