import React from 'react';
import AppStackNavigator from './Navigation';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './redux/RootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppStackNavigator />
      </Provider>
        
    )
  }
}
