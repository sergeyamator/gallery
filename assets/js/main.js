'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/gallery';
import pictures from './components/data';

require("../styles/app.scss");

ReactDOM.render(
  <Gallery data={pictures} />,
  document.getElementById('gallery')
);