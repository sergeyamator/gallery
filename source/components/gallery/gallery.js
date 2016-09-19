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

  /**
   * When all picture loaded
   * hide preloader
   */
  pictureLoaded() {
    const galleryElement = this.refs.gallery;
    this.setState({
      loading: !imagesLoaded(galleryElement),
    })
  }

  /**
   * Change view from grid to line and vise verse
   * by mouse click on tabs
   * @param {Event} e
   */
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

  /**
   * Show gallery with picture by index
   * @param {Number} index
   */
  showSlideshow = (index) => {
    let firstCount = 0;
    let lastCount = this.state.data.length - 1;

    if (index < firstCount) {
      index = lastCount;
    }

    if (index > lastCount) {
      index = firstCount;
    }

    this.setState({
      currentSlide: index,
      selected: this.state.data[index]
    });
  };


 closeSlideshow = () => {
   let selected = null;

    this.setState({
      selected
    });
 };


  render() {
    const photoComponents = this.state.data.map((photo, index) => {
      return <li  className="gallery_item picture" key={photo.id}><Picture onClick={this.showSlideshow.bind(this, index)} onLoadCb={::this.pictureLoaded} item={photo}/></li>
    });

    return (
      <div className="gallery" ref="gallery">
        {/* While pictures don't render spinner is shown */}
        {this.renderSpinner}

        {/* Grid and line view buttons  */}
        <div className="gallery_view">
          <a href="#" data-view="grid" className={this.state.view === 'grid' ? 'gallery_view-button fa fa-th active' : 'gallery_view-button fa fa-th'}  onClick={this.changeView} />
          <a href="#" data-view="line" className={this.state.view === 'grid' ? 'gallery_view-button fa fa-bars' : 'gallery_view-button fa fa-bars active'} onClick={this.changeView} />
        </div>

        {/* All pictures */}
        <ul className={this.state.view === 'grid' ? 'gallery_list' : 'gallery_list line'}>
          {photoComponents}
        </ul>

        {/* Slideshow */}
        <Slideshow
          close={this.closeSlideshow}

          /* Next picture button*/
          next={() => {
            this.showSlideshow(this.state.currentSlide + 1)
          }}

          /* Previous picture button*/
          prev={() => {
            this.showSlideshow(this.state.currentSlide - 1)
          }}

          /* Picture that shows at the slideshow */
          selectedItem={this.state.selected} />
      </div>
    );
  }
}

export default Gallery;