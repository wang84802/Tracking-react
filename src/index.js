import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Track from './Track';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer  from './reducer';
import Counter from './Counter';


let store = createStore(reducer);

// ReactDOM.render(
//     <Provider store = {store}>
//         <Counter />
//     </Provider>,
// document.getElementById("root")
// );

ReactDOM.render(<Track />, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
