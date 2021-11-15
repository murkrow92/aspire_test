import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardActions from "ReduxApp/Actions/CardActions";

function WithCardActions(OriginalComponent: any) {
  function EnhancedComponent(props: any) {
    const dispatch = useDispatch();
    // @ts-ignore
    const card = useSelector((state) => state?.card);

    function getCard(onSuccess = () => {}, onFailed = () => {}) {
      dispatch(CardActions.getCard(onSuccess, onFailed));
    }

    function updateCard(
      params = {},
      onSuccess = () => {},
      onFailed = () => {},
    ) {
      dispatch(CardActions.updateCard(params, onSuccess, onFailed));
    }

    return (
      <OriginalComponent
        {...props}
        card={card}
        getCard={getCard}
        updateCard={updateCard}
      />
    );
  }

  return EnhancedComponent;
}

export default WithCardActions;
