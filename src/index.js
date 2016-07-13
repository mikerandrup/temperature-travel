import React from 'react';
import ReactDOM from 'react-dom';
import Application from './Application';
import AppViewStore from './stores/AppViewStore';

import Fluxible from 'fluxible';
import createElementWithContext from 'fluxible-addons-react/createElementWithContext';

// const app = new Fluxible({
//   component: Application,
//   stores: [AppViewStore]
// });
//
// app.rehydrate({}, (err, context) => {
//   ReactDOM.render(
//     createElementWithContext(context, {}),
//     document.getElementById('root')
//   )
// });

ReactDOM.render(
  <Application />,
  document.getElementById('root')
)
