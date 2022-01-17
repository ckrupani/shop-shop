import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

const store = createStore(rootReducer, composeWithDevTools());

const StoreProvider = (props) => <Provider store={store} {...props} />;

export { StoreProvider };
