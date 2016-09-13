'use strict';

import React from 'react';
import Photo from './photo';
import pictures from './data';

class Gallery extends React.Component {
  constructor() {
    super();
  }

  render() {
    const photoComponents = pictures.map(photo => {
      return <li key={photo.id}><Photo item={photo}/></li>
    });

    return (
      <ul>
        {photoComponents}
      </ul>
    );
  }
}

export default Gallery;