'use strict';

import React from 'react';

class Photo extends React.Component {
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
      visible: true
    });
  };

  render() {
    const {name, path, description} = this.props.item;
    let visible = this.state.visible;

    return (
      <div>
        <h2>{name}</h2>
        <div><img src={path}/></div>
        <a onClick={this.readMore} className={`photo_link ${visible ? 'hidden' : ''}`} href="#">Подробнее</a>
        <p className={`photo_description ${visible ? '' : 'hidden'}`}>{description}</p>
      </div>
    )
  }
}

export default Photo;