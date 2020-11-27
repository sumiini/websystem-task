import { combineReducers } from 'redux';
import ReactDom from 'react-dom';
import todo from './todo';
import {Provider} from 'react-redux';


render(
    <Provider store={createStore(reducers)}>
    <App />
    </Provider>
)



// Merge multiple reducers in single reducer object (root reducer)
export default combineReducers({
    todo
})