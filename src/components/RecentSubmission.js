import React from 'react';
import PropTypes from 'prop-types';
import './RecentSubmission.css';

const RecentSubmission = (props) => {


  return (
      <div className="RecentSubmission">

      { props.submissions.length >= 1  && (
        <section>
          <h3>The Most Recent Submission</h3>
          <p className="RecentSubmission__submission">{ props.submissions[(props.submissions.length -1)]}</p>
          {console.log(props.submissions)}
        </section>
      )}

    </div>

  );
}


RecentSubmission.propTypes = {
  submissions: PropTypes.array,
  // isSubmitted: PropTypes.bool,
  // onShowFinalPoemCallback: PropTypes.func,
};


export default RecentSubmission;
