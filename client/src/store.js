import {createStore, applyMiddleware, compose} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' 
import { createLogger } from "redux-logger"
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const middleware = [thunk, createLogger()]
const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart']
};
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer, compose(applyMiddleware(...middleware)))
export const persistor = persistStore(store);







// export default store;
// import { createStore } from 'redux'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' 

// import rootReducer from './reducers'

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }

// import { PersistGate } from 'redux-persist/integration/react'

// const App = () => {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <RootComponent />
//       </PersistGate>
//     </Provider>
//   );
// };



/// 

// import { createStore } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// import rootReducer from './reducers'; // the value from combineReducers

// const persistConfig = {
//     key: 'root',
//     storage: storage,
//     stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.,
//     whitelist: ['cart']
// };

// const pReducer = persistReducer(persistConfig, rootReducer);

// export const store = createStore(pReducer);
// export const persistor = persistStore(store);


// import React from 'react';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/lib/integration/react';

// import { persistor, store } from './store';
// import { RootComponent, LoadingView } from './components';


// const App = () => {
//   return (
//     <Provider store={store}>
//       // the loading and persistor props are both required!
//       <PersistGate loading={<LoadingView />} persistor={persistor}>
//         <RootComponent />
//       </PersistGate>
//     </Provider>
//   );
// };

// export default App;