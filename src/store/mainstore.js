import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {Reducer} from './Reducers/reducers'
// import {dataReducer} from './Reducers/Imgreducers'
// import {cartReducer} from './Reducers/cartReducer'
import thunk from 'redux-thunk';
let allReducers = combineReducers({Reducer})
const persistConfig = {
    key : 'root',
    storage
}
const middleware = [thunk];
const persistedReducer = persistReducer(persistConfig,allReducers);

export const store = createStore(persistedReducer,compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
window.store = createStore(persistedReducer)
export const persistor = persistStore(store);