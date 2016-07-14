import React from 'react';
import ReactDOM from 'react-dom';
import Fluxible from 'fluxible';
import createElementWithContext from 'fluxible-addons-react/createElementWithContext';

import Application from './Application';
import AppViewStore from './stores/AppViewStore';

const fluxibleApp = new Fluxible ({
	component: Application,
	stores: [AppViewStore]
});

fluxibleApp.rehydrate({}, (err, context) => {
	if (err){
		console.log(err);
	}
	ReactDOM.render(
		createElementWithContext(context, {}),
		document.getElementById('root')
	);
});
