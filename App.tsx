import React from "react";
import { Provider } from "react-redux";
import createStore from "ReduxApp";
import Router from "Navigation/AppNavigation";

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
