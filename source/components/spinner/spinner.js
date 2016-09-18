import React from 'react';
require('./spinner.scss');

class Spinner extends React.Component {

  static propTypes = {
    src: React.PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="spinner">
        <img src={this.props.src} alt="spinner"/>
      </div>
    );
  }
}

export default Spinner;