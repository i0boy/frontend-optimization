import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

const ListPage = React.lazy(() => import("./pages/ListPage/index"));
const ViewPage = React.lazy(() => import("./pages/ViewPage/index"));

function App() {
  return (
    <div className="App">
      <Switch>
        <React.Suspense fallback={<div>로딩 중...</div>}>
          <Route path="/" component={ListPage} exact />
          <Route path="/view/:id" component={ViewPage} exact />
        </React.Suspense>
      </Switch>
    </div>
  );
}

export default App;
