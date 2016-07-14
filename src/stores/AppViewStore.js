import {createStore} from 'fluxible/addons';
import appViews from '../constants/AppViews';
import {ChangeView} from '../constants/ActionNames';
import {EventEmitter} from 'events';

const defaultView = appViews.TemperatureView;

console.dir(new EventEmitter());

export default class AppViewStore extends EventEmitter {

  constructor(dispatch) {
    super(dispatch);
    this._currentView = defaultView;
  }

  getCurrentAppView() {
    return this._currentView;
  }

  viewChangeHandler(payload) {

    console.log('store got payload', payload);

    this._currentView = payload;
    this.emit('change');
  }

}

AppViewStore.storeName = 'AppViewStore';
AppViewStore.handlers = {
  [ChangeView]: 'viewChangeHandler'
};
