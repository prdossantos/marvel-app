import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import Loader from "./components/Loader";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store";

ReactDOM.render(
    <Provider store={store}>
        <Suspense fallback={<Loader isPageLoader={true} isActive={true} />}>
            <App />
        </Suspense>
    </Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
