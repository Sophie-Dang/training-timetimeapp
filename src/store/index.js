import { configureStore } from '@reduxjs/toolkit';
// import { compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';

// Enhancers
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const enhancers = composeEnhancers(
//   applyMiddleware(
//     // secondMiddleware,
//   ),
// );

// Store
const store = configureStore({
  reducer: rootReducer, 
  // middleware: enhancers,
});

// Export
export default store;