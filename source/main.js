'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/gallery/gallery';
import pictures from './assets/db/data';

require("./assets/styles/app.scss");

ReactDOM.render(
  <Gallery data={pictures} />,
  document.getElementById('gallery')
);
