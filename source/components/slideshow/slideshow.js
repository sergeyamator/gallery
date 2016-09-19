import React from 'react';
import Picture from '../picture/picture.js';

require('./slideshow.scss');

class Slideshow extends React.Component {
  state = {
    currentSlide: 0
  };

  static propTypes = {
    pictures: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    close: React.PropTypes.func
  };

  render() {
    let className = 'slideshow_item';
    if (this.props.selectedItem) {
      return (
        <div className="slideshow">
          <Picture ref="picture" className={className} item={this.props.selectedItem}/>
          <a href="#" className="gallery_close" onClick={this.props.close}>X</a>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Slideshow;