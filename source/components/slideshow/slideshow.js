import React from 'react';
import Picture from '../picture/picture.js';
import Controls from '../slideshow/controls/controls';

require('./slideshow.scss');

class Slideshow extends React.Component {
  static propTypes = {
    close: React.PropTypes.func
  };

  render() {
    let className = 'slideshow_item';
    if (this.props.selectedItem) {
      return (
        <div className="slideshow">
          {/* Main picture in gallery */}
          <Picture ref="picture" className={className} item={this.props.selectedItem}/>

          {/* Close button */}
          <a href="#" className="gallery_close" onClick={this.props.close}>X</a>

          {/* Prev and next buttons */}
          <Controls prev={this.props.prev} next={this.props.next} />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Slideshow;