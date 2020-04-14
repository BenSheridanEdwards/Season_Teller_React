import React from 'react'; 

const Spinner = (props) => {
  return (
    <div className="ui active dimmer" data-test="component-spinner">
      <div className="ui big text loader" data-test="spinner-message">{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: 'Loading...'
}

export default Spinner;
