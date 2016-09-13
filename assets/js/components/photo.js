'use strict';

import React from 'react';

class Photo extends React.Component {
  constructor() {
    super();
  }

  render() {
    const {name, path} = this.props.item;

    return (
      <div>
        <h2>{name}</h2>
        <img src={path}/>
      </div>
    )
  }
}

export default Photo;