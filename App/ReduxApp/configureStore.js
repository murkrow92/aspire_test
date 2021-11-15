import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

export default (rootReducer, rootSaga) => {
  const enhancers = [];
  const middleware = [];
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);
  enhancers.push(applyMiddleware(...middleware));
  const store = createStore(rootReducer, compose(...enhancers));
  const sagasManager = sagaMiddleware.run(rootSaga);

  return {
    store,
    sagasManager,
    sagaMiddleware,
  };
};
