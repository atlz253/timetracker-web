import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <div id="container">
          <Switch>
            <Route path="/">
              <AuthPage />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
