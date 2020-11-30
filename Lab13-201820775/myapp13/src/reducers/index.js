import { combineReducers } from 'redux';
import ReactDom from 'react-dom';
import todo from './todo';
import {Provider} from 'react-redux';
import { createStore } from 'redux'
import reducers from './reducers'

const store = createStore(reducers)

console.log(store.getState());

render(
    <Provider store={createStore(reducers)}>
    <App />
    </Provider>
)
//action 을 reducer로 보낸다 = dispatch


// Merge multiple reducers in single reducer object (root reducer)
export default combineReducers({
    todo
})