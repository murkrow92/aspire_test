import API from "Services/API";
import { call, put } from "redux-saga/effects";
import CardActions, {
  GetCardAction,
  UpdateCardAction,
} from "ReduxApp/Actions/CardActions";

export function* getCard(action: GetCardAction) {
  const { onSuccess = () => {}, onFailed = () => {} } = action;
  const response = yield call(API.getCard);
  if (response.status === 200) {
    yield put(CardActions.getCardSuccess(response));
    onSuccess(response);
  } else {
    onFailed(response);
  }
}

export function* updateCard(action: UpdateCardAction) {
  const { params, onSuccess = () => {}, onFailed = () => {} } = action;
  const response = yield call(API.updateCard, params);
  if (response.status === 200) {
    yield put(CardActions.getCardSuccess(response));
    onSuccess(response);
  } else {
    onFailed(response);
  }
}
