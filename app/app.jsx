import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Main from 'main';
import Sidebar from 'sidebar';
import Details from 'details';
import * as redux from 'redux';
import thunk from 'redux-thunk';
import {reducers} from 'reducers';
import {startGetAllDevices} from 'actions';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

require('style!css!foundation-sites/dist/css/foundation.min.css');
require('style!css!foundationIcons');
require('style!css!sass!applicationStyles');
require('script!raphael/raphael.min.js');
require('script!justgage/justgage.js');
$(document).foundation();

const store = redux.createStore(reducers, {}, 
        redux.compose(redux.applyMiddleware(thunk), window.devToolsExtension()));

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/">
                <Route path="/details/:id" component={Details}/>
                <IndexRoute component={Main}/>
            </Route>
        </Router>
    </Provider>
    ,
    document.getElementById('app')
);