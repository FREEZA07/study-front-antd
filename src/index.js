import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';

import 'antd/dist/antd.css';

import DynamicForm from './samples/0224_DynamicForm';

ReactDOM.render(
  <Fragment>
    <DynamicForm a={1} />
  </Fragment>,
  document.getElementById('root')
);

