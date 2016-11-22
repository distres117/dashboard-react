import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Main from 'main';
import * as redux from 'redux';
import thunk from 'redux-thunk';
import {reducers} from 'reducers';



const store = redux.createStore(reducers, {}, 
        redux.compose(redux.applyMiddleware(thunk), window.devToolsExtension()));

ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>
    ,
    document.getElementById('app')
);