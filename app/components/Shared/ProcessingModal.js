import React from 'react';
import PropTypes from 'prop-types';

class ProcessingModal extends React.Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="c-processing">
        <div className="c-processing__wrapper">
          <h1>{this.props.label}</h1>
          <div className="c-processing__animation" />
        </div>
      </div>
    );
  }
}

export default ProcessingModal;
