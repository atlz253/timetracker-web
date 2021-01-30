import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { Header } from "./components/Header";
import { IndexPage } from "./pages/IndexPage";


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

  SetToken(token: string)
  {
    this.setState({
      authToken: token,
      isLoggedIn: true
    });
  }

  render()
  {
    return (
      <BrowserRouter>
        <Header loginState={this.state.isLoggedIn} />
        <div id="wrapper">
          <div id="container">
            <Switch>
              <Route component={IndexPage} path="/" exact />
              <Route component={LoginPage} path="/login" token={this.state.authToken} onTokenChange={this.SetToken.bind(this)} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}