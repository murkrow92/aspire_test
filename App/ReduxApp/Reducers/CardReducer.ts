import { RootStateOrAny } from "react-redux";
import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { CardTypes, GetCardSuccessAction } from "ReduxApp/Actions/CardActions";
import CardTransform from "Transforms/CardTransform";

export const INITIAL_STATE = Immutable({
  debitCard: new CardTransform(),
  fetchingCard: true,
});

export const getCardSuccess = (
  state: RootStateOrAny,
  action: GetCardSuccessAction,
) => {
  return state.merge({
    debitCard: new CardTransform(action.response.data),
    fetchingCard: false,
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [CardTypes.GET_CARD_SUCCESS]: getCardSuccess,
});
