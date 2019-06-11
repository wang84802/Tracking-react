import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Track from './Track';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import Counter from './components/Counter';


//
// let store = createStore(todoApp);
// console.log(store.getState());
//
// let listener = store.subscribe(() =>
//     console.log(store.getState())
// );
// store.dispatch(todoActions.addTask('Test'));

////*20190529 redux counter
// const store = createStore(counter)
// const rootEl = document.getElementById('root')
//
// const render = () => ReactDOM.render(
//     <Counter
//         value={store.getState()} //getState方法獲取state
//         onIncrement={() => store.dispatch({ type: 'INCREMENT' })} //dispatch方法更新state
//         onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
//     />,
//     rootEl
// )
//
// render()
// store.subscribe(render)
////

//ReactDOM.render(<Text />, document.getElementById('root'));
ReactDOM.render(<Track />, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
