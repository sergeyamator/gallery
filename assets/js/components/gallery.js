'use strict';

import React from 'react';
import Photo from './picture';

function imagesLoaded(parentNode) {
  const imgElements = parentNode.querySelectorAll('img');

  for (const img of imgElements) {
    if (!img.complete) {
      return false;
    }
  }

  return true;
}


class Gallery extends React.Component {
  state = {
    loading: true
  };

  static propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  };

  handleStateChange() {
    const galleryElement = this.refs.gallery;
    this.setState({
      loading: !imagesLoaded(galleryElement)
    })
  }

  renderSpinner() {
    return (this.state.loading)
      ? <div className="spinner">
          <img
            src="/assets/img/spinner.gif"

          />
       </div>
      : null;
  }

  render() {
    let pictures = this.props.data;

    const photoComponents = pictures.map(photo => {
      return <li className="gallery_item picture" key={photo.id}><Photo callback={this.handleStateChange.bind(this)} item={photo}/></li>
    });

    return (
      <div className="gallery" ref="gallery">
        {this.renderSpinner()}
        <ul className="gallery_list">
          {photoComponents}
        </ul>
      </div>
    );
  }
}

export default Gallery;