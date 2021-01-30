import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";


interface IAppState
{
  isLoggedIn: boolean,
  authToken: string
}


export class App extends React.Component<{}, IAppState>
{
  state: IAppState = {
    isLoggedIn: false,
    authToken: ""
  }

  render()
  {
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
}