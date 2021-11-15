import { all, takeLatest } from "redux-saga/effects";
import { CardTypes } from "ReduxApp/Actions/CardActions";
import { getCard, updateCard } from "Sagas/CardSagas";

/* ------------- Types ------------- */

export default function* root() {
  yield all([
    takeLatest(CardTypes.GET_CARD, getCard),
    takeLatest(CardTypes.UPDATE_CARD, updateCard),
  ]);
}
