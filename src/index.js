import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle';
import './index.css';

import Main from './Main';

ReactDom.render(<Main/>, document.querySelector('#root'));