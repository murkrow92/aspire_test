// @ts-ignore
import { combineReducers } from "redux";
import configureStore from "./configureStore";
import rootSaga from "Sagas";
import { reducer as CardReducers } from "ReduxApp/Reducers/CardReducer";

export const reducers = combineReducers({
  card: CardReducers,
});

export default () => {
  const { store } = configureStore(reducers, rootSaga);
  return store;
};
