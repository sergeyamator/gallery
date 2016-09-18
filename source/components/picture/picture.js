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
      path: React.PropTypes.string.isRequired
    })
  };

  readMore = e => {
    e.preventDefault();
    this.setState({
      visible: !this.state.visible
    });
  };

  render() {
    const {name, path, description} = this.props.item;
    let visible = this.state.visible;
    let callback = this.props.callback;

    return (
      <div>
        <h2>{name}</h2>
        <a className="picture_img" href="#"><img src={path} onLoad={callback} /></a>
        <a onClick={this.readMore} className={`photo_link ${visible ? 'hidden' : ''}`} href="#">Подробнее</a>
        <a onClick={this.readMore} className={`photo_link ${visible ? '' : 'hidden'}`} href="#">Меньше</a>
        <p className={`photo_description ${visible ? '' : 'hidden'}`}>{description}</p>
      </div>
    )
  }
}

export default Picture;