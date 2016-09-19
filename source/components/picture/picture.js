'use strict';

import React from 'react';
require('./picture.scss');

class Picture extends React.Component {
  state = {
    visible: false
  };

  static propTypes = {
    item: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      path: React.PropTypes.string.isRequired,
      active: React.PropTypes.bool.optional,
      className: React.PropTypes.string.optional
    })
  };

  readMore = e => {
    e.preventDefault();
    this.setState({
      visible: !this.state.visible
    });
  };

  onPictureClick = () => {
    let item = this.props.item;
    this.props.onClick(item);
  };

  render() {
    const {name, path, description} = this.props.item;
    let visible = this.state.visible;
    let onLoad = this.props.onLoadCb;

    return (
      <div className={this.props.className || null}>
        <h2>{name}</h2>
        <a className="picture_img" href="#" onClick={this.onPictureClick}><img src={path} onLoad={onLoad}/></a>
        <a onClick={this.readMore} className={`photo_link ${visible ? 'hidden' : ''}`} href="#">Подробнее</a>
        <a onClick={this.readMore} className={`photo_link ${visible ? '' : 'hidden'}`} href="#">Меньше</a>
        <p className={`photo_description ${visible ? '' : 'hidden'}`}>{description}</p>
      </div>
    )
  }
}

export default Picture;