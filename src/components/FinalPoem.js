import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = props =>   {

  const finalPoem = props.submissions.map((submission, i) => {
    return <p key={i}>{submission}</p>
  });

  return (
    <div className="FinalPoem">

    {props.isSubmitted && (
      <section className="FinalPoem__poem">
      <h3>Final Poem</h3>
        {finalPoem}
      </section>
    )}

    {!props.isSubmitted && (
      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem"
        className="FinalPoem__reveal-btn"
        onClick={props.onShowFinalPoemCallback}
        />
      </div>
    )}

    </div>
  )

}

FinalPoem.propTypes = {
  submissions: PropTypes.array,
  isSubmitted: PropTypes.bool,
  onShowFinalPoemCallback: PropTypes.func,
};


export default FinalPoem;
