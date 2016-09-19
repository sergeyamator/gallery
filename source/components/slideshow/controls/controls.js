import React from 'react';
require('./controls.scss');

class Controls extends React.Component {
  render() {
    return (
      <div>
        <a onClick={this.props.prev} href="#" className="gallery_btn gallery_btn--left">&lt;</a>
        <a onClick={this.props.next} href="#" className="gallery_btn gallery_btn--right">&gt;</a>
      </div>
    );
  }
}

export default Controls;