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
          <Picture ref="picture" className={className} item={this.props.selectedItem}/>
          <a href="#" className="gallery_close" onClick={this.props.close}>X</a>

          <Controls prev={this.props.prev} next={this.props.next} />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Slideshow;