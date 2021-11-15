import { createActions } from "reduxsauce";
import { Action } from "redux";
import { AxiosResponse } from "axios";

const { Types, Creators } = createActions({
  getCard: ["onSuccess", "onFailed"],
  getCardSuccess: ["response"],
  updateCard: ["params", "onSuccess", "onFailed"],
});

export interface GetCardAction extends Action {
  onSuccess: (response: AxiosResponse) => void;
  onFailed: (response: AxiosResponse) => void;
}

export interface GetCardSuccessAction extends Action {
  response: AxiosResponse;
}

export interface UpdateCardAction extends Action {
  params: any;
  onSuccess: (response: AxiosResponse) => void;
  onFailed: (response: AxiosResponse) => void;
}

export const CardTypes = Types;

export default Creators;
