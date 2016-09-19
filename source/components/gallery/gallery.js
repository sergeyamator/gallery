'use strict';

import React from 'react';

import Picture from '../../components/picture/picture';
import Spinner from '../spinner/spinner.js';
import Slideshow from '../slideshow/slideshow.js'

require('./gallery.scss');

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
    data: this.props.data,
    loading: true,
    view: 'grid',
    slideshow: false,
    selected: null
  };

  static propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  };

  handleStateChange() {
    const galleryElement = this.refs.gallery;
    this.setState({
      loading: !imagesLoaded(galleryElement),
    })
  }

  changeView = (e) => {
    e.preventDefault();

    let button = e.target;

    let state = (button.dataset.view === 'line') ? 'line' : 'grid';

    this.setState({
      view: state
    });
  };

  get renderSpinner() {
    return (this.state.loading)
      ? <Spinner src="/source/assets/img/spinner.gif"/>
      : null;
  }

  showGallery = (selected) => {
    this.setState({
      selected
    });
  };

 closeGallery = () => {
   let selected = null;

    this.setState({
      selected
    });
 };

  render() {
    const photoComponents = this.state.data.map(photo => {
      return <li ref="picture" className="gallery_item picture" key={photo.id}><Picture onClick={this.showGallery} onLoadCb={::this.handleStateChange} item={photo}/></li>
    });

    return (
      <div className="gallery" ref="gallery">
        {this.renderSpinner}

        <div className="gallery_view">
          <a href="#" data-view="grid" className={this.state.view === 'grid' ? 'gallery_view-button fa fa-th active' : 'gallery_view-button fa fa-th'}  onClick={this.changeView} />
          <a href="#" data-view="line" className={this.state.view === 'grid' ? 'gallery_view-button fa fa-bars' : 'gallery_view-button fa fa-bars active'} onClick={this.changeView} />
        </div>

        <ul className={this.state.view === 'grid' ? 'gallery_list' : 'gallery_list line'}>
          {photoComponents}
        </ul>

        <Slideshow close={this.closeGallery} selectedItem={this.state.selected} />
      </div>
    );
  }
}

export default Gallery;