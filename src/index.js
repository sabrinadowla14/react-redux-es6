/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore.dev';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {loadProjects} from './actions/projectActions';
import {loadUsers} from './actions/userActions';
import './styles/styles.css'; //Webpack can import css files too
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
//create an instance of createStore
const store = configureStore();
store.dispatch(loadProjects());
store.dispatch(loadUsers());
render(
  <Provider store = {store}>
  <Router history={browserHistory} routes={routes} />
  </Provider>,
       document.getElementById('app')

);
