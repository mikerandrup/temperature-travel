import {createStore} from 'fluxible/addons';
import appViews from '../constants/AppViews';
import {ChangeView} from '../constants/ActionNames';
import {EventEmitter} from 'events';

const CHANGE_EVENT = '@@CHANGE';

const defaultView = appViews.TemperatureView;
let _currentView;

class AppViewStore extends EventEmitter {

  constructor(dispatch) {
    super(dispatch);
    _currentView = defaultView;
  }

  getCurrentAppView() {
    return _currentView;
  }

  viewChangeHandler(payload) {
    _currentView = payload;
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(handler) {
    this.addListener(CHANGE_EVENT, handler);
  }

  removeChangeListener(handler) {
    this.removeListener(CHANGE_EVENT, handler);
  }

}

AppViewStore.storeName = 'AppViewStore';
AppViewStore.handlers = {
  [ChangeView]: 'viewChangeHandler'
};

export default new AppViewStore();
